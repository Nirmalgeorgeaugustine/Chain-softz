//importing packages and components
import React from 'react';
import styled from 'styled-components';
import TestimonialImg from '../../../images/Auto Insurance.png';
import { UpperCaseTitle ,ContentTitle} from '../../../globalstyle';
import Data from './testimonial.json';

//stylings
const TestimonialLeftContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    
    @media screen and (max-width:1110px){
        width:90%;
    }

    @media screen and (max-width:1028px){
        width:100%;
    }
`;

const TestimonialContentContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:2rem 2rem;
    margin:1rem 1rem;
    
    @media screen and (max-width:500px){
        padding:1rem 1rem;
        margin:0.6rem 0.6rem;
    }

    @media screen and (max-width:450px){
        margin:0.6rem 0;
    }
`;

const TestimonialTitle=styled(UpperCaseTitle)`
    padding-left:0;
    float:left;
`;

const TestimonialDescription=styled(ContentTitle)`
    font-size:2.3rem;

    @media screen and (max-width:500px){
        font-size:2rem;
    }

    @media screen and (max-width:350px){
        font-size:1.6rem;
    }
`;

const TestimonialImage=styled.img`
    width:25rem;
    height:25rem;
    align-self:center;

    @media screen and (max-width:1028px){
        display:none;
    }
`;

//function
function TestimonialLeftElements() {
    return (
        <>
          <TestimonialLeftContainer>
            <TestimonialContentContainer>
                <TestimonialTitle>{Data.title}</TestimonialTitle>
                <TestimonialDescription>{Data.subtitle1}</TestimonialDescription>
                <TestimonialDescription>{Data.subtitle2}</TestimonialDescription>
            </TestimonialContentContainer>
            <TestimonialImage src={TestimonialImg}/>
          </TestimonialLeftContainer>  
        </>
    )
}

export default TestimonialLeftElements
