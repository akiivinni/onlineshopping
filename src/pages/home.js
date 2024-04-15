import React, { useState, useEffect } from "react";
import Helmet from "../components/header/helmet/helmet";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap"; // Capitalize Col
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css'
import { motion } from 'framer-motion';
import Services from "../services/services";
import ProductsList from "../ui/productslist";
import Products from "../assets/data/products";
import counterImg from '../assets/images/counter-timer-img.png'


import Clock from "../ui/clock";
const Home = () => {
    const [trendingproducts, setTrendingproducts] = useState([]);
    const [bestsalesproducts,setBestsalesproducts]=useState([]);
    const[mobileproducts,setMobileproducts]=useState([]);
    const[wirelessproducts,setWirelessproducts]=useState([]);
    const[popularproducts,setPopularproducts]=useState([]);
    const year = new Date().getFullYear();
    useEffect(() => {
        const filteredTrendingProducts = Products.filter(item => item.category === "chair");
        const filteredBestSalesProducts = Products.filter(item => item.category === "sofa");
        const filteredmobileproducts= Products.filter(item => item.category === "mobile");
        const filteredwirelessproducts = Products.filter(item =>item.category === "wireless")
        const filteredpopularproducts = Products.filter(item =>item.category === "watch")
        setTrendingproducts(filteredTrendingProducts);
        setBestsalesproducts(filteredBestSalesProducts);
        setMobileproducts(filteredmobileproducts);
        setWirelessproducts(filteredwirelessproducts);
        setPopularproducts(filteredpopularproducts);

    }, []);
    

    return (
        <div>
            <Helmet title={"Home"} />
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero_content">
                                <p className="hero_subtitle">
                                    Trending Products in {year}
                                </p>

                                <h2>Make Your Interior More Minimalist and Modern</h2>
                                <p>
                                    Make your best furniture design come and visit ABC Furniture's world's largest store. Not only furniture, you can explore many more.
                                </p>

                                <motion.button className="buy_btn" whileTap={{ scale: 1.2 }}>
                                    <Link to='/shop'>SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <Services></Services>
            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section_title">Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingproducts} />
                    </Row>
                </Container>
            </section>

          <section className="best_sales">
          <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section_title">Best Sales</h2>
                        </Col>
                        <ProductsList data={bestsalesproducts} />
                    </Row>
                </Container>

          </section>

          <section className="timer_count">
          <Container>
          <Row> {/* Corrected from 'row' to 'Row' */}
          <Col lg='6' md='6'> {/* Corrected from 'col' to 'Col' */}
            
            <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock></Clock>
            <motion.button whileTap={{scale : 1.2}} className="buy_btn store_btn"><Link to ="/shop" >Visit store</Link></motion.button>

             </Col>

          <Col lg='6' md='6' className="text-end"> {/* Corrected from 'col' to 'Col' */}
          <img src= {counterImg} alt = ""/>
          
          </Col>
         
          </Row>
          </Container>
          </section >

          <section  className="new_arrivals">
            <Container>
                <Row>
                    <Col lg = "12" className="text-center">
                    <h2 className="section_title">NewArrivals</h2>
                    </Col>

                    <ProductsList data = {mobileproducts}/>
                    <ProductsList data = {wirelessproducts}/>
                </Row>

            </Container>

          </section>

          <section className="popular_category">
          <Container>
                <Row>
                    <Col lg = "12" className="text-center">
                    <h2 className="section_title">Popular in Category</h2>
                    </Col>

                    <ProductsList data = {popularproducts}/>
                    <ProductsList data = {wirelessproducts}/>
                </Row>

            </Container>




          </section>
        </div>
    );
}

export default Home;
