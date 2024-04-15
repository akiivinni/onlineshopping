import React from "react";
import '../styles/cart.css';
import Helmet from "../components/header/helmet/helmet";
import CommonSection from "../ui/commonsection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { cartActions } from "../redux/slices/cartslice";
import {Link} from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state=>state.cart.totalAmount)
    return (
        <Helmet title="cart">
            <CommonSection title='shopping cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">No item added to the cart</h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <Tr item={item} key={index} /> // Pass item as prop to Tr component
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className="d-flex-align-items-center justify-content-between">SubTotal
                                <span className="fs-4 fw-bold">${totalAmount}</span>
                                </h6>
                               
                                <p>taxes and shipping will calculate in Checkout</p>
                            <div>
                                <button className="buy_btn"><Link to = "/shop">Continue shopping</Link></button>
                                <button className="buy_btn"><Link to = "/checkout">Checkout</Link></button>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

// Correct the syntax of functional component
const Tr = ({ item }) => {

    const dispatch = useDispatch()
    const deleteProduct = ()=>{
        dispatch(cartActions.deleteItem(item.id))

    }
    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt="" /> {/* Fix the syntax */}
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}px</td> {/* Should it be 'px'? */}
            <td>
                <motion.i
                    whileTap={{ scale: 1.2 }}
                    className="ri-delete-bin-line" 
                    onClick={deleteProduct}
                ></motion.i>
            </td>
        </tr>
    );
};

export default Cart;
