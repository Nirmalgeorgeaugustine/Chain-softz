//importing Packages and Components
import styled from 'styled-components';
import React from 'react';
import DayDate from '../DayDate/DayDate';
//importing icon from @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  Link } from "react-router-dom";

//CardContainer styling
const CardContainer=styled.div`
    display: flex;
    margin:2rem;
    flex-direction:column;
    position: relative;
    height:30rem;
    width: 20rem;
    margin-bottom: 30px;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.87);
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.6s ease-in-out;
    :hover { 
        transform: scale(1.1);
        z-index:99;
        }
`;

//ImageContainer styling (Link from react-router-dom)
const ImageContainer=styled(Link)`
    height: 10rem;
    position: relative;
    top:-1rem;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 6px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    
    //image styling
    img{
        width:100%;
        height:100%;
        border-radius:6px;
    }
`;

//TableContentContainer styling
const TableContentContainer=styled.div`
    width:100%;
    height:100%;
    padding:0.5rem 2rem;
    margin-bottom:0;
`;

//CategoryContainer styling
const CategoryContainer=styled.div`
    display:flex;
    margin: 15px 0;
    color: #28a745;
    align-items:center;
`;

//CategoryIcon styling(Icon from @fortawesome/react-fontawesome)
const CategoryIcon=styled(FontAwesomeIcon)`
    font-weight: 900;
    margin-right:0.5rem;
`;

//Category styling
const Category=styled.h3`
    font-weight: 900;
`;

//CaptionContainer styling
const CaptionContainer=styled.a`
    text-decoration: none;
    align-items:center;
    cursor:pointer;
`;

//Caption styling
const Caption=styled.h4`
    color: #333;
    margin:0;
    line-height:1;
    font-size:1.8rem;
    font-weight: 900;
    margin-bottom:5px;
`;

//CaptionDescription styling
const CaptionDescription=styled.p`
    margin-bottom: .3rem;
    font-weight: 500;
    font-size:18px;
    opacity:0.8;
`;

//BottomContainer styling
const BottomContainer=styled.div`
    display:flex;
    align-items:center;
`;

//ReadMoreButton styling
const ReadMoreButton=styled(Link)`
    background: #ed1c24;
    width:100%;
    height:100%;
    background: rgb(33,68,196);
    padding: 0.4rem 0.2rem;
    cursor: pointer;
    color: #fff;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1.2rem;
    border-radius:0.25rem;
    text-decoration:none;

    :hover{
        background:#28a745;
    }
`;

//BlogCard function
function BlogCard(props) {
    const {cardImage,iconName,categoryName,captionName,captionDescription,buttonLink}=props;
    return (
        <>
            <CardContainer>
                <ImageContainer to="/">
                    <img src={cardImage} alt="card" />
                </ImageContainer>
                <TableContentContainer>
                    <CategoryContainer>
                        <CategoryIcon icon ={iconName}/>
                        <Category>{categoryName}</Category>
                    </CategoryContainer>
                    <CaptionContainer href="#">
                        <Caption >{captionName}</Caption>
                    </CaptionContainer>
                    <CaptionDescription>{captionDescription}</CaptionDescription>
                    <BottomContainer>
                        <ReadMoreButton to={buttonLink}>Read More</ReadMoreButton>
                        <DayDate day="Thurday"  date="10/sep/2020"/>
                    </BottomContainer>
                </TableContentContainer>
            </CardContainer>
        </>
    )
}

export default BlogCard
