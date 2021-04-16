//imporing packages and components
import React from 'react';
import {TopSectionContainer,HerobannerContainer,MainSectionContainer} from './TopSection.elements';
import HeroSection from '../General/HeroSection/HeroSection';
import FeatureElements from '../Home/Features/Features.elements';
import AutoInsu from '../../images/Auto Insurance.png';
import CorpServ from '../../images/corpservice.png';
import {Marginer} from '../General/marginer/index';
import BreadCrumb from '../General/BreadCrumb/BreadCrumb';
import Data from './topsection.json';


//function
function TopSection(props) {
    const{children}=props;
    return (
        <>
           <TopSectionContainer>
               {children}
               <HerobannerContainer>
                    <HeroSection pageTitle={Data.pageTitle}companyName={Data.companyName}/>
                    <BreadCrumb homePage="Home" currentPage="Services"/>
               </HerobannerContainer>
            </TopSectionContainer>
            <MainSectionContainer>
            <Marginer direction="vertical" margin="2rem"/>
            <FeatureElements title={Data.elementTitleOne} description={Data.elementDescriptionOne} imageURL={AutoInsu}/>
            <FeatureElements title={Data.elementTitleTwo} description={Data.elementDescriptionTwo} imageURL={CorpServ} isReversed/>
            </MainSectionContainer> 
        </>
    )
}

export default TopSection
