import React from 'react';
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
            src="https://whc.unesco.org/uploads/thumbs/site_1703_0003-750-750-20230206105558.jpg"
            alt=""/>
        </header>

    );
};

export default Header;