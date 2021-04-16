//importing packages and components
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import styled from 'styled-components';
import AppCard from './AppCard/AppCard';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CardImg from '../../../images/logos/logo.png';
import Data from './benefits.json';

//stylings
const BenefitRightContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    margin-left:-5rem;
    z-index:1;

    @media screen and (max-width:768px){
        margin:1rem 15rem;
    }

    @media screen and (max-width:500px){
        margin:0rem 7rem;
        margin-bottom:2rem;
    }

    @media screen and (max-width:300px){
        margin:0rem 0rem;
    }
`;

const StyledCarouselProvider=styled(CarouselProvider)`
    width:110%;
    transition: all 0.8s ease;
    .carousel__inner-slide{
        box-shadow: -1 13px 1.9em 0 rgba(74,74,74,0.20);
    }
    
    @media screen and (max-width:768px){
        width:100%;
    }
`;

const StyledDotGroup=styled(DotGroup)`
        position: absolute;
        top:20rem;
        left:6rem;
        z-index:99;
        transition:all 300ms ease-in-out;
    button{
        width:1.5rem;
        height:0.5rem;
        border-radius:0;
        background-color:#7a7676;
        border:none;
        outline:none;
        
        &:not(:last-of-type){
            margin-right:2rem;
            
            @media screen and (max-width:450px){
                margin-right:1rem;
            }
        }

        @media screen and (max-width:320px){
            margin-top:1.5rem;
            width:1rem;
            height:0.3rem;
        }
    }
    .carousel__dot--selected{
        background-color:#fff;
    }

    @media screen and (max-width:768px){
        top:11rem;
        left:5rem;
    }

    @media screen and (max-width:700px){
        left:2rem;
    }
`;

//function
function BenefitsRightElements(props) {
    return (
        <>
            <BenefitRightContainer>
                <StyledCarouselProvider 
                naturalSlideWidth={350} 
                naturalSlideHeight={410} 
                totalSlides={5} 
                visibleSlides={2}>
                    <Slider>
                        <Slide index={0}>
                            <AppCard CardImg={CardImg} LogoTitle={Data.cardTitle1} LogoDescription={Data.cardDescription1}/>
                        </Slide>
                        <Slide index={1}>
                            <AppCard CardImg={CardImg} LogoTitle={Data.cardTitle2} LogoDescription={Data.cardDescription2}/>
                        </Slide>
                        <Slide index={2}>
                            <AppCard CardImg={CardImg} LogoTitle={Data.cardTitle3} LogoDescription={Data.cardDescription3}/>
                        </Slide>
                        <Slide index={3}>
                            <AppCard CardImg={CardImg} LogoTitle={Data.cardTitle4} LogoDescription={Data.cardDescription4}/>
                        </Slide>
                        <Slide index={4}>
                            <AppCard CardImg={CardImg} LogoTitle={Data.cardTitle5} LogoDescription={Data.cardDescription5}/>
                        </Slide>
                    </Slider>
                    <StyledDotGroup/>
                </StyledCarouselProvider>
            </BenefitRightContainer>
        </>
    )
}

export default BenefitsRightElements
