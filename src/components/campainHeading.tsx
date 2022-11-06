import React, {ReactNode  } from 'react'
import styled from 'styled-components'; 

interface Props {
    text?: ReactNode
    // any props that come into the component
}

function CampainHeading({ text  } : Props) {
  return (
    <Wrapper>
    <div className='container  text-3xl'>
     <h1>{text}</h1> 
    </div>
    </Wrapper>
  )
}




const Wrapper = styled.div`
  
.container{
    borderBottom: 2px solid #f51c40;
}

//  container:after{
//     content : "";
//     position: absolute;
//     right    : 0;
//     z-index: 100;
//     top  : 0;
//     width  : 3px;
//     height   : 50%;  /* or 100px */
//     background: #555;
// }

`;

export default CampainHeading