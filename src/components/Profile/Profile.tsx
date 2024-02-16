import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PropsPostsType} from "../../App";
import {ActionType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../../redux/store";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    );
};


