//importing Packages and Components
import React from 'react';
import {TopSectionContainer,ContentTitle,Content,MainSectionContainer,HerobannerContainer} from './TopSection.elements';
import {Marginer} from '../General/marginer/index';
import HeroSection from '../General/HeroSection/HeroSection';
import BreadCrumb from '../General/BreadCrumb/BreadCrumb';
import Data from './topsection.json';


//TopSection function
function TopSection(props) {
    const {children}=props;
    return (
        <>
           <TopSectionContainer>
               {children}
               <HerobannerContainer>
                    <HeroSection pageTitle={Data.heroTitle} companyName={Data.heroCompanyName} />
                    <BreadCrumb homePage="Home" currentPage="About Us"/>
               </HerobannerContainer>
           </TopSectionContainer>
           <MainSectionContainer>
           <Marginer direction="vertical" margin="2rem"/>
               <ContentTitle>{Data.contentTitle}</ContentTitle>
               <Marginer direction="vertical" margin="2rem"/>
               <Content>{Data.contentDescription}</Content>
           </MainSectionContainer>
        </>
    )
}

export default TopSection
