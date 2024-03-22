import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PropsPostsType} from "../../App";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../../redux/store";
import {ProfileUserType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
   profile: ProfileUserType
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    );
};


