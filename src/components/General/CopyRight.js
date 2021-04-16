//importing packages
import React from 'react';
import styled from 'styled-components';

//CopyRightContainer styling
const CopyRightContainer=styled.div`
    width:100%;
    height:12vh;
    background-color:rgb(33,68,196);
    position:relative;
`;

//CopyRightContent styling
const CopyRightContent=styled.h5`
    color:#fff;
    font-size:1rem;
    width:100%;
`;

//CopyRightSymbol styling
const CopyRightSymbol=styled.span`
    display:flex;
    color:#fff;
    font-size:1rem;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
`;

//CopyRight function
function CopyRight() {
    return (
        <>
            <CopyRightContainer>               
                    <CopyRightSymbol>&copy; <CopyRightContent>Copyright Believer Infotech.All Rights Reserved</CopyRightContent></CopyRightSymbol>        
            </CopyRightContainer>
        </>
    )
}

export default CopyRight
