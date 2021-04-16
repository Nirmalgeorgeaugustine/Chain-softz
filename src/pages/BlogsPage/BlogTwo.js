import React from 'react';
import {BlogsPageContainer} from './Data';
import BlogCardLink from '../../components/Blogs/BlogCardPages/BlogCardLink';
import blogimg2 from '../../images/2.jpg';
import Data from './blog.json';

function BlogTwo() {
    return (
        <>
            <BlogsPageContainer>
               <BlogCardLink blogCategory={Data.blogCategory2} blogPara={Data.blogPara2} blogImage={blogimg2} currentPageTitle={Data.currentPageTitle2}/>
            </BlogsPageContainer>
        </>
    )
}

export default BlogTwo
