//importing packages and components
import React from 'react';
import styled from "styled-components";
//importing icons from react icons
import { FaInstagram , FaFacebook, FaTwitter ,FaLinkedin,FaGreaterThan} from 'react-icons/fa';
import { Container } from "../../../globalstyle";
//importing link from react-router-dom
import {  Link } from "react-router-dom";


//FooterContainer styling (Container from global style)
const FooterContainer=styled(Container)`
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-between;
    ${Container};

    //media query
    @media screen and (max-width:768px){
        text-align:center;
        flex-direction:column;
    }
`;

//CompanyDetailsContainer styling
const CompanyDetailsContainer=styled.div`
    display:flex;
    flex-direction:column;

    //media query
    @media screen and (max-width:768px){
        margin-bottom:2rem;
    }
`;

//CompanyName styling
const CompanyName=styled.h1`
    text-transform:uppercase;
    font-size:2rem;
    font-weight:700;
    line-height:1;
    color:rgb(33,68,196);

    :last-of-type{
        margin-bottom:2rem;
    }
`;

//CompanyContact styling
const CompanyContact=styled.p`
    font-size:18px;
    font-weight:200;

    :not(:last-of-type){
        margin-bottom:0.5rem;
    }
`;

//UsefulLinksContainer styling
const UsefulLinksContainer=styled.div`
    display:flex;
    flex-direction:column;

    @media screen and (max-width:768px){
        align-items:center;
        margin-bottom:2rem;
    }
`;

//Title styling
const Title=styled.h4`
    font-size:1.4rem;
    font-weight:700;
    margin-bottom:2rem;
    color:rgb(33,68,196);
`; 

//LinkContainer styling(link from react-router-dom)
const LinkContainer=styled(Link)`
    display:flex;
    cursor:pointer; 
    align-items:center;
    text-decoration:none;
    color:#000;
    transition: all .3s ease-in-out;
    
    //hover
    :hover{
        margin-left:0.7rem;
    }

    :not(:last-of-type){
        margin-bottom:0.5rem;
    }

    //media query
    @media screen and (max-width:768px){
        text-align:left;
    }
`;

//Icon styling
const Icon = styled(FaGreaterThan)`
    font-size: 1rem;
    margin-right:0.3rem;
`;

//PageLinks styling
const PageLinks=styled.h4`
    text-transform:uppercase;
    font-size:18px;
    font-weight:200;
`;

//SocialNetworkContainer styling
const SocialNetworkContainer=styled.div`
    display:flex;
    flex-direction:column;

    //media query
    @media screen and (max-width:768px){
        align-items:center;
        margin-bottom:1rem;
    }
`;

//SocialNetworkLinksContainer styling
const SocialNetworkLinksContainer=styled.div`
    display:flex;
    justify-content:center;
`;

//SocialLinkItem styling
const SocialLinkItem=styled.a`
    width:40px;
    height:40px;
    border-radius:50%;
    display:inline-block;
    color:#fff;
    font-size:18px;
    background-color:rgb(33,68,196);
    position:relative;
    transition: all .5s ease-in-out;

    :not(:last-of-type){
        margin-right:0.2rem;
    }

    //hover
    :hover { 
        transform: scale(1.2);
        z-index:99;
        background-color:#28a745;
    }
`;

//SocialInsta styling
const SocialInsta=styled(FaInstagram)`
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:18px;
        display:inline-block;

        ::before{
            content:"";
        }
`;

//SocialFace styling
const SocialFace=styled(FaFacebook)`
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:18px;
        display:inline-block;

        ::before{
            content:"";
        }
`;

//SocialLinked styling
const SocialLinked=styled(FaLinkedin)`
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:18px;
        display:inline-block;

        ::before{
            content:"";
        }
`;

//SocialTwit styling
const SocialTwit=styled(FaTwitter)`
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:18px;
        display:inline-block;

        ::before{
            content:"";
        }
`;

//FooterElements function
function FooterElements(props) {
    const{companyFirstName,companyLastName,mobileNo,emailId,whatsappNo,title,linkName1,linkName2,linkName3,linkName4,linkName5,socialTitle}=props;
    return (
        <>
            <FooterContainer>
                <CompanyDetailsContainer>
                    <CompanyName>{companyFirstName}</CompanyName>
                    <CompanyName>{companyLastName}</CompanyName>
                    <CompanyContact>Mobile Number: {mobileNo}</CompanyContact>
                    <CompanyContact>E-mail: {emailId}</CompanyContact>
                    <CompanyContact>Whatsapp Number: {whatsappNo}</CompanyContact>
                </CompanyDetailsContainer>
                <UsefulLinksContainer>
                    <Title>{title}</Title>
                    <LinkContainer to="/">
                        <Icon />
                        <PageLinks>{linkName1}</PageLinks>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Icon />
                        <PageLinks>{linkName2}</PageLinks>
                    </LinkContainer>
                    <LinkContainer to='/services'>
                        <Icon />
                        <PageLinks>{linkName3}</PageLinks>
                    </LinkContainer>
                    <LinkContainer to='/blogs'>
                        <Icon />
                        <PageLinks>{linkName4}</PageLinks>
                    </LinkContainer>
                    <LinkContainer to='/contactus'>
                        <Icon />
                        <PageLinks>{linkName5}</PageLinks>
                    </LinkContainer>
                </UsefulLinksContainer>
                <SocialNetworkContainer>
                    <Title>{socialTitle}</Title>
                    <SocialNetworkLinksContainer>
                        <SocialLinkItem href={'//www.google.co.in'}>
                            <SocialInsta/>
                        </SocialLinkItem>
                        <SocialLinkItem href={'//www.google.co.in'}>
                            <SocialFace/>
                        </SocialLinkItem>
                        <SocialLinkItem href={'//www.google.co.in'}>
                            <SocialTwit/>
                        </SocialLinkItem>
                        <SocialLinkItem href={'//www.google.co.in'}>
                            <SocialLinked/>
                        </SocialLinkItem>
                    </SocialNetworkLinksContainer>
                </SocialNetworkContainer>
            </FooterContainer>
        </>
    )
}

export default FooterElements
