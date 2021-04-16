import React from 'react';
import Features from '../../components/Home/Features/Features';
import TopSection from '../../components/Home/TopSection';
import Partners from '../../components/Home/Partners/Partners';
import Benefits from '../../components/Home/Benefits/Benefits';
import LiveLocation from '../../components/Home/LiveLocation/LiveLocation';
import Testimonial from '../../components/Home/Testimonial/Testimonial';
import { HomePageContainer } from './Data';
import {Marginer} from '../../components/General/marginer/index';
import CopyRight from '../../components/General/CopyRight';
import Footer from '../../components/General/Footer/Footer';
import Navbar from '../../components/General/Navbar/Navbar';
import Scroll from '../../components/General/BackToTop';


const Home = () => {
    return (
        <>
        <HomePageContainer>
            <TopSection>
                <Navbar home/>
            </TopSection>
            <Marginer direction="vertical" margin={60}/>
            <Partners /> 
            <Marginer direction="vertical" margin={10}/>
            <Features/>
            <Marginer direction="vertical" margin={25}/>
            <Benefits/>
            <Marginer direction="vertical" margin={5}/>
            <LiveLocation/>
            <Marginer direction="vertical" margin={50}/>
            <Testimonial/>
            <Marginer direction="vertical" margin={50}/>
            <Footer/>
            <Marginer direction="vertical" margin={50}/>
            <CopyRight/>
            <Scroll/>
        </HomePageContainer>
        </>
    )
}

export default Home


