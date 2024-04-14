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
import HeaderComponent, {HeaderContainerPropsType} from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import {AppRootStateType, AppThunkDispatch, store} from "redux/store";
import {Preloader} from "common/Preloader";
import {connect, useSelector} from "react-redux";
import {logOutTC, getAuthUserDataTC} from "redux/set-auth-user-data-t-c";
import {initializeApp} from "redux/app-reducer";

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
    profile: ProfileUserType
    status:string
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


class App extends React.Component<mapDispatchToPropsType & mapStateToPropsType>{

    componentDidMount() {
        this.props.initializeApp()
        console.log(this.props.isInitialized)
    }
    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderComponent/>
                <Navbar/>
                <main
                    className={'app-wrapper-main'}>     {/*что бы применялись повторяющиеся стили вне зависимости от контента*/}
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/dialogs'}
                                   render={() => <DialogsContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/news'} component={NewsContainer}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/settings'} component={Settings}/>
                            <Route path={'/login'} render={() => <LoginContainer/>}/>
                </main>
            </div>
        );
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state:AppRootStateType) => {
    return {
        isInitialized:state.app.isInitialized

    }
}
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        initializeApp: () => dispatch(initializeApp())
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (App)

