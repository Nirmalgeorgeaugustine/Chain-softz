//importing Packages and Components
import React from 'react';
import {TopSectionContainer,HerobannerContainer} from '../BlogsTopSection/TopSection.elements';
import HeroSection from '../../General/HeroSection/HeroSection';
import BlogCardBreadCrumb from './BlogCardBreadCrumb';
import {BlogLinkContentContainer,BlogImagecontainer,BlogContentContainer,BlogCategory,BlogPara} from './BlogCardLink.elements';
import Navbar from '../../General/Navbar/Navbar';
import {Marginer} from '../../General/marginer/index';
import Footer from '../../General/Footer/Footer';
import CopyRight from '../../General/CopyRight';


//BlogCardLink function
function BlogCardLink(props) {
    const { blogCategory,blogPara,blogImage,currentPageTitle}=props;
    return (
        <>
           <TopSectionContainer>
               <Navbar/>
               <HerobannerContainer>
                    <HeroSection pageTitle="Blogs"companyName="Believer"/>
                    <BlogCardBreadCrumb homePage="Home"blogMainPage="Blogs"currentPage={currentPageTitle}/>
               </HerobannerContainer>
               <BlogLinkContentContainer>
                    <BlogImagecontainer>
                        <img src={blogImage} alt=""/>
                    </BlogImagecontainer>
                    <BlogContentContainer>
                        <BlogCategory>{blogCategory}</BlogCategory>
                        <BlogPara>{blogPara}</BlogPara>
                    </BlogContentContainer>
               </BlogLinkContentContainer>
               <Marginer direction="vertical" margin="5rem"/>
               <Footer />
               <Marginer direction="vertical" margin="5rem"/>
               <CopyRight/>
            </TopSectionContainer> 
        </>
    )
}

export default BlogCardLink
