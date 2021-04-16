import React from 'react';
import {BlogsPageContainer} from './Data';
import BlogCardLink from '../../components/Blogs/BlogCardPages/BlogCardLink';
import blogimg1 from '../../images/123.jpg';
import Data from './blog.json';

function BlogOne() {
    return (
        <>
            <BlogsPageContainer>
               <BlogCardLink blogCategory={Data.blogCategory1} blogPara={Data.blogPara1} blogImage={blogimg1} currentPageTitle={Data.currentPageTitle1}/>
            </BlogsPageContainer>
        </>
    )
}

export default BlogOne
