//importing Packages and Components

import styled from "styled-components";
import { Container } from '../../globalstyle';
//importing image from local folder
import img from '../../images/2.jpg';

//About Page Elements

//TopSectionContainer styling
export const TopSectionContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`;

//HerobannerContainer styling
export const HerobannerContainer=styled.div`
    display:flex;
    flex-direction:column;
    background:url(${img});
    background-attachment:fixed;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    height:60vh;
    filter:brightness(100%);
    box-shadow: inset 90em 0 7em 3em rgba(0, 0, 0, 0.554), inset 90em 0 7em 3em rgba(0, 0, 0, 0.356);
    transition:300ms all ease;
`;

//MainSectionContainer syling
export const MainSectionContainer=styled(Container)`
    width:100%;
    height:auto;
`;

//ContentTitle styling
export const ContentTitle=styled.h2`
    text-transform:uppercase;
    font-size:2rem;
    font-weight:900;
    opacity:0.8;
`;

//Content styling
export const Content=styled.p`
    font-size:18px;
    line-height:1.5;
    opacity:0.6;
`;
