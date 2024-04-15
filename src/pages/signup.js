import React, { useState } from 'react';
import Helmet from '../components/header/helmet/helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase.config'; // Assuming you have `db` exported from firebase.config
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true); // Set loading to true

        try {
            // Create user with email and password
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            // Upload profile picture to Firebase Storage
            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                null,
                (error) => {
                    toast.error(error.message);
                    setLoading(false); // Set loading back to false in case of error
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        // Update user profile
                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });
                        // Store user data in Firestore
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                        });
                        toast.success('Account created');
                        navigate('/login');
                    } catch (error) {
                        toast.error(error.message);
                    } finally {
                        setLoading(false); // Set loading back to false after successful signup or error
                    }
                }
            );
        } catch (error) {
            toast.error(error.message);
            setLoading(false); // Set loading back to false in case of error
        }
    };

    return (
        <Helmet title="signup">
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center fw-bold">
                            {loading ? <h6>Loading....</h6> :
                                <Col lg="6" className="m-auto text-center">
                                    <h3 className="fw-bold fs-4">Signup</h3>
                                    <Form className="auth_form" onSubmit={signup}>
                                        <FormGroup className="form_group">
                                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup className="form_group">
                                            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup className="form_group">
                                            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup className="form_group">
                                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                        </FormGroup>
                                        <button type="submit" className="buy_btn auth_btn" disabled={loading}>
                                            {loading ? 'Signing up...' : 'Signup'}
                                        </button>
                                        <p>Create an account <Link to="/login">Please Login</Link></p>
                                    </Form>
                                </Col>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;
