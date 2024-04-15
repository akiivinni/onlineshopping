import React from "react";
import "./footer.css";
import { Container, Row, Col,ListGroup,ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            
               <div>
               <h1>ABC Furnitures</h1>
               </div>
             <p className="footer_text mt-4">This is ABC Furnitures explore world largest furintures with low prices</p>
          </Col>
          <Col lg="3">

            <div className="footer_quick-links">
                <h4 className="quick_links_title">Top Categories</h4>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>mobile phones</Link>
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>modern Sofa</Link>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>Arm Chair</Link>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>Smart Watches</Link>
                    </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg="2">

          <div className="footer_quick-links">
                <h4 className="quick_links_title">Top Categories</h4>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>mobile phones</Link>
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>modern Sofa</Link>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>Arm Chair</Link>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '#'>Smart Watches</Link>
                    </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg="3">

          <div className="footer_quick-links">
                <h4 className="quick_links_title">useful links</h4>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '/shop'>shops</Link>
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '/cart'>cart</Link>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '/login'>Login</Link>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="ps-0 border-0">
                        <Link to = '/signup'>Sign up</Link>
                    </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;