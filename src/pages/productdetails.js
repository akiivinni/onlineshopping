import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/header/helmet/helmet";
import CommonSection from "../ui/commonsection";
import products from "../assets/data/products";
import "../styles/productdetails.css";
import ProductsList from "../ui/productslist";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartslice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState('desc');
  const reviewuser = useRef('');
  const reviewsMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product; // Extract category here
  const relatedproducts = products.filter(item => item.category === category); // Use category here

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewuser.current.value;
    const reviewMessage = reviewsMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewMessage,
      rating,
    };

    // Dispatch action or save review object as needed
    toast.success('Review submitted successfully');
  };

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }));
    toast.success('Product added to cart successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}></CommonSection>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
              </div>
              <div className="product_rating d-flex align-items-center gap-5 mb-3">
                <div>
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <span key={index} onClick={() => setRating(star)}>
                      <i className={star <= rating ? "ri-star-s-fill" : "ri-star-line"}></i>
                    </span>
                  ))}
                </div>
                <p>({avgRating} ratings)</p>
              </div>
              <div className="d-flex align-items-center gap-5">
                <span className="product_price">{price}</span>
                <span>category: {category.toUpperCase()}</span>
              </div>
              <span className="product_price">{price}</span>
              <p className="mt-3">{shortDesc}</p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>Add to Cart</motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === "desc" ? "active_tab" : ""}`} onClick={() => setTab("desc")}>Description</h6>
                <h6 className={`${tab === "rev" ? "active_tab" : ""}`} onClick={() => setTab("rev")}>Reviews ({reviews.length})</h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <span>{item.rating}(rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <h4>Leave your experience</h4>
                      <form onSubmit={submitHandler}>
                        <div className="form_group d-flex align-items-center gap-5">
                          <input type="text" placeholder="Enter name" ref={reviewuser} />
                        </div>
                        <div className="form_group">
                          {[1, 2, 3, 4, 5].map((star, index) => (
                            <span key={index} onClick={() => setRating(star)}>
                              {star}
                              <i className={star <= rating ? "ri-star-s-fill" : "ri-star-line"}></i>
                            </span>
                          ))}
                        </div>
                        <div className="form_group">
                          <textarea ref={reviewsMsg} rows={4} type="text" placeholder="Review Message..." />
                        </div>
                        <button type="submit" className="buy_btn">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related_titles">You might also like</h2>
            </Col>
            <ProductsList data={relatedproducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
