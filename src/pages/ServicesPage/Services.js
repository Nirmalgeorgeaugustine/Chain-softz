import React from 'react';
import Navbar from '../../components/General/Navbar/Navbar';
import {ServicesPageContainer} from './Data';
import TopSection from '../../components/Services/TopSection';
import Footer from '../../components/General/Footer/Footer';
import {Marginer} from '../../components/General/marginer/index';
import CopyRight from '../../components/General/CopyRight';
import Scroll from '../../components/General/BackToTop';

function Services() {
    return (
        <>
            <ServicesPageContainer>
                <TopSection>
                    <Navbar />
                </TopSection>
                <Marginer direction="vertical" margin={50}/>
                <Footer />
                <Marginer direction="vertical" margin={50}/>
                <CopyRight />
                <Scroll/>
            </ServicesPageContainer>
        </>
    )
}

export default Services
