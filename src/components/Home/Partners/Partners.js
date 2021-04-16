//importing components
import { PartnerContainer,PartnerImageContainer } from './Partners.elements';
import { UpperCaseTitle } from '../../../globalstyle';
import PartnerImg from '../../../images/Auto Insurance.png';
import Data from './partner.json';

//function
const Partners = () => {
    return (
        <>
            <PartnerContainer>
                <UpperCaseTitle>{Data.title}</UpperCaseTitle>
                <PartnerImageContainer>
                    <img src={PartnerImg} alt="Partners"/>
                    <img src={PartnerImg} alt="Partners"/>
                    <img src={PartnerImg} alt="Partners"/>
                    <img src={PartnerImg} alt="Partners"/>
                    <img src={PartnerImg} alt="Partners"/>
                    <img src={PartnerImg} alt="Partners"/>
                </PartnerImageContainer>
            </PartnerContainer>
        </>
    )
}

export default Partners
