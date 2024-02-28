import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const menuTitles = [{title: 'Profile', href: '/profile'},
        {title: 'Dialogs', href: '/dialogs'},
        {title: 'Users', href: '/users'},
        {title: 'News', href: '/news'},
        {title: 'Music', href: '/music'},
        {title: 'Settings', href: '/settings'}
      ]
    const NavMenu = menuTitles.map(nav => <li><NavLink activeClassName={classes.active} to={nav.href}>{nav.title}</NavLink></li>)
    return (
        <nav className={classes.nav}>
            <ul>
                {NavMenu}
            </ul>
        </nav>
    );
};

export default Navbar;