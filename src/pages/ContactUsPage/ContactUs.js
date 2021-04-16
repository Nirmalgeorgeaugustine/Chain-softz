import React from 'react';
import TopSection from '../../components/Contact/Topsection';
import Navbar from '../../components/General/Navbar/Navbar';
import Footer from '../../components/General/Footer/Footer';
import CopyRight from '../../components/General/CopyRight';
import {Marginer} from '../../components/General/marginer/index';
import {ContactPageContainer} from './Data';
import Scroll from '../../components/General/BackToTop';

function ContactUs() {
    return (
        <>
             <ContactPageContainer>
                <TopSection>
                    <Navbar />
                </TopSection>
                <Marginer direction="vertical" margin={50}/>
                <Footer />
                <Marginer direction="vertical" margin={50}/>
                <CopyRight/>
                <Scroll/>
            </ContactPageContainer>
        </>
    )
}

export default ContactUs
