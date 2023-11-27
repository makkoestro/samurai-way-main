import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType, MessagesPropsType} from "../../App";


type DialogAndMessagesPropsType = {
    dialogsData: DialogsPropsType[]
    messagesData: MessagesPropsType[]

}
export const Dialogs:React.FC<DialogAndMessagesPropsType> = ({dialogsData, messagesData}) => {

    const dialogs = dialogsData.map(d => {
        return <DialogItem key={d.id} name={d.name} id={`${d.id}`}/>
    })

    const messages = messagesData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })
    return (
        <div className={classes.dialogWrapper}>
            <ul className={'dialogItems'}>
                {dialogs}
            </ul>
            <div className={'messages'}>
                {messages}
            </div>
        </div>
    );
};

