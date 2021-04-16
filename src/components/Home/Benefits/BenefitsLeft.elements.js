//importing packages and components
import React from 'react';
import styled from 'styled-components';
import {UpperCaseTitle,ContentTitle} from '../../../globalstyle';
import Data from './benefits.json';


//stylings
const BenefitLeftContainer=styled.div`
    width:100%;
    height:30rem;
    background-color:rgb(33,68,196);
    border-bottom-right-radius:20px;
    border-top-right-radius:20px;

    @media screen and (max-width:768px){
        border-bottom-right-radius:0;
        border-top-right-radius:0;
        height:15rem;
    }
`;

const BenefitContentContainer=styled.div`
    padding:10rem 6rem;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    text-align:left;
    transition:all 300ms ease-ease-in-out;

    @media screen and (max-width:768px){
        padding:5rem 5rem;
    }

    @media screen and (max-width:700px){
        padding:5rem 2rem;
    }

    @media screen and (max-width:320px){
        padding:3rem 2rem;
    }
`;

const UpdatedUpperCaseTitle=styled(UpperCaseTitle)`
    padding:0;
    color:#fff;
`;

const UpdatedContentTitle=styled(ContentTitle)`
    color:#fff;
    font-size:2rem;

    @media screen and (max-width:700px){
        font-size:1.8rem;
    }
`;


//function
function BenefitsLeftElements(props) {
    return (
        <>
          <BenefitLeftContainer>
              <BenefitContentContainer>
                <UpdatedUpperCaseTitle>{Data.title}</UpdatedUpperCaseTitle>
                <UpdatedContentTitle>{Data.subTitle}</UpdatedContentTitle>
              </BenefitContentContainer>
          </BenefitLeftContainer>  
        </>
    )
}

export default BenefitsLeftElements
