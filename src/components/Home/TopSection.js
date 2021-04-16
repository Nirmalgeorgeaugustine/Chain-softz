//importing packages and components
import React from 'react';
import {Button} from '../../globalstyle';
import {TopSectionContainer,TopSectionInnerContainer,ContentContainer,ContentTitle,Slogan,TopSectionDetailContainer,Formcontent,MailDetail,TopSectionImg,} from './TopSection.elements';
import BackDropImg from '../../images/corpservice.png';
import { Marginer } from '../General/marginer/index';


//function
const TopSection = (props) => {
    const {children}=props;
    return (
        <>
            <TopSectionContainer>
                {children}
                <TopSectionInnerContainer>
                    <ContentContainer>
                        <ContentTitle> Management software that works for you.</ContentTitle>
                        <Marginer direction="vertical" margin={25}/>
                        <Slogan>Remoteen projects has everything you need for your team to collaborate effectively, hit deadlines and archieve high performance results.</Slogan>
                        <Marginer direction="vertical" margin={25}/>
                        <TopSectionDetailContainer>
                            <Formcontent>
                               <MailDetail type="email" placeholder="Your email"/> 
                            </Formcontent>
                            <Button primary>Get Started</Button>
                        </TopSectionDetailContainer>
                    </ContentContainer>
                    <TopSectionImg>
                        <img src={BackDropImg} alt="imageeee"/>
                    </TopSectionImg>
                </TopSectionInnerContainer>
            </TopSectionContainer>
        </>
    )
}

export default TopSection
