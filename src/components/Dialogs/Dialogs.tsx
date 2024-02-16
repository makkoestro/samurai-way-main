import React, {ChangeEvent, LegacyRef, RefObject, useRef} from 'react';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";



export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addDialogMessage, ChangeDialogMessage}) => {

    const dialogs = dialogsPage.dialogsData.map(d => {
        return <DialogItem key={d.id} name={d.name} id={`${d.id}`}/>
    })

    const messages = dialogsPage.messagesData.map(m => {
        return <Message key={m.id} message={m.message}/>
    })
    let newPostEl = useRef<HTMLTextAreaElement>(null)
    const addDialogMessageHandler = () => {
        // if (newPostEl.current !== null) {
        //
        // }
        addDialogMessage()
    }
    const ChangeDialogMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        ChangeDialogMessage(e.currentTarget.value)
    }


    return (
        <div className={classes.dialogWrapper}>
            <ul className={'dialogItems'}>
                {dialogs}
            </ul>
            <div className={'messages'}>
                {messages}
                <textarea onChange={ChangeDialogMessageHandler} value={dialogsPage.dialogMessage}
                          ref={newPostEl}></textarea>
                <button onClick={addDialogMessageHandler}>Add</button>
            </div>
        </div>
    );
};

