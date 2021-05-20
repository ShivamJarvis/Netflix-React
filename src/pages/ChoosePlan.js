import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TabletIcon from "@material-ui/icons/Tablet";
import ComputerIcon from "@material-ui/icons/Computer";
import TvIcon from "@material-ui/icons/Tv";

const ChoosePlan = () => {
  const [selectedPlan, setSelectedPlan] = React.useState("Mobile");
  const createData = (name, Mobile, Basic, Standard, Premium) => {
    return { name, Mobile, Basic, Standard, Premium };
  };
  React.useEffect(() => {
    document.getElementById(selectedPlan).style.color = "#fff";
    document.getElementById(selectedPlan).classList.add('selectedbox');
    document.getElementById(selectedPlan).style.backgroundColor = "#e50914";

    document.getElementById(selectedPlan).style.borderColor = "#e50914";
    document.getElementById(selectedPlan + "0").style.color = "#e50914";
    document.getElementById(selectedPlan + "1").style.color = "#e50914";
    document.getElementById(selectedPlan + "2").style.color = "#e50914";
    document.getElementById(selectedPlan + "3").style.color = "#e50914";
  }, []);
  const selectPlan = (planName) => {
    console.log(planName);

    if (selectedPlan !== "") {
      document.getElementById(selectedPlan).style.color = "#000000";
      document.getElementById(selectedPlan).style.backgroundColor = "#fff";
      document.getElementById(selectedPlan).style.borderColor = "#000000";
      document.getElementById(selectedPlan + "0").style.color = "#000000";
      document.getElementById(selectedPlan + "1").style.color = "#000000";
      document.getElementById(selectedPlan + "2").style.color = "#000000";
      document.getElementById(selectedPlan + "3").style.color = "#000000";
      document.getElementById(selectedPlan).classList.remove('selectedbox');

      
    }
    document.getElementById(planName).classList.add('selectedbox');

    document.getElementById(planName).style.color = "#fff";
    document.getElementById(planName + "0").style.color = "#e50914";
    document.getElementById(planName + "1").style.color = "#e50914";

    document.getElementById(planName + "2").style.color = "#e50914";
    document.getElementById(planName + "3").style.color = "#e50914";
    document.getElementById(planName).style.backgroundColor = "#e50914";
    document.getElementById(planName).style.borderColor = "#e50914";

    setSelectedPlan(planName);
  };

  const rows = [
    createData(
      "Monthly price",
      <h2>&#8377; 200</h2>,
      <h2>&#8377; 499</h2>,
      <h2>&#8377; 649</h2>,
      <h2>&#8377; 799</h2>
    ),
    createData(
      "Video quality",
      <h2>Good</h2>,
      <h2>Good</h2>,
      <h2>Better</h2>,
      <h2>Best</h2>
    ),
    createData(
      "Resolution",
      <h2>480p</h2>,
      <h2>480p</h2>,
      <h2>1080p</h2>,
      <h2>4k + HDR</h2>
    ),
    createData(
      "Devices you can use to watch",
      <Devices>
        <PhoneAndroidIcon /> <h2>Phone</h2> <TabletIcon /> <h2>Tablet</h2>
      </Devices>,
      <Devices>
        <PhoneAndroidIcon /> <h2>Phone</h2> <TabletIcon /> <h2>Tablet</h2> <ComputerIcon /> <h2>Computer</h2> <TvIcon /><h2>TV</h2>
      </Devices>,
      <Devices>
        <PhoneAndroidIcon /> <h2>Phone</h2> <TabletIcon /> <h2>Tablet</h2> <ComputerIcon /> <h2>Computer</h2> <TvIcon /><h2>TV</h2>
      </Devices>,
      <Devices>
        <PhoneAndroidIcon /> <h2>Phone</h2> <TabletIcon /> <h2>Tablet</h2> <ComputerIcon /> <h2>Computer</h2> <TvIcon /><h2>TV</h2>
      </Devices>
     
    ),
  ];
  // At this stage user must be logined or regiestered
  document.body.style.backgroundColor = "#ffffff";
  return (
    <>
      <Container style={{ marginBottom: "20rem" }}>
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
      <WrapSection>
        <h5>
          Step <span>2</span> of <span>3</span>
        </h5>
        <h3>Choose the plan that’s right for you</h3>
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

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">
                  <SelectionBox
                    onClick={() => selectPlan("Mobile")}
                    id="Mobile"
                  >
                    Mobile
                  </SelectionBox>
                </TableCell>
                <TableCell align="center">
                  <SelectionBox onClick={() => selectPlan("Basic")} id="Basic" >
                    Basic
                  </SelectionBox>
                </TableCell>
                <TableCell align="center">
                  <SelectionBox
                    onClick={() => selectPlan("Standard")}
                    id="Standard"
                  >
                    Standard
                  </SelectionBox>
                </TableCell>
                <TableCell align="center">
                  <SelectionBox
                    onClick={() => selectPlan("Premium")}
                    id="Premium"
                  >
                    Premium
                  </SelectionBox>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" id={`Mobile${index}`}>
                    {row.Mobile}
                  </TableCell>
                  <TableCell align="center" id={`Basic${index}`}>
                    {row.Basic}
                  </TableCell>
                  <TableCell align="center" id={`Standard${index}`}>
                    {row.Standard}
                  </TableCell>
                  <TableCell align="center" id={`Premium${index}`}>
                    {row.Premium}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link className="continue-button" to="/signup/regform">
          Continue
        </Link>
      </WrapSection>
    </>
  );
};

export default ChoosePlan;

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

const WrapSection = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 50px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 80px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  th {
    font-size: 16px;
    font-weight: 500;
  }
  h2 {
    font-size: 16px;
  }
  h5 {
    margin-top: 150px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 30px;
    letter-spacing: 0.1rem;
    color: #333333;
    span {
      font-weight: 700;
    }
    @media (max-width: 900px) {
      margin-top: 80px;
    }
    @media (max-width: 430px) {
      //   margin-top: 100px;
    }
  }
  h3 {
    font-size: 23px;
    // text-align: center;
    margin-top: -10px;
    color: #333333;
  }
  h4 {
    font-weight: 500;
    font-size: 17px;
    margin: 15px 0;
    display: flex;
    align-item: justify;

    @media (max-width: 430px) {
      font-size: 15px;
    }
    color: #333333;
  }
  .continue-button {
    background-color: #e50914;
    line-height: normal;
    width: 50%;
    padding: 15px 17px;
    margin-top: 20px;
    transform: translateX(50%);

    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    border: none;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;

const Wrap = styled.div`
  margin-bottom: 20px;
  .check-icon-list {
    color: #e50b16;
    margin-right: 5px;
  }
`;

const Devices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin: 2px 0;
    
  }
`;
const SelectionBox = styled.div`
  border: 1px solid black;
  width: 90%;
  padding: 3rem 1rem;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  user-select: none;
  }
`;