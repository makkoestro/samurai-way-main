import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionType} from "./redux/profile-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {UserType} from "./redux/users-reducer";

import ProfileContainer from "./components/Profile/ProfileContainer";
import {ProfileUserType} from "./redux/profile-reducer";
import HeaderComponent from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";

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
    message: string,
    profile: ProfileUserType
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
            <HeaderComponent/>
            <Navbar/>
            <main
                className={'app-wrapper-main'}>     {/*что бы применялись повторяющиеся стили вне зависимости от контента*/}
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={NewsContainer}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/login'} component={Login}/>
            </main>
        </div>
    );
}

export default App;
