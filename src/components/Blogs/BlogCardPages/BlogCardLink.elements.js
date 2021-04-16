//importing Packages and Components
import styled from 'styled-components';
import { Container } from '../../../globalstyle';

//BlogLinkContentContainer styling(Container from globalstyle)
export const BlogLinkContentContainer=styled(Container)`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    align-items:center;
`;

//BlogImagecontainer styling
export const BlogImagecontainer=styled.div`
    width:50%;
    height:50%;
    margin-top:3rem;
    img{
        width:100%;
        height:100%;
    }
`;

//BlogContentContainer styling
export const BlogContentContainer=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
`;

//BlogCategory styling
export const BlogCategory=styled.h4`
    font-size:24px;
    color:#000;
    font-weight:700;
    margin-bottom:1rem;
`;

//BlogPara styling
export const BlogPara=styled.p`
    font-size:18px;
    color:#000;
    font-weight:400;
    opacity:0.8;
    line-height:1.5;
`;