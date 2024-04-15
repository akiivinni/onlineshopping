
import React, { useEffect, useState }  from "react";
import CommonSection from "../ui/commonsection";
import Helmet from "../components/header/helmet/helmet";
import {Container,Row,Col} from "reactstrap";
import '../styles/shop.css'
import Products from "../assets/data/products"
import ProductsList from "../ui/productslist";
import '../styles/productcard.css';

const Shop = ()=>
{

    const[productsData,setProductsData]=useState(Products)
    const handleFilter = e =>{

        const filterValue = e.target.value
        if(filterValue ==="sofa")
        {
            const filteredproducts = Products.filter(item=>item.category==='sofa')
            setProductsData(filteredproducts)
        }
        if(filterValue === "mobile")
        {
            const filteredproducts = Products.filter(
                (item)=> item.category === 'mobile'
            )
            setProductsData(filteredproducts)
        }
        if(filterValue === "chair")
        {
            const filteredproducts = Products.filter(
                (item)=> item.category === 'chair'
            )
            setProductsData(filteredproducts)
        }
        if(filterValue === "watch")
        {
            const filteredproducts = Products.filter(
                (item)=> item.category === 'watch'
            )
            setProductsData(filteredproducts)
        }

        if(filterValue === "wireless")
        {
            const filteredproducts = Products.filter(
                (item)=> item.category === 'wireless'
            )
            setProductsData(filteredproducts)
        }



    }

    const handleSearch = e => {

        const searchTerm = e.target.value
        const searchedproducts = Products.filter(item=>item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setProductsData(searchedproducts)

    }


    return <Helmet title = "shop">
     

        <CommonSection title = "Products"></CommonSection>

        <section>
            <Container>
                <Row>
                    <Col lg = "3" md = "6">
                        <div className="filter_widget">
                            <select onChange={handleFilter}>
                                <option>Filter by category</option>
                                <option value="sofa">sofa</option>
                                <option value="mobile">mobile</option>
                                <option value="chair">chair</option>
                                <option value="watch">watch</option>
                                <option value="wireless">wireless</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg = "3" md = "6" className="text-end">
                    <div className="filter_widget">
                            <select>
                                <option>sort By</option>
                                <option value="ascending">Ascending order</option>
                                <option value="descending">Descending</option>
        
                            </select>
                        </div>
                    </Col>
                    <Col lg = "6" md = "6">
                    <div className="search_box">
                           <input type = "text" placeholder="search" onChange={handleSearch}/>
                           <span>
                            <i class = "ri-search-line"></i>
                           </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
                <Row>
                    <Col>
                    {
                productsData.length === 0 ? <h1>No Products found</h1>
                : <ProductsList data={productsData}></ProductsList>
            }
                    </Col>
                </Row>
            </Container>

        </section>


       </Helmet>
    
}

export default Shop;