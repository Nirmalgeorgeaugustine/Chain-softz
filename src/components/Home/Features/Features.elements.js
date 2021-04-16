//importing packages and components
import React from 'react'
import styled from 'styled-components';
import { ContentTitle } from '../../../globalstyle';
import { Marginer } from '../../General/marginer/index';


//stylings
const FeatureContainer=styled.div`
    display:flex;
    align-items:center;
    max-width:85%;
    flex-direction:${({isReversed}) => isReversed && "row-reverse"};
    margin-bottom:5rem;
    gap:10rem;

    @media screen and (max-width:1100px){
        gap:6rem;
        max-width:90%;
    }

    @media screen and (max-width:962px){
        gap:4rem;
        max-width:95%;
    }

    @media screen and (max-width:768px){
        flex-direction:column-reverse;
    }
`;

const FeatureImage=styled.img`
    width:30rem;
    height:25rem;

    @media screen and (max-width:1100px){
        width:25rem;
        height:22rem;
    }

    @media screen and (max-width:962px){
        width:20rem;
        height:18rem;
    }

    @media screen and (max-width:500px){
        width:16rem;
        height:16rem;
    }
`;

const FeatureContentContainer=styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    max-width:92%;

    @media screen and (max-width:1100px){
        max-width:100%;
    }

    @media screen and (max-width:768px){
        align-items:center;
    }


`;

const FeatureContentTitle=styled(ContentTitle)`
    margin:0;
    font-weight:700;
    font-size:2.7rem;
    color:#000;

    @media screen and (max-width:1100px){
        font-weight:600;
        font-size:2.3rem;
    }

    @media screen and (max-width:962px){
        font-weight:700;
        font-size:1.7rem;
    }
`;

export const FeatureContentDescription=styled.p`
    font-size:18px;
    line-height:1.5;
    font-weight:700;
    opacity:0.8;
    max-width:80%;
`;


//function
function FeatureElements(props) {
    const{title,description ,imageURL,isReversed}=props;
    return (
        <>
           <FeatureContainer isReversed={isReversed}>
               <FeatureContentContainer>
                   <FeatureContentTitle>{title}</FeatureContentTitle>
                   <Marginer direction="vertical" margin="1rem"/>
                   <FeatureContentDescription>{description}</FeatureContentDescription>
               </FeatureContentContainer>
               <FeatureImage src={imageURL}/> 
            </FeatureContainer> 
        </>
    )
}

export default FeatureElements

