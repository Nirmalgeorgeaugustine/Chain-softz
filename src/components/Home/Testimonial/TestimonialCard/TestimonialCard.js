//importing packages
import React from 'react';
import styled from 'styled-components';

//stylings
const CardContainer=styled.div`
    width:550px;
    height:170px;
    background-color:#fff;
    box-shadow:0px 0px 16px rgba(12,12,12,0.2);
    border-radius:5px ;
    display:flex;
    flex-direction:column;
    padding:2rem 1.5rem;
    transition:all 400ms ease; 
    text-align:left;
    
    &:not(:last-of-type){
        margin-bottom:1rem;
    }

    @media screen and (max-width:1250px){
        width:480px;
        height:160px;   
    }

    @media screen and (max-width:1028px){
        width:530px;
    }

    @media screen and (max-width:670px){
        width:480px;
        height:140px;
    }

    @media screen and (max-width:580px){
        width:440px;
        height:120px;
        padding:1rem 0.5rem;
    }

    @media screen and (max-width:540px){
        font-size:0.9rem;
        width:400px;
        height:120px;
    }

    @media screen and (max-width:540px){
        font-size:0.8rem;
        width:300px;
    }

    @media screen and (max-width:360px){
        width:240px;
        height:100px;
    }
`;

const TestimonialDescription=styled.p`
    display:flex;
    font-weight:400;
    margin-bottom:1rem;
    font-size:18px;
    opacity:0.8;
    line-height:1.5;

    @media screen and (max-width:540px){
        margin-bottom:0.6rem;
    }
`;

const TestimonialName=styled.p`
    display:flex;
    font-weight:700;
`;

//function
function TestimonialCard(props) {
    const {testimonialName,testimonialDescription}=props;
    return (
        <>
            <CardContainer>
                <TestimonialDescription>{testimonialDescription}</TestimonialDescription>
                <TestimonialName>{testimonialName}</TestimonialName>
            </CardContainer>
        </>
    )
}

export default TestimonialCard
