//importing packages and components
import styled from "styled-components";
import { ContentTitle } from "../../../globalstyle";
import { FeatureContentDescription } from "../Features/Features.elements";


//stylings
export const LiveLocationImage=styled.img`
    width:30rem;
    height:30rem;
    transition:all 600ms ease-in-out;

    @media screen and (max-width:1000px){
        width:50%;
        height:23rem;
    }

    @media screen and (max-width:768px){
        margin-bottom:4rem;
    }

    @media screen and (max-width:500px){
        width:18rem;
        height:18rem;
    }

    @media screen and (max-width:350px){
        width:16rem;
        height:16rem;
    }
`;

export const LocationContentContainer=styled.div`
    height:auto;
    display:flex;
    flex-direction:column;
    align-content:justify;
    text-align:justify;
    text-align:left;
    padding-left:6rem;
    transition:all 300ms ease;
    margin-bottom:3rem;

    @media screen and (max-width:768px){
        padding-left:3rem;
        padding-right:3rem;
    }

    @media screen and (max-width:600px){
        padding-left:2rem;
        padding-right:2rem;
    }

    @media screen and (max-width:400px){
        padding-left:1.5rem;
        padding-right:0rem;
    }

    @media screen and (max-width:300px){
        padding-left:.5rem;
    }
    
`;

export const LocationTitle=styled(ContentTitle)`
    margin-bottom:1rem;

    @media screen and (max-width:800px){
        font-size:2rem;
    }
`;

export const LocationDescription=styled(FeatureContentDescription)`
    margin:0;
    font-size:18px;
    opacity:0.8;
    line-height:1.5;
`;