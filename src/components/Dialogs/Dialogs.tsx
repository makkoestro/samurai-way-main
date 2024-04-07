import React, {ChangeEvent, LegacyRef, RefObject, useRef} from 'react';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import AddMessageForm, {FormPropsType} from '../Dialogs/MessageForm'
import {Dispatch} from "redux";
import {reset} from "redux-form";


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addDialogMessage}) => {

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

    }

    const submitForm = (formData: FormPropsType, dispatch:Dispatch) => {
        addDialogMessage(formData.message)
        console.log(formData)
        dispatch(reset('dialogAddMessageForm'))

    }


    return (
        <div className={classes.dialogWrapper}>
            <ul className={'dialogItems'}>
                {dialogs}
            </ul>
            <div className={'messages'}>
                <AddMessageForm onSubmit={submitForm}/>
                {messages}
                {/*<textarea onChange={ChangeDialogMessageHandler} value={dialogsPage.dialogMessage}*/}
                {/*          ref={newPostEl}></textarea>*/}
                {/*<button onClick={addDialogMessageHandler}>Add</button>*/}
            </div>
        </div>
    );
};

