import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <Container>
        <NavWrap>
          <Logo
            src="/Assets/images/main-site-logo.png"
            alt="netflix-logo"
          ></Logo>
        </NavWrap>
        <SignSection>
          <h1>Sign In</h1>
          <Form>
            <Input type="email" placeholder="Email"></Input>
            <br />
            <Input type="password" placeholder="Password"></Input>
            <br />
            <SubmitButton type="submit">Sign In</SubmitButton>
            <br />
            <InputCheckBoxWrap>
              <InputCheckBox type="checkbox" id="remember"></InputCheckBox>
              <InputCheckLabel for="remember">Remember Me</InputCheckLabel>
              <a href="#!" className="need-help">
                Need Help?
              </a>
            </InputCheckBoxWrap>

            <InputCheckBoxWrap>
              <FacebookIcon className="facebook-icon" />
              <h5 className="login-with-fb"> Login With Facebook</h5>
            </InputCheckBoxWrap>
            <Wrap>
              <h5>New To Netflix? </h5>
              <Link to='/' className="sign-up-now">
                Sign Up Now
              </Link>
            </Wrap>
            <Wrap>
              <h6>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </h6>
            </Wrap>
          </Form>
        </SignSection>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100px;
  min-height: 1000px;
  position: relative;
  background: linear-gradient(
      144deg,
      rgba(0, 0, 0, 0.7259278711484594) 0%,
      rgba(0, 0, 0, 0.7371323529411764) 35%,
      rgba(0, 0, 0, 0.7231267507002801) 100%
    ),
    url(/Assets/images/hero-img.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

const NavWrap = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  height: 5rem;
  align-items: center;
  padding-top: 20px;
`;

const Logo = styled.img`
  width: 200px;

  cursor: pointer;
`;

const SignSection = styled.div`
  height: 671px;
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  @media (max-width: 430px) {
    width: 100%;
  }
  h1 {
    padding: 1rem 3rem;
    color: white;
    font-weight: 700;
  }
  .login-with-fb {
    color: #737373;
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1rem;
  }
  .facebook-icon {
    color: #3c589d;
  }
`;

const Form = styled.form`
  padding: 0 25px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px 0;
  padding-left: 8px;
  font-size: 1.2rem;
  width: 100%;
  background: rgb(51, 51, 51);
  border: none;
  color: white;
`;

const InputCheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  .need-help {
    color: white;
    text-decoration: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  h5 {
    color: #737373;
    font-size: 1rem;
    font-weight: 400;

    text-decoration: none;
  }
  h6 {
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
    margin-top:3rem;
    text-decoration: none;
  }
  .sign-up-now {
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-left: 0.5rem;
    text-decoration: none;
  }
`;

const InputCheckBox = styled.input`
  height: 17px;
  width: 17px;
  border: none;
  &:checked {
    background-color: rgb(51, 51, 51);
  }
`;
const InputCheckLabel = styled.label`
  font-size: 1rem;
  margin-top: 0.0001rem;
  color: white;
  flex: 1;
`;
const SubmitButton = styled.button`
  width: 100%;

  padding: 15px 17px;
  font-weight: 600;
  font-size: 1.3rem;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #e50914;
  margin-top: 20px;
`;
