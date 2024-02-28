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
import {ActionType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { UsersContainer} from "./components/Users/UsersContainer";
import {UserType} from "./redux/users-reducer";
import {log} from "util";
import {store} from "./redux/store";

export type DialogsPropsType = {
    id: number; name: string;
}
export type MessagesPropsType = {
    id: number; message: string;
}
export type DialogsPageType = {
    messagesData: MessagesPropsType[]
    dialogsData: DialogsPropsType[]
    dialogMessage: string

}
export type ProfilePageType = {
    postsData: PropsPostsType[]
    message: string
}
export type UsersPageType = {
    users: UserType[]
}
export type stateType = {
    profilePage: {
        postsData: PropsPostsType[];
        message: string
    };
    dialogsPage: DialogsPageType
}

export type PropsPostsType = {
    id: number;
    message: string;
    likesCount: number;
}


export type StatePropsType = {
    dispatch: (action: ActionType) => void;
    state: stateType
}

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main
                className={'app-wrapper-main'}>     {/*что бы применялись повторяющиеся стили вне зависимости от контента*/}
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </main>
        </div>
    );
}

export default App;
