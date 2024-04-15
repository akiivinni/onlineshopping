import './header.css';
import { Container, Row } from "reactstrap";
import { useRef, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import useAuth from '../../customhooks/useauth';
import logo from '../../assets/images/eco-logo.png'; // Import your logo image

const nav_links = [
    { path: '/home', display: 'Home' },
    { path: '/shop', display: 'Shop' },
    { path: '/cart', display: 'Cart' }
];

const Header = () => {
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const profileActionRef = useRef(null);

    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { currentuser } = useAuth();

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header');
            } else {
                headerRef.current.classList.remove('sticky_header');
            }
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out');
            navigate('/home');
        }).catch(err => {
            toast.error(err.message);
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);

    const menuToggle = () => menuRef.current.classList.toggle('active_menu');
    const navigateToCart = () => navigate("/cart");
    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show_profileactions');

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className='logo'>
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>ABC Furnitures</h1>
                            </div>
                        </div>

                        <div className='navigation' ref={menuRef} onClick={menuToggle}>
                            <ul className='menu'>
                                {nav_links.map((item, index) => (
                                    <li className='nav_item' key={index}>
                                        <NavLink to={item.path} className="nav_item" activeClassName="nav_active">
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='nav_icons'>
                            <span className='fav_icon'><i className="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </span>
                            <span className='cart_icon' onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <span>
                                {currentuser ? (
                                    currentuser.photoURL ? (
                                        <motion.img whileTap={{ scale: 1.2 }} src={currentuser.photoURL} alt='' onClick={toggleProfileActions} />
                                    ) : (
                                        <Link to='/login'>Login</Link>
                                    )
                                ) : (
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <Link to='/signup'>Signup</Link>
                                        <Link to='/login'>Login</Link>
                                    </div>
                                )}
                                <div className='profile_actions' ref={profileActionRef} onClick={toggleProfileActions}>
                                    {currentuser ? (
                                        <span onClick={logout}>Logout</span>
                                    ) : null}
                                </div>
                            </span>
                        </div>

                        <div className="mobile_menu">
                            <span onClick={menuToggle}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
