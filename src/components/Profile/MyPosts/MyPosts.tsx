import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject, useRef} from 'react';
import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import {PropsPostsType} from "../../../App";
import {PostsType} from "../Profile";


type MyPostsType = {
    addPost: () => void;
    posts: PropsPostsType[]
    postMessage: string
    changeTextAreaValue: (message: string) => void;
}
const MyPosts = (props: MyPostsType) => {


    const posts = props.posts.map(p => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    })
    let newPostElem = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElem.current !== null) {
            props.addPost()
        }
    }
    const changeTextAreaValueHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextAreaValue(e.currentTarget.value)
    }
    return (
        <div>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <textarea  onChange={changeTextAreaValueHandler} value={props.postMessage} ref={newPostElem}></textarea>
                <button onClick={addPost}>add post</button>
                {posts}
            </div>

        </div>
    );
};

export default MyPosts;