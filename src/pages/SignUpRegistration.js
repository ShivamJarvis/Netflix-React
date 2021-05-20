import React from "react";
import styled from "styled-components";
import { Link,Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
const SignUpRegistration = () => {
  document.body.style.backgroundColor = "#ffffff";
  const [open, setOpen] = React.useState(false);
  const [errorMsg,setErrorMsg] = React.useState('')
  const [isAllSet,setIsAllSet] = React.useState(false)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const handleSetPassword = (e) => {
    e.preventDefault();
    if(email===""){
      setErrorMsg('Please enter your email address.')
      setOpen(true)
      return
    }
    if(password===""){
      setErrorMsg('Please enter your password.')
      setOpen(true)
      return
    }
    if(password.length < 6){
      setErrorMsg('Password must contain atleast 6 characters.')
      setOpen(true)
      return
    }
    setIsAllSet(true)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
    {isAllSet && <Redirect to='/signup'></Redirect>}
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
        <h5>
          Step <span>1</span> of <span>3</span>
        </h5>
        <h3>Create a password to start your membership.</h3>
        <h4>Just a few more steps and you're done! We hate paperwork, too.</h4>
        <Form onSubmit={handleSetPassword}>
          <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
          <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
        <Button  type='submit'>
          Continue
        </Button>
        </Form>
      </RegisterSection>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUpRegistration;

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

  @media (max-width: 1500px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 430px) {
    width: 85%;
  }

  h5 {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 120px;
    letter-spacing: 0.1rem;
    color: #333333;
    span {
      font-weight: 700;
    }
  }
  h3 {
    font-size: 23px;

    margin-top: -10px;
    color: #333333;
  }
  h4 {
    font-weight: 400;
    font-size: 17px;

    margin-top: -10px;
    color: #333333;
  }
 
`;

const Form = styled.form`
  display: flex;
  width:100%;
  flex-direction: column;
  margin-bottom: 13px;
`;
const Input = styled.input`
  width: 100%;
  padding: 16px 5px;
  border: 0.5px solid #333333;
  border-radius: 0px;
  font-weight: 500;
  outline: none;
  font-size: 18px;
  color: #333333;
  margin: 10px 0;
`;
const Button= styled.button`
background-color: #e50914;
line-height: normal;
width: 100%;
padding: 15px 17px;

font-weight: 500;
font-size: 1rem;
color: white;
border: none;

cursor: pointer;
`