//importing packages and components
import React from 'react';
import styled from 'styled-components';
import BenefitsLeftElements from './BenefitsLeft.elements';
import BenefitsRightElements from './BenefitsRight.elements';


//stylings
const BenefitsContainer=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    transition:all 400ms ease-in-out;
    position:relative;
    

    @media screen and (max-width:768px){
        flex-direction:column;
    }
`;

//function
function Benefits(props) {
    return (
        <>
           <BenefitsContainer>
                <BenefitsLeftElements/>
                <BenefitsRightElements/>
           </BenefitsContainer> 
        </>
    )
}

export default Benefits
