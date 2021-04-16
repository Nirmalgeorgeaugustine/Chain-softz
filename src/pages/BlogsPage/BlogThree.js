import React from 'react';
import {BlogsPageContainer} from './Data';
import BlogCardLink from '../../components/Blogs/BlogCardPages/BlogCardLink';
import blogimg3 from '../../images/blog.jpg';
import Data from './blog.json';

function BlogThree() {
    return (
        <>
            <BlogsPageContainer>
               <BlogCardLink blogCategory={Data.blogCategory3} blogPara={Data.blogPara3}  blogImage={blogimg3} currentPageTitle={Data.currentPageTitle3}/>
            </BlogsPageContainer>
        </>
    )
}

export default BlogThree
