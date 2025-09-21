
import React from "react";
import styled from "styled-components";
import "../Logo/Logo.css";
import { useNavigate } from 'react-router-dom';
import { RiHome7Fill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import noyauImage from '../Logo/noyau.jpeg';
const Logo = () => {
  const navigate = useNavigate();
  
  const goToBasePage = () => {
    navigate('/Base'); // Navigate to the /Base route
  };

  // Removed header removal logic as it was hiding the navigation
  return (
    <Noyaubase className="d-flex justify-content-center align-items-center">
      <NoyauToggle id="toggle">
        <RotateButton id="btnA">
          <button onClick={goToBasePage} className="btn text-light">
            <RiHome7Fill style={{fontSize: 35}}/>
          </button>
        </RotateButton>
        <RotateButton id="btnB">
          <button className="btn text-light">
            <VscGithubAlt style={{fontSize: 35}} />
          </button>
        </RotateButton>
        <RotateButton id="btnC">
          <button className="btn text-light">
            <RiInstagramLine style={{fontSize: 35}} />
          </button>
        </RotateButton>
        <RotateButton id="btnD">
          <button className="btn text-light">
            <RxDiscordLogo style={{fontSize: 35}} />
          </button>
        </RotateButton>

        <NoyauRotate id="Rotate">
          <img className="rounded-circle" src={noyauImage} alt="noyau"/>
        </NoyauRotate>
      </NoyauToggle>
    </Noyaubase>
  )
}
const RotateButton = styled.div`
  position: absolute;
  z-index: 4; 
  border-top-right-radius: 15%;
  border-top-left-radius: 15%;
  text-align: center;
  height: 200px;
  width: 100px;
  transform-origin: bottom;
  border-top: 1px solid white;
  cursor: pointer;
  color: white;
  padding-top: 5px;
`;
const NoyauToggle = styled.div`
border: 1px solid black;
border-radius: 50%;
color: white;
background-color: #1f1e25;
width: 400px;
height: 400px;
display: flex;
justify-content: center;



/* align-items: center; */
#btnA{
  z-index: 5;
  animation: heA .9s linear .5s;
}
#btnB{
  transform: rotateZ(35deg);
  animation: heB .9s linear .5s;
}
#btnC{
  transform: rotateZ(65deg);
  animation: heC .9s linear .5s;
}
#btnD{
  transform: rotateZ(95deg);
  animation: heD .9s linear .5s;
}
@keyframes heA {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@keyframes heB {
  from{
    opacity: 0;
    transform: rotateZ(0deg);

  }
  to{
    opacity: 1;
    transform: rotateZ(35deg);
  }
}
@keyframes heC {
  from{
    transform: rotateZ(0deg);
    opacity: 0;
  }
  to{
    opacity: 1;
    transform: rotateZ(65deg);
  }
}
@keyframes heD {
  from{
    opacity: 0;
    transform: rotateZ(0deg);
  }
  to{
    opacity: 1;
    transform: rotateZ(95deg);
  }
}



`;


const NoyauRotate = styled.div`
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
width: 300px;
animation: rotate 99s linear infinite;
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const Noyaubase = styled.main`
min-height: calc(100vh - 80px); /* Account for header height */
justify-content: center;
align-items: center;
display: flex;
width: 100%;
background: linear-gradient(80deg, #000000,#434343);
background-size: 400% 400%;
animation: gradientAnimation 10s ease infinite;
padding: 20px 0;

@keyframes gradientAnimation {
    0% {
        background-position: 0% 0%;
        
    }
    50% {
        background-position: 100% 100%;
        
    }
    100% {
        background-position: 0% 0%;
    }
}
`;
export default Logo;
