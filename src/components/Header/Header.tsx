import React from 'react';
import classes from './Header.module.css'
import {HeaderContainerPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

type HeaderPropsType = HeaderContainerPropsType
const Header = ({login, isAuth, logout}:HeaderPropsType) => {
    return (
        <header className={classes.header}>

            <img className={classes.logo}
            src="https://whc.unesco.org/uploads/thumbs/site_1703_0003-750-750-20230206105558.jpg"
            alt=""/>
            {isAuth && <h3 onClick={logout}>LOGOUT</h3>}
            {isAuth
            ? <h3>{login}</h3>
            : <NavLink to={'/login'}>login</NavLink>
            }

        </header>

    );
};

export default Header;