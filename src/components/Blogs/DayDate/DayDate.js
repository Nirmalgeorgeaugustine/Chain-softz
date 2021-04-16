//importing Packages and Components
//importing icons from react icons
import { FaClock } from "react-icons/fa";
import React from 'react';
import styled from 'styled-components';

//DayDateContainer styling
const DayDateContainer=styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    margin-left:0.9rem;
`;

//DayContainer styling
const DayContainer=styled.div`
    display:flex;
    align-items:center;
`;

//ClockIcon styling
const ClockIcon=styled(FaClock)`
    color: #212529;
    font-size: 18px;
`;

//Day styling
const Day=styled.h6`
    color: #212529;
    font-size: 18px;
    margin-left:0.7rem;
`;

//Date styling
const Date=styled.h6`
    color: #212529;
    font-size: 18px;
`;

//DayDate styling
function DayDate(props) {
    const {day,date}=props
    return (
        <>
            <DayDateContainer>
                <DayContainer>
                    <ClockIcon/>
                    <Day>{day}</Day>
                </DayContainer>
                <Date>{date}</Date>
            </DayDateContainer>
        </>
    )
}

export default DayDate
