//importing packages
import React from 'react';
import styled from 'styled-components';


//stylings
const CardContainer=styled.div`
    width:295px;
    height:343px;
    background-color:#fff;
    box-shadow:0px 0px 16px rgba(12,12,12,0.2);
    border-radius:5px ;
    margin:1.8rem 0.9rem;
    display:flex;
    flex-direction:column;
    padding:2rem 1.5rem;
    transition:all 400ms ease;

    @media screen and (max-width:1100px){
        width:250px;
        height:310px;
    }

    @media screen and (max-width:1000px){
        width:200px;
        height:270px;
    }

    @media screen and (max-width:850px){
        width:170px;
        height:240px;
    }

    @media screen and (max-width:550px){
        width:170px;
        height:230px;
    }

    @media screen and (max-width:450px){
        width:160px;
        height:200px;
        padding:1.7rem 1.3rem;
    }

    @media screen and (max-width:400px){
        width:160px;
        height:180px;
        padding:1rem 1.1rem;
        margin-bottom:0;
    }

    @media screen and (max-width:350px){
        width:130px;
        height:160px;
    }
`;

const CardTitleLogo=styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:1rem;
    margin-right:1rem;

    @media screen and (max-width:370px){
        margin-bottom:0.6rem;
    }
`;

const CardLogo=styled.img`
    height:1.5rem;
    width:1.5rem;

    @media screen and (max-width:450px){
        height:1.3rem;
        width:1.3rem;
    }
`;

const CardTitle=styled.h3`
    margin-left:0.7rem;
    font-size:1.3rem;
    font-weight:600;

    @media screen and (max-width:450px){
        margin-left:0.6rem;
        font-size:1.2rem;
    }
`;

const CardDescription=styled.p`
    font-size:18px;                      
    font-weight:400;
    line-height:2;
    opacity:0.8;
    line-height:1.5;

    @media screen and (max-width:1000px){
        font-size:0.8rem;
        line-height:1.8;
    }

    @media screen and (max-width:840px){
        font-size:0.75rem;
        line-height:1.5;
    }

    @media screen and (max-width:840px){
        font-size:0.7rem;
        line-height:1.2;
    }
`;

//function
function AppCard(props) {
    const {CardImg,LogoTitle,LogoDescription}=props;
    return (
        <>
            <CardContainer>
                <CardTitleLogo>
                    <CardLogo src={CardImg}/>
                    <CardTitle>{LogoTitle}</CardTitle>
                </CardTitleLogo>
                <CardDescription>{LogoDescription}</CardDescription>
            </CardContainer>
        </>
    )
}

export default AppCard
