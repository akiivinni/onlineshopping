import React from 'react';
import '../styles/productcard.css';
import productImg from '../assets/images/arm-chair-01.jpg'; // Corrected image path
import { motion } from 'framer-motion';
import { Col } from 'reactstrap'; // Corrected import
import { Link } from "react-router-dom";
import { toast} from 'react-toastify';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartslice"; 
import {cartActions} from "../redux/slices/cartslice"

const ProductCard = ({ item }) => {

  const dispatch = useDispatch()
  const addToCart = () => {

    dispatch(cartActions.addItem({ // Changed to use addItem directly

      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
    
    )


    
   toast.success('Product added success')




  }

  return (
    <Col lg="3" md="4">
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        
        <div className='p-2 product_info' >

          <h3 className="product_name"><Link to={`/shop/${item.id}`} className="activeClassName"> {/* Update or remove activeClassName prop */}
  <h3 className="product_name">{item.productName}</h3>
</Link>
</h3>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items -center justify-content-between" >
          <span className="price">{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}> {/* Ensure that onClick is properly defined */}
  <i className="ri-add-line"></i>
</motion.span>



        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
