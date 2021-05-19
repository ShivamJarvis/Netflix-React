import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Container>
        <NavWrap>
          <Logo
            src="/Assets/images/main-site-logo.png"
            alt="netflix-logo"
          ></Logo>
          <Link className="go-to-login" to="/login">Sign In</Link>
        </NavWrap>

        <Header>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <Form>
            <Input type="email" placeholder="Email"></Input>
            <SubmitButton>{"Get Started >"}</SubmitButton>
          </Form>
        </Header>
      </Container>

      <HeroContent1>
        <div className="hero-content-text">
          <h1>Enjoy on your TV.</h1>
          <h3>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
        <div>
          <video autoPlay={true} playsInline={true} loop={true} muted>
            <source src="/Assets/images/tv.mp4"></source>
          </video>
        </div>
      </HeroContent1>
      <HeroContent2>
        <div>
          <video autoPlay={true} playsInline={true} loop={true} muted>
            <source src="/Assets/images/video-in.mp4"></source>
          </video>
        </div>
        <div className="hero-content-text">
          <h1>Watch everywhere.</h1>
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
      </HeroContent2>
      <HeroContent3>
        <div className="hero-content-text">
          <h1>Create profiles for children.</h1>
          <h3>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h3>
        </div>
        <div>
          <img src="/Assets/images/children.png" alt="for-childrens"></img>
        </div>
      </HeroContent3>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100px;
  min-height: 850px;
  background: linear-gradient(
      144deg,
      rgba(0, 0, 0, 0.7259278711484594) 0%,
      rgba(0, 0, 0, 0.7371323529411764) 35%,
      rgba(0, 0, 0, 0.7231267507002801) 100%
    ),
    url(/Assets/images/hero-img.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    min-height: 950px;
  }
  @media (max-width: 800px) {
    min-height: 750px;
  }
  @media (max-width: 360px) {
    min-height: 700px;
  }
`;

const NavWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: transparent;
  height: 5rem;
  align-items: center;
  padding-top: 20px;
  .go-to-login{
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    text-decoration:none;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    right: 2%;
  }
`;

const Logo = styled.img`
  width: 200px;
  position: absolute;
  left: 0;
  cursor: pointer;
`;



const Header = styled.div`
    display:flex;
    width:50%;
    position:absolute;
    left:25%;
    top:25%;
    @media (max-width: 600px) {
      left:15%;
      width:70%;
    }
    flex-direction:column;
    align-items:center;
    justify:content:center;
    h1{
        text-align:center;
        color:white;
        font-size:4rem;
        @media (max-width: 800px) {
          font-size:2rem;
        }
        @media (max-width: 1100px) {
          font-size: 2.5rem;
          margin-bottom:2rem;
        }
        @media (max-width: 500px) {
          font-size: 1.6rem;
        }
    }
    h2{
        text-align:center;
        color:white;
        margin:-20px;
        font-size: 1.625rem;
        @media (max-width: 800px) {
          font-size:1.3rem;
        
        }
        @media (max-width: 500px) {
          font-size: 1.1rem;
          margin-top:1rem;
        }
    }
    h3{
        text-align:center;
        color:white;
        padding-top:30px;
        font-size: 1.2rem;
        @media (max-width: 600px) {
          font-size: 1rem;
         
        }
        @media (max-width: 360px) {
          font-size: 0.9rem;
        }
    }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  justify-content: center;
  margin-top: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  padding: 0.5rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    width: 120%;
  }
`;

const SubmitButton = styled.button`
  height: 140%;
  width: 60%;
  color: white;
  background: #e50914;
  border: none;
  padding: 0.5rem 0.3rem;
  font-size: 1.8rem;
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0.7rem 0;
    width: 70%;
  }
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

const HeroContent1 = styled.div`
  background-color: black;
  display: flex;
  height: 500px;
  margin: 0.5rem 0;
  position: relative;
  @media (max-width: 500px) {
    display: block;
    position: static;
    padding: 0 2rem;
  }

  .hero-content-text {
    width: 50%;
    position: absolute;
    top: 30%;
    left: 10%;
    @media (max-width: 500px) {
      display: block;
      position: static;
      width: 100%;
    }
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    color: white;
    @media (max-width: 800px) {
      font-size: 2.5rem;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
      padding-top: 3rem;
    }
  }
  h3 {
    text-align: center;

    color: white;
  }
  video {
    width: 40%;
    position: absolute;
    right: 0;
    @media (max-width: 1500px) {
      top: 13%;
    }
    @media (max-width: 1300px) {
      top: 24%;
    }
    @media (max-width: 800px) {
      top: 28%;
    }
    @media (max-width: 500px) {
      display: block;
      position: static;
      width: 100%;
    }
  }
`;

const HeroContent2 = styled.div`
  background-color: black;
  display: flex;
  height: 500px;
  margin: 0.5rem 0;

  position: relative;
  @media (max-width: 500px) {
    display: block;
    position: static;
    padding: 0 2rem;
  }
  .hero-content-text {
    position: absolute;
    top: 25%;
    width: 50%;
    right: 15%;
    @media (max-width: 1500px) {
      right: 8%;
    }
    @media (max-width: 500px) {
      display: block;
      position: static;
      width: 100%;
    }
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    color: white;
    @media (max-width: 800px) {
      font-size: 2.5rem;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
      padding-top: 1rem;
    }
  }
  h3 {
    text-align: center;

    color: white;
  }
  video {
    width: 40%;
    position: absolute;
    left: 0;
    top: 10%;
    @media (max-width: 1300px) {
      top: 24%;
    }
    @media (max-width: 800px) {
      top: 28%;
    }
    @media (max-width: 500px) {
      display: block;
      position: static;
      width: 100%;
      padding-top: 3rem;
    }
  }
`;

const HeroContent3 = styled(HeroContent1)`
  // .hero-content-text {
  //   width: 40%;
  //   @media (max-width: 1500px) {
  //     top: 10%;
  //   }
  // }
  img {
    width: 30%;
    position: absolute;
    right: 10%;
    @media (max-width: 1500px) {
      top: 10%;
    }
    @media (max-width: 1300px) {
      top: 18%;
    }
    @media (max-width: 800px) {
      top: 28%;
    }
    @media (max-width: 500px) {
      display: block;
      position: static;
      width: 80%;
    }
  }
`;
