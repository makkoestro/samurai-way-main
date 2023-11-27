import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PropsPostsType} from "../../App";

export type PostsType = {
    posts: PropsPostsType[]
}
export const Profile = (props:PostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};


