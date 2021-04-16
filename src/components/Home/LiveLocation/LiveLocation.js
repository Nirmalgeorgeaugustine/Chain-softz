//importing packages and components
import React from 'react';
import { LiveLocationImage, LocationContentContainer ,LocationTitle,LocationDescription} from './LiveLocation.elements';
import LocationImg from '../../../images/corpservice.png';
import styled from 'styled-components';
import Data from './livelocation.json';

//stylings
const LiveLocationContainer=styled.div`
    display:flex;
    justify-content:space-between;
    height:auto;
    width:100%;
    align-items:center;
    background-color:#fff;

    @media screen and (max-width:768px){
        flex-direction:column;
    }
`;

//function
function LiveLocation() {
    return (
        <div>
            <LiveLocationContainer>
                <LiveLocationImage src={LocationImg}/>
                <LocationContentContainer>
                    <LocationTitle>{Data.title}</LocationTitle>
                    <LocationDescription>{Data.description}</LocationDescription>
                </LocationContentContainer>
            </LiveLocationContainer>
        </div>
    )
}

export default LiveLocation
