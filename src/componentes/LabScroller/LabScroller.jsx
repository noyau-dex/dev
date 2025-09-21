import React, { useState } from 'react'
import './LabScroller.css'
import styled from 'styled-components';

const LabScroller = () => {
  const [input,setInput] = useState(0);
  
  const ParaA = () => {
 
  }
  const ParaS = () => {
    
  }
  const ParaM = () => {
    
  }
  const ParaR = () => {
    
  }
  const ParaSU = () => {
    
  }
  return (
    <>
    <div className="hidden-box">
    
      <div className="layer1 bg-primary" id="toggle">
       <RotateButtonA onClick={ParaA} id="btn1E" className='btn border'>Aditya</RotateButtonA>
       <RotateButtonA onClick={ParaS} id="btn1A" className='btn border'>Shweta</RotateButtonA>
       <RotateButtonA onClick={ParaM} id="btn1B" className='btn border'>Monu</RotateButtonA>
       <RotateButtonA onClick={ParaR} id="btn1C" className='btn border'>Radha</RotateButtonA>
       <RotateButtonA onClick={ParaSU} id="btn1D" className='btn border'>Sushant</RotateButtonA>
     
    

      </div>
        
    </div>
    </>
  )
}

export default LabScroller

const RotateButtonA = styled.button`
  position: relative;
  top: 15px;
  z-index: 2; 
  text-align: center;
  width: 100px;
  cursor: pointer;
  color: white;
  padding-top: 5px;
  background: transparent;
  border: 1px solid white;
  color: white;
  margin: 5px;
`;