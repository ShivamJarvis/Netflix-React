import React from "react";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
const ChooseAccount = () => {
  document.body.style.backgroundColor = "#222222";
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
          <h1>Who's Watching?</h1>
          <div className="account-profiles">
            <AccountWrap>
              <img
                src="/Assets/images/account-avatar.png"
                alt="avatar"
                width="180px"
              ></img>
              <h3>Shivam</h3>
            </AccountWrap>

            <AddAccount>
                <AddIcon className="add_icon"></AddIcon>
            </AddAccount>
          </div>
        </SignSection>
      </Container>
    </>
  );
};

export default ChooseAccount;

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
    )
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
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  h1 {
    text-align: center;
    padding: 1rem 3rem;
    color: white;
    font-size: 3rem;
    font-weight: 500;
  }
  .account-profiles {
    position: absolute;
    left: 12%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const AccountWrap = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  img {
    margin-right: 40px;
  }
  h3 {
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: 400;
    margin-top: -5px;
    margin-left: -28px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const AddAccount = styled.div`
margin-left:50px;
cursor:pointer;
  .add_icon{
      font-size:10rem;
      border:1px solid white;
      margin-top:10px;
      border-radius:100%;
      background:white;
      color:#222222;
  }
`;
