//importing packages and components
import React from 'react';
import styled from 'styled-components';
import TestimonialLeftElements from './TestimonialLeft.elements';
import TestimonialRightElements from './TestimonialRight.elements';

//stylings
const TestimonialContainer=styled.div`
    width:100%;
    padding:1rem 2rem;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 400ms ease-in-out;


    @media screen and (max-width:1250px){
        padding:1rem 1rem;   
    }

    @media screen and (max-width:1028px){
        flex-direction:column;
    }

    @media screen and (max-width:450px){
        padding:1rem 0rem;   
    }
`;

//function
function Testimonial() {
    return (
        <>
            <TestimonialContainer>
                <TestimonialLeftElements/>
                <TestimonialRightElements/>
            </TestimonialContainer>
        </>
    )
}

export default Testimonial
