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
    addPost: () => void;
    state: stateType
    changeTextAreaValue: (message: string) => void;
    changeDialogMessage: (message: string) => void;
    addDialogMessage: () => void;
}

function App(props: StatePropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main
                className={'app-wrapper-main'}>     {/*что бы применялись повторяющиеся стили вне зависимости от контента*/}
                <Route path={'/profile'} render={() => <Profile addPost={props.addPost}
                                                                posts={props.state.profilePage}
                                                                postMessage={props.state.profilePage.message}
                                                                changeTextAreaValue={props.changeTextAreaValue}



                /> }/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              changeDialogMessage={props.changeDialogMessage}
                                              addDialogMessage={props.addDialogMessage}

                       />}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </main>
        </div>
    );
}

export default App;
