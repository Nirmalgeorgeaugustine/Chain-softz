//importing packages
import React from 'react';
import styled from 'styled-components';

//HeroContentContainer styling
const HeroContentContainer=styled.div`
    position: absolute;
    left: 50%;
    top:50%;
    transform:translate(-50%,0%);
    width: 100%;
    z-index: 9;
    display:flex;
    flex-direction:column;
    color:#fff;
    text-align:center;

    //media query
    @media screen and (max-width:768px){
        top:40%;
    }
`;

//HeroContentTitle styling
const HeroContentTitle=styled.h1`
    width:100%;
    font-size:3.8rem;
    text-transform:uppercase;
    font-weight:900;

    //media query
    @media screen and (max-width:768px){
        font-size:3.2rem;
    }

    //media query
    @media screen and (max-width:470px){
        font-size:2.5rem;
    }
`;


//HeroSection function
function HeroSection(props) {
    const { pageTitle,companyName}=props;
    return (
        <>
            <HeroContentContainer >
                <HeroContentTitle>{pageTitle}-{companyName}</HeroContentTitle>
            </HeroContentContainer>
        </>
    )
}

export default HeroSection
