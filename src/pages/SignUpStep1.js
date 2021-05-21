import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpStep1 = () => {
  document.body.style.backgroundColor = "#ffffff";
  return (
    <>
      <Container>
        <NavWrap>
          <Logo
            src="/Assets/images/main-site-logo.png"
            alt="netflix-logo"
          ></Logo>
          <Link className="go-to-login" to="/login">
            Sign In
          </Link>
        </NavWrap>
      </Container>
      <RegisterSection>
        <img src="/Assets/images/Devices.png" alt="devices"></img>
        <h5>
          Step <span>1</span> of <span>3</span>
        </h5>
        <h3>Finish Setting Up Your Settings.</h3>
        <h4>
          Netflix is personalised for you. Create a password to watch Netflix on
          any device at any time.
        </h4>
        <Link className="continue-button" to="/signup/regform">
          Continue
        </Link>
      </RegisterSection>
    </>
  );
};

export default SignUpStep1;

const Container = styled.div`
  width: 100%;
`;

const NavWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: transparent;
  height: 5rem;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  padding-top: 10px;
  .go-to-login {
    line-height: normal;
    padding: 7px 17px;
    text-decoration: none;
    font-weight: 500;
    font-size: 19px;
    color: #333333;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    right: 2%;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  position: absolute;
  left: 0;
  padding-left: 25px;
  cursor: pointer;
`;

const RegisterSection = styled.div`
  height: 671px;
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  //   justify-content:center;
  align-items: center;
  @media (max-width: 1500px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 430px) {
    width: 85%;
  }
  img {
    margin-top: 160px;
    width: 350px;
    @media (max-width: 430px) {
      width: 85%;
      margin-top: 180px;
    }
  }
  h5 {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 30px;
    letter-spacing: 0.1rem;
    color: #333333;
    span {
      font-weight: 700;
    }
  }
  h3 {
    font-size: 23px;
    text-align: center;
    margin-top: -10px;
    color: #333333;
  }
  h4 {
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    margin-top: -10px;
    color: #333333;
  }
  .continue-button {
    background-color: #e50914;
    line-height: normal;
    width: 100%;
    padding: 15px 17px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    border: none;
    text-align: center;
    cursor: pointer;
  }
`;
