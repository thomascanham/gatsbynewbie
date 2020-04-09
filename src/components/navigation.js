import React from 'react';
import { Link } from 'gatsby';
import navStyle from '../styles/navStyle.module.css';

export default () => (
    <nav className={navStyle.nav}>
        <ul className={navStyle.navUL}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-2">Page2</Link></li>
            <li><Link to="/posts">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
)