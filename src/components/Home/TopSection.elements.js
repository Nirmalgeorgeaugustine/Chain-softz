//importing packages and components
import styled from 'styled-components';
import BgImg from '../../images/bgimg.png';
import {Container} from '../../globalstyle';

//styling
export const TopSectionContainer=styled(Container)`
    position: relative;
    width:100%;
    height:120vh;
    padding:0;
    display:flex;
    flex-direction:column;
    background:url(${BgImg}) no-repeat;
    background-position:center;
    background-size:cover;
    ${Container}

    @media screen and (max-width:1324px){
        background:url(${BgImg}) no-repeat cover;
    }

    @media screen and (max-width:992px){
        background:none;
        background-color:rgb(33,68,196);
        height:85vh;
    }

    @media screen and (max-width:992px){
        height:90vh;
    }

    @media screen and (max-width:610px){
        height:95vh;
    }

    @media screen and (max-width:450px){
        height:100vh;
    }

    @media screen and (max-width:370px){
        height:110vh;
    }
`;

export const TopSectionInnerContainer=styled.div`
    margin-top:3rem;    
    width:30%;
    height:100%;
    align-items:center;
    text-align:left;
    margin-left:8rem;
    transition:all 400ms ease-in-out;
    @media screen and (max-width:992px){
        width:60%; 
        margin-left:5rem;
    }

    @media screen and (max-width:768px){
        width:70%;
        margin-left:5rem;
    }

    @media screen and (max-width:600px){
        width:80%;
        margin-left:5rem;
    }

    @media screen and (max-width:450px){
        margin-left:3rem;
    }
`;

export const TopSectionImg=styled.div`
    position:absolute;
    right:0;
    top:17%;
    z-index:10;
    width:38rem;
    height:35rem;
img{
    width:100%;
    height:100%;
}
@media screen and (max-width:992px){
    display:none;
    top:35%;
    width:25rem;
    height:28rem;
   
}
`;

export const ContentContainer=styled.div`
display:flex;
flex-direction:column;
float:left;
`;

export const ContentTitle=styled.h1`
margin:0;
line-height:1.2em;
font-weight:700;
font-size:2.7rem;
color:#fff;

@media screen and (max-width:992px){
    font-size:2.4rem;
}

@media screen and (max-width:768px){
    font-size:2.2rem;
}

@media screen and (max-width:360px){
    font-size:1.8rem;
}
`;

export const Slogan=styled.h3`
margin:0;
line-height:1.5;
font-weight:200;
color:#fff;
font-size:18px;

@media screen and (max-width:360px){
    font-size:0.8rem;
}
`;

export const TopSectionDetailContainer=styled.div`
display:flex;
width:100%;

@media screen and (max-width:768px){
    flex-direction:column;
}
`;

export const Formcontent=styled.form`
width:100%;
display:flex-start;
`;

export const MailDetail=styled.input`
width:90%;
height:100%;
outline:none;
border:1px solid rgb(0, 54, 234);
padding:0 10px;
border-radius:3px;
&:focus{
    outline:none;
}

&::placeholder{
    color:#471a1a;
}

@media screen and (max-width:768px){
    height:2.5rem;
    margin-bottom:1.5em;
}
`;



