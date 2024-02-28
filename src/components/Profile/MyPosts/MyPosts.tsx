import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject, useRef} from 'react';
import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import {PropsPostsType} from "../../../App";
import {ActionType} from "../../../redux/state";
import {log} from "util";
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsPropsType) => {



    const posts = props.posts.map(p => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    })
    let addPost = () => {
        props.addPost()
    }
    const changeTextAreaValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
    }
    return (
        <div>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <textarea placeholder={'Type new post'} onChange={changeTextAreaValueHandler}
                          value={props.postMessages}></textarea>
                <button onClick={addPost}>add post</button>
                {posts}
            </div>

        </div>
    );
};

export default MyPosts;