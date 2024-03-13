import React from 'react';
import loader from "../assets/img/tube-spinner.svg";

export const Preloader = () => {
    return (
        <img style={{ width:'200px', height: '200px'}} src={loader} alt=""/>
    );
};

