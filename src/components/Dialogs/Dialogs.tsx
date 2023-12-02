import React, {ChangeEvent, LegacyRef, RefObject, useRef} from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";



type DialogAndMessagesPropsType = {
    dialogsPage: DialogsPageType
    changeDialogMessage: (message: string) => void
    addDialogMessage: () => void;
}
export const Dialogs:React.FC<DialogAndMessagesPropsType> = ({dialogsPage, changeDialogMessage, addDialogMessage}) => {

    const dialogs = dialogsPage.dialogsData.map(d => {
        return <DialogItem key={d.id} name={d.name} id={`${d.id}`}/>
    })

    const messages = dialogsPage.messagesData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })
    let newPostEl = useRef<HTMLTextAreaElement>(null)
    const addDialogMessageHandler = () => {
        if (newPostEl.current !== null) {
            addDialogMessage()
        }
    }
    const ChangeDialogMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        changeDialogMessage(e.currentTarget.value)
    }


    return (
        <div className={classes.dialogWrapper}>
            <ul className={'dialogItems'}>
                {dialogs}
            </ul>
            <div className={'messages'}>
                {messages}
                <textarea  onChange={ChangeDialogMessageHandler} value={dialogsPage.dialogMessage} ref={newPostEl}></textarea>
                <button onClick={addDialogMessageHandler}>Add</button>
            </div>
        </div>
    );
};

