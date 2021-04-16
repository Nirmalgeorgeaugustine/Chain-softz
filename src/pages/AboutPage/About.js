//importing packages and components
import React from 'react';
import Navbar from '../../components/General/Navbar/Navbar';
import TopSection from '../../components/About/TopSection';
import {AboutPageContainer} from './Data';
import Footer from '../../components/General/Footer/Footer';
import {Marginer} from '../../components/General/marginer/index';
import CopyRight from '../../components/General/CopyRight';
import Scroll from '../../components/General/BackToTop';

//function
function About(props) {
    return (
        <>
            <AboutPageContainer>
                <TopSection>
                    <Navbar />
                </TopSection>
                <Marginer direction="vertical" margin={50}/>
                <Footer />
                <Marginer direction="vertical" margin={50}/>
                <CopyRight/>
                <Scroll/>
            </AboutPageContainer>
        </>
    )
}

export default About
