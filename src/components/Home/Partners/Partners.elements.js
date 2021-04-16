//importing packages and component
import styled from 'styled-components';
import {Container} from '../../../globalstyle';

//stylings
export const PartnerContainer=styled(Container)`
    width:100%;  
    height:auto;
    align-items:center;
    ${Container}
`;

export const PartnerImageContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    img{
        align-items:center;
        max-height:100%;
        max-width:12rem;
        filter: grayscale(100%);

        @media screen and (max-width:1100px){
            max-width:10rem;
        }

        @media screen and (max-width:550px){
            max-width:7rem;
        }
    }
`;


