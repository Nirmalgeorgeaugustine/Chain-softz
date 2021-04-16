 //importing packages and components
import React from 'react';
import HeroSection from '../General/HeroSection/HeroSection';
import BreadCrumb from '../General/BreadCrumb/BreadCrumb';
import {TopSectionContainer,MainSectionContainer,HerobannerContainer,ImageContainer,FormCardContainer,FormContent,FormDetail,FormCard,FormName,FormButton,BottonText} from './TopSection.elements';
import {Marginer} from '../General/marginer/index';
//importing image from local folder
import contactImg from '../../images/call1.jpg';
import Data from './topsection.json';


//Topsection function
function Topsection(props) {
    const {children}=props;
    return (
        <>
            <TopSectionContainer>
               {children}
               <HerobannerContainer>
                    <HeroSection pageTitle={Data.pageTitle}companyName={Data.companyName}/>
                    <BreadCrumb homePage="Home" currentPage="Contact Us"/>
               </HerobannerContainer>
            </TopSectionContainer>
            <Marginer direction="vertical" margin="5rem"/>
            <MainSectionContainer>
                <ImageContainer>
                    <img src={contactImg} alt="contact pic"/>
                </ImageContainer>
                <Marginer direction="vertical" margin="3rem"/>
                <FormCardContainer>
                    <FormCard>
                    <FormName>{Data.formInput1}</FormName>
                    <FormContent>
                    <FormDetail type="text" placeholder="Your name"/>
                    </FormContent>
                    <FormName>{Data.formInput2}</FormName>
                    <FormContent>
                    <FormDetail type="email" placeholder="Your mail"/>
                    </FormContent>
                    <FormName>{Data.formInput3}</FormName>
                    <FormContent>
                    <FormDetail type="text" placeholder="Your phone number"/>
                    </FormContent>
                    <FormName>{Data.formInput4}</FormName>
                    <FormContent>
                    <FormDetail type="text" placeholder="Your city"/>
                    </FormContent>
                    <Marginer direction="vertical" margin="2rem"/>
                    <FormButton>
                        <BottonText>{Data.formButton}</BottonText>
                    </FormButton>
                    </FormCard>
                </FormCardContainer>
            </MainSectionContainer>
            <Marginer direction="vertical" margin="5rem"/>
        </>
    )
}

export default Topsection
