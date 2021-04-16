//importing Packages and Components
import React from 'react';
import styled from 'styled-components';
import {
    Breadcrumb,
    BreadcrumbItem,
  } from 'styled-breadcrumb-component';
  import { Link } from 'react-router-dom';


//UpDatedBreadCrumb(styled from BreadCrumb)
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

    @media screen and (max-width:768px){
        top:70%;
    }
  `;

//UpDatedBreadCrumbItem(styled from BreadcrumbItem)
const UpDatedBreadCrumbItem=styled(BreadcrumbItem)`
    a{
        text-decoration:none;
        color:#fff;
        font-size:1.5rem;
        transition:all 0.5s ease;
    }
    :hover { 
        transform: scale(1.1);
        z-index:99;
        }
`;

//UpDatedBreadCrumbItem(styled from BreadcrumbItem)
const UpDatedBreadCrumbItem2=styled(BreadcrumbItem)`
         a{
        text-decoration:none;
        color:#fff;
        font-size:1.5rem;
        transition:all 0.5s ease;
    }
    :hover { 
        transform: scale(1.1);
        z-index:99;
        }
`;

//UpDatedBreadCrumbItem(styled from BreadcrumbItem)
const UpDatedBreadCrumbItem3=styled(BreadcrumbItem)`
        font-size:1.5rem;
`;


//BlogCardBreadCrumb function
function BlogCardBreadCrumb(props) {
    const {homePage,blogMainPage,currentPage}=props
    return (
        <>
            <UpDatedBreadCrumb>
                <UpDatedBreadCrumbItem>
                <Link to="/">{homePage}</Link>
                </UpDatedBreadCrumbItem>
                <UpDatedBreadCrumbItem2>
                <Link to="/blogs">{blogMainPage}</Link>
                </UpDatedBreadCrumbItem2>
                <UpDatedBreadCrumbItem3 active>
                {currentPage}  
                </UpDatedBreadCrumbItem3>
            </UpDatedBreadCrumb>
        </>
    )
}

export default BlogCardBreadCrumb
