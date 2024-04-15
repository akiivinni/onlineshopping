import React from 'react';
import Helmet from '../components/header/helmet/helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      console.log(user);
      setLoading(false);
      toast.success('Successfully logged in');
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              {loading ? (
                <>
                  <h5 className="fw-bold">Loading...</h5>
                </>
              ) : (
                <>
                  <h3 className="fw-bold fs-4">Login</h3>
                  <Form className="auth_form" onSubmit={Signin}>
                    <FormGroup className="form_group">
                      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="form_group">
                      <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>

                    <button type="submit" className="buy_btn auth_btn">
                      Login
                    </button>
                    <p>
                      Don't have an account? <Link to="/signup">Create an account</Link>
                    </p>
                  </Form>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
