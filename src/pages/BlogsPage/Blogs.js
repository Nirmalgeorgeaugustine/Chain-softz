import React from 'react';
import Navbar from '../../components/General/Navbar/Navbar';
import {BlogsPageContainer} from './Data';
import Footer from '../../components/General/Footer/Footer';
import {Marginer} from '../../components/General/marginer/index';
import TopSection from '../../components/Blogs/BlogsTopSection/TopSection';
import CopyRight from '../../components/General/CopyRight';

function Blogs() {
    return (
        <>
            <BlogsPageContainer>
                <TopSection>
                    <Navbar />
                </TopSection>
                <Marginer direction="vertical" margin={50}/>
                <Footer />
                <Marginer direction="vertical" margin={50}/>
                <CopyRight/>
            </BlogsPageContainer>
        </>
    )
}

export default Blogs
