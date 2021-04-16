//importing packages and components
import React from 'react'
import styled from 'styled-components';
import { ContentTitle, UpperCaseTitle } from '../../../globalstyle';
import FeatureElements from './Features.elements';
import AutoInsu from '../../../images/Auto Insurance.png';
import CorpServ from '../../../images/corpservice.png';
import Data from './features.json';


//stylings
const FeaturesContainer=styled.div`
    width:100%;
    min-height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:1rem 2rem;
    transition:all 400ms ease-in-out;

    @media screen and (max-width:500px){
        padding:0.7rem 1.2rem;
    }
`;

const FeatureConentMainTitle=styled(ContentTitle)`
    margin:0;
    font-weight:700;
    font-size:2.7rem;
    color:#000;
    margin-bottom:1rem;

    @media screen and (max-width:768px){
        font-size:2.3rem; 
    }

    @media screen and (max-width:600px){
        font-size:2rem; 
        margin-bottom:3rem;
    }

    @media screen and (max-width:400px){
        font-size:1.5rem;
        margin-bottom:2rem; 
    }

    @media screen and (max-width:315px){
        font-size:1.2rem;
        margin-bottom:1rem; 
    }
`;

//function
function Features(props) {
    return (
        <>
          <FeaturesContainer>
            <UpperCaseTitle>{Data.title}</UpperCaseTitle>
            <FeatureConentMainTitle>{Data.subtitle}</FeatureConentMainTitle>  
            <FeatureElements title={Data.elementTitleOne} description={Data.elementDescriptionOne} imageURL={AutoInsu}/>
            <FeatureElements title="Track The Progress" description={Data.elementDescriptionTwo} imageURL={CorpServ} isReversed/>
          </FeaturesContainer>  
        </>
    )
}

export default Features
