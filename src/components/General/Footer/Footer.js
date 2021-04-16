//importing packages and components
import React from 'react';
import FooterElements from './Footer.elements';
import Data from './footer.json';

function Footer() {
    return (
        <>
            <FooterElements companyFirstName={Data.companyFirstName}companyLastName={Data.companLastName}mobileNo={Data.mobileNo} emailId={Data.emailId} whatsappNo={Data.whatsappNo} title={Data.linkTitle} linkName1={Data.linkName1}linkName2={Data.linkName2}linkName3={Data.linkName3}linkName4={Data.linkName4}linkName5={Data.linkName5} socialTitle={Data.socialTitle}/>
        </>
    )
}

export default Footer
