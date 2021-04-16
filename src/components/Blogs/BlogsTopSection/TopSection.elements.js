//importing Packages and Components
import styled from "styled-components";
import { Container } from "../../../globalstyle";
//importing image from local folder
import img from '../../../images/blog.jpg';


//TopSectionContainer styling
export const TopSectionContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`;

//HerobannerContainer styling
export const HerobannerContainer=styled.div`
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

//MainSectionContainer styling(Container from globalstyle)
export const MainSectionContainer=styled(Container)`
    width:100%;
    height:auto;
`;

//BlogSectionContainer styling
export const BlogSectionContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    padding:1rem 1rem;
`;