import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import OuterBlog from '../components/outer-blog/OuterBlog';
import OuterBlogMain from '../components/outer-blog/OuterBlogMain';

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <OuterBlogMain />
            <OuterBlogMain />
        </div>

    )
}
export default Home