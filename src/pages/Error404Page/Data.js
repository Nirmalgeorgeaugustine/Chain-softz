//importing package
import styled from 'styled-components';

//styling
export const ErrorPageContainer=styled.div`
    width:100%;
    height:100%;
    align-items:center;
    display:flex;
    flex-direction:column;
`;

export const ErrorContentTitle=styled.h1`
    margin-top:5rem;
    display:flex;
    font-weight:900;
    font-size:3rem;
    margin-bottom:2rem;
    color:Red;
`;

export const ErrorContent=styled.p`
    display:flex;
    color:red;
    font-size:2rem;
`;

export const Redirect=styled.h3`
    font-size:2rem;
    margin-bottom:1rem;
`;

export const HomePage=styled.a`
    font-size:3rem;
    color:rgb(33,68,196);
    text-decoration:none;
`;