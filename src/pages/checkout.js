import React from "react";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import Helmet from "../components/header/helmet/helmet";
import CommonSection from "../ui/commonsection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";


const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return <Helmet title = "Checkout">
    <CommonSection title = "checkout"/>
    <section>
      <Container>
        <Row>
          <Col lg ='8'>
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Form className="billing_form">
              <FormGroup className="form_group">
                <input type = "text" name=""id="" placeholder="enter your name"/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type = "email" name=""id="" placeholder="enter your email"/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type = "number" name=""id="" placeholder="enter your phonenumber"/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type = "text" name=""id="" placeholder="street address"/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type = "text" name=""id="" placeholder="city"/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type = "text" name=""id="" placeholder="postal code"/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type = "text" name=""id="" placeholder="country"/>
              </FormGroup>
            </Form>
          </Col>
          <Col lg ='4'>
            <div className="checkout_cart">
              <h6>Total qty:<span>{totalQty} items</span></h6>
              <h6>SubTotal:<span>${totalAmount}</span></h6>
              <h6>
                <span>
                 
                  shipping: <br/>
                  free shipping
                </span>
              </h6>
              
              
              <h4>Total cost:<span>${totalAmount}</span></h4>

            </div>
            <button className="buy_btn auth_btn w_100">place an order</button>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
   

};

export default Checkout;
