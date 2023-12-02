import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PropsPostsType} from "../../App";

export type PostsType = {
    addPost: () => void;
    posts: {
        postsData: PropsPostsType[]
    }
    postMessage: string
    changeTextAreaValue: (message: string) => void;
}
export const Profile = (props:PostsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.posts.postsData} postMessage={props.postMessage} changeTextAreaValue={props.changeTextAreaValue}  />
        </div>
    );
};


