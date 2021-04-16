//importing Packages and Components
import React from 'react';
import {TopSectionContainer,MainSectionContainer,HerobannerContainer,BlogSectionContainer} from './TopSection.elements';
import HeroSection from '../../General/HeroSection/HeroSection';
import BlogCard from '../BlogCard/BlogCard';
//importing images from local folder
import card1Image from '../../../images/123.jpg';
import card2Image from '../../../images/2.jpg';
import card3Image from '../../../images/blog.jpg';
//importing icons from @fortawesome/free-solid-svg-icons
import { faCoffee,faCheckSquare, faAnchor } from '@fortawesome/free-solid-svg-icons';
import {Marginer} from '../../General/marginer/index';
import BreadCrumb from '../../General/BreadCrumb/BreadCrumb';
import Data from './topsection.json';


//TopSection function
function TopSection(props) {
    const {children}=props;
    return (
        <>
            <TopSectionContainer>
               {children}
               <HerobannerContainer>
                    <HeroSection pageTitle={Data.pageTitle}companyName={Data.companyName}/>
                    <BreadCrumb homePage="Home" currentPage="Blogs"/>
               </HerobannerContainer>
            </TopSectionContainer>
            <Marginer direction="vertical" margin="5rem"/>
            <MainSectionContainer>
                <BlogSectionContainer>
                    <BlogCard cardImage={card1Image} iconName={faCoffee} categoryName={Data.categoryName1}captionName={Data.captionName1}captionDescription={Data.captionDescription1} buttonLink={"/blogOne"}/>
                    <BlogCard cardImage={card2Image} iconName={faCheckSquare} categoryName={Data.categoryName2}captionName={Data.captionName2} captionDescription={Data.captionDescription2} buttonLink={"/blogTwo"}/>
                    <BlogCard cardImage={card3Image} iconName={faAnchor} categoryName={Data.categoryName3}captionName={Data.captionName3} captionDescription={Data.captionDescription3} buttonLink={"/blogThree"}/>
                </BlogSectionContainer>
            </MainSectionContainer>
        </>
    )
}

export default TopSection
