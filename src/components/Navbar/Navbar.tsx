import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {

    const menuTitles = [{title: 'Profile', href: '/profile'},
        {title: 'Dialogs', href: '/dialogs'}, {title: 'News', href: '/news'}, {
            title: 'Music',
            href: '/music'
        }, {title: 'Settings', href: '/settings'}]
    const NavMenu = menuTitles.map(nav => <li><a href={nav.href}>{nav.title}</a></li>)
    return (
        <nav className={classes.nav}>
            <ul>
                {NavMenu}
            </ul>
        </nav>
    );
};

export default Navbar;