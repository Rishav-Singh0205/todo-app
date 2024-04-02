import React from 'react'
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <main style={{ minHeight: "73vh" }}>
                {children}
            </main>
        </div>
    )
};
Layout.defaultProps = {
    title: "To-do-App",
    description: "Notes",
    keywords: "create",
    author: "Rishav Singh",
};


export default Layout