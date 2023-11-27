import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../Dialogs.module.css";

type DialogItemPropsType = {
    name: string,
    id: string
}
export const DialogItem = ({name, id}: DialogItemPropsType) => {
    return (
        <li><NavLink className={classes.item} to={`/dialogs/${id}`}>{name}</NavLink></li>
    )
}

export default DialogItem;