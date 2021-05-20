import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
const SignUpStep2 = () => {
  // At this stage user must be logined or regiestered
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
            Sign Out
          </Link>
        </NavWrap>
      </Container>
      <RegisterSection>
        <CheckIcon className="check-icon-top" />
        <h5>
          Step <span>2</span> of <span>3</span>
        </h5>
        <h3>Choose your plan.</h3>
        <Wrap>
          <h4>
            <CheckIcon className="check-icon-list" /> No commitments, cancel
            anytime.
          </h4>
          <h4>
            <CheckIcon className="check-icon-list" /> Everything on Netflix for
            one low price.
          </h4>
          <h4>
            <CheckIcon className="check-icon-list" /> No ads and no extra fees.
            Ever.
          </h4>
        </Wrap>
        <Link className="continue-button" to="/signup/planform">
          See the Plans
        </Link>
      </RegisterSection>
    </>
  );
};

export default SignUpStep2;

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
    width: 55%;
  }
  @media (max-width: 430px) {
    width: 85%;
  }
  .check-icon-top {
    font-size: 2.3rem;
    border: 3px solid #e95055;
    border-radius: 100%;
    padding: 0.2rem;
    color: #e50b16;
    margin-top: 120px;
    @media (max-width: 430px) {
      margin-top: 150px;
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
    margin: 15px 0;
    display:flex;
    align-item:justify;
    
    @media (max-width: 430px) {
      font-size: 15px;
    }
    color: #333333;
  }
  .continue-button {
    background-color: #e50914;
    line-height: normal;
    width: 80%;
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

const Wrap = styled.div`
  margin-bottom: 20px;
  .check-icon-list {
    color: #e50b16;
    margin-right:5px;
  }
`;
