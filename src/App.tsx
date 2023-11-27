import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


export type PropsPostsType = {
    id: number;
    message: string;
    likesCount: number;
}
export type DialogsPropsType = {
     id: number; name: string;
}
export type MessagesPropsType = {
    id: number; message: string;
}
export type PropsType = {
    posts: PropsPostsType[]
    dialogsData: DialogsPropsType[]
    messagesData: MessagesPropsType[]

}

function App(props: PropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main
                className={'app-wrapper-main'}>     {/*что бы применялись повторяющиеся стили вне зависимости от контента*/}
                <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </main>
        </div>
    );
}

export default App;
