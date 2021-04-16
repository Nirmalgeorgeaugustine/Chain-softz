//importing Package
import React from 'react';
import { ErrorPageContainer,ErrorContentTitle,ErrorContent,Redirect,HomePage } from './Data';

//function
function Error() {
    return (
        <>
            <ErrorPageContainer>
                <ErrorContentTitle>Error 404</ErrorContentTitle>
                <ErrorContent>Content Not Found</ErrorContent>
                <Redirect>Redirect to <HomePage href="/">Home Page</HomePage></Redirect>
            </ErrorPageContainer>
        </> 
    )
}

export default Error
