//importing packages and components
import { CarouselProvider,Slider, Slide ,DotGroup } from 'pure-react-carousel';
import React from 'react';
import styled from 'styled-components';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import Data from './testimonial.json';

//styling
const TestimonialRightContainer=styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    margin-top:1rem;
    z-index:1;
    margin-right:2rem;
    transition:all 1s ease-in-out;

    @media screen and (max-width:1028px){
        margin-top:1rem;
    }
`;

const TestimonialStyledCarouselProvider=styled(CarouselProvider)`
    transition:all 400ms ease;
        
            .carousel__inner-slide{
                box-shadow: -1 13px 1.9em 0 rgba(74,74,74,0.20);
                margin:1rem 2rem;

                @media screen and (max-width:1028px){
                    margin:1rem 1rem;
                }
            }
    
    @media screen and (max-width:1028px){
        .carousel__slider-tray-wrapper{
            text-align:-webkit-center;
        }
       
    }
`;

const TestimonialStyledDotGroup=styled(DotGroup)`
        position: absolute;
        left:2rem;
        top:-2rem;
        z-index:99;
        transition:all 300ms ease-in-out;
        

        @media screen and (max-width:1028px){
            left:50%;
            top:-2rem;
            transform:translateX(-50%);
        }

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

            @media screen and (max-width:300px){
                margin-right:0.7rem;
            }
        }

        @media screen and (max-width:550px){
            margin-top:1.2rem;
            width:1.2rem;
            height:0.4rem;
        }

        @media screen and (max-width:500px){
            margin-top:0.9rem;
            width:1rem;
            height:0.4rem;
        }

    }
    .carousel__dot--selected{
        background-color:rgb(33,68,196);
    }
`;

//function
function TestimonialRightElements() {
    return (
        <>
            <TestimonialRightContainer>
                <TestimonialStyledCarouselProvider
                orientation="vertical"
                naturalSlideWidth={650} 
                naturalSlideHeight={250} 
                totalSlides={5} 
                visibleSlides={3}>
                    <Slider>
                        <Slide index={0}>
                            <TestimonialCard testimonialDescription={Data.testimonialDescription1}
                            testimonialName={Data.testimonialName1}/>
                        </Slide>
                        <Slide index={1}>
                            <TestimonialCard testimonialDescription={Data.testimonialDescription2}
                            testimonialName={Data.testimonialName2}/>
                        </Slide>
                        <Slide index={2}>
                            <TestimonialCard testimonialDescription={Data.testimonialDescription3}
                            testimonialName={Data.testimonialName3}/>
                        </Slide>
                        <Slide index={3}>
                            <TestimonialCard testimonialDescription={Data.testimonialDescription4}
                            testimonialName={Data.testimonialName4}/>
                        </Slide>
                        <Slide index={4}>
                            <TestimonialCard testimonialDescription={Data.testimonialDescription5}
                            testimonialName={Data.testimonialName5}/>
                        </Slide>
                    </Slider>
                    <TestimonialStyledDotGroup/>
                </TestimonialStyledCarouselProvider>
            </TestimonialRightContainer>
        </>
    )
}

export default TestimonialRightElements
