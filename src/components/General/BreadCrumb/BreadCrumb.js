//importing packages and components
import React from 'react';
import styled from 'styled-components';
import {
    Breadcrumb,
    BreadcrumbItem,
  } from 'styled-breadcrumb-component';
  import { Link } from 'react-router-dom';

//UpDatedBreadCrumb styling(updated from Breadcrumb)
const UpDatedBreadCrumb=styled(Breadcrumb)`
    display: flex;
    left: 50%;
    position: absolute;
    top: 78%;
    transform: translate(-50%, -50%);
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    list-style: none;
    background-color: transparent;
    border-radius: 0.25rem;

    //media query
    @media screen and (max-width:768px){
        top:70%;
    }
`;

//UpDatedBreadCrumbItem styling(updated from BreadcrumbItem)
const UpDatedBreadCrumbItem=styled(BreadcrumbItem)`
    a{
        text-decoration:none;
        color:#fff;
        font-size:1.5rem;
        transition:all 0.5s ease;
    }

    //hover
    :hover { 
        transform: scale(1.1);
        z-index:99;
    }
`;

//UpDatedBreadCrumbItem styling(updated from BreadcrumbItem)
const UpDatedBreadCrumbItem2=styled(BreadcrumbItem)`
        font-size:1.5rem;
`;


//BreadCrumb function
function BreadCrumb(props) {
    const {homePage,currentPage}=props
    return (
        <>
            <UpDatedBreadCrumb>
                <UpDatedBreadCrumbItem>
                <Link  to="/">{homePage}</Link >
                </UpDatedBreadCrumbItem>
                <UpDatedBreadCrumbItem2 active>
                {currentPage}
                </UpDatedBreadCrumbItem2>
            </UpDatedBreadCrumb>
        </>
    )
}

export default BreadCrumb
