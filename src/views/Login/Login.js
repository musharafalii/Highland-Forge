import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import "@styles/react/pages/page-authentication.scss";
import React, { useState } from 'react';
import firebase from '../firebase/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from "react-toastify";
import 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/home');
      toast.success('Login')
      localStorage.setItem('userInfo', email);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };



  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" >
          <h2 className="brand-text text-primary ms-1 fs-4">Highland Forge</h2>
        </Link>

        <Col className="d-none d-lg-flex align-items-center bg-image p-5" lg="7" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <h3 className="logo-main">Highland<br /> Forge</h3>
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="5"
          sm="12"
        >

          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1 text-center">
              Login
            </CardTitle>
            <CardText className="mb-2 text-center">
              Please sign-in to your account!
              <br/>
              Email: mishuali488@gmail.com
              <br/>
              Pass: 123456
            </CardText>
            <Form>
              <Label className="form-label" for="login-email">
                Email
              </Label>
              <Input
                type="email"
                id="login-email"

                placeholder="example@gmail.com"
                autoFocus
                className="email fs-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="d-flex justify-content-between">
                <Label className="form-label pt-1" for="login-password">
                  Password
                </Label>
                <Link to="/forgot-password" className="pt-1">
                  <small>Forgot Password?</small>
                </Link>
              </div>

              <Input
                type="password"

                placeholder="Password"
                className=" fs-6 password rounded-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="button" className="bg-primary loginbuton w-100 rounded-1 mt-2" onClick={handleLogin}>
                Submit
              </button>
            </Form>

            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">or</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
