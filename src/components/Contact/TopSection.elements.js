//importing packages and components
import styled from "styled-components";
import { Container } from "../../globalstyle";
//importing image from local folder
import img from '../../images/call.jpg';

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

//MainSectionContainer styling(Container from global style)
export const MainSectionContainer=styled(Container)`
    width:100%;
    height:auto;
    display:flex;
    

    //media query
    @media screen and (max-width:1068px){
        flex-direction:column;
        padding-left:0px;
        padding-right:0px;
    }
`;

//ImageContainer styling
export const ImageContainer=styled.div`
    margin-top:-5rem;
    display:flex;
    width:100%;
    height:39rem;

    //image styling
    img{
        width:100%;
        height:100%;
    }

`;

//FormCardContainer styling
export const FormCardContainer=styled.div`
    width:100%;
    margin-top:-5rem;
    margin-left:1rem;

    //media query
    @media screen and (max-width:1068px){
        margin-top:0;
        width:100%;
        align-self:center;
        margin-left:0;
    }
`;

//FormCard styling
export const FormCard=styled.div`
    height:100vh;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    display:flex;
    flex-direction:column;
    background:rgb(33,68,196);
    background-clip: border-box;
    padding: 3rem;

    //media query
    @media screen and (max-width:1068px){
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

//FormContent styling
export const FormContent=styled.form`
    display:block;
    margin-bottom:1rem;
`;

//FormName styling
export const FormName=styled.label`
    font-size:1.2rem;
    color:#fff;
`;

//FormDetail styling
export const FormDetail=styled.input`
    height:3rem;
    width:100%;
    outline:none;
    border:1px solid rgb(0, 54, 234);
    padding:0 10px;
    border-radius:3px;
    border-left: 4px solid rgb(102, 153, 153);

    //focus
    &:focus{
        outline:none;
    }

    //placeholder
    &::placeholder{
        color:#471a1a;
        font-size:1.2rem;
        opacity:0.5;
    }
`;

//FormButton styling
export const FormButton=styled.button`
    padding:1rem 2rem;
    background:#fff;
    display:block;
    outline:none;
    border:none;
    border-radius:0.3rem;
    transition:all 0.7s ease;
    cursor:pointer;

    //hover
    :hover{
        background:#28a745;
        color:#fff;
    }
`;

//BottonText styling
export const BottonText=styled.h6`
    font-size:1.5rem;
    color:rgb(33,68,196);
    transition:all 0.7s ease;

    //hover
    :hover{
        color:#fff;
    }
`;

