import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject, useRef} from 'react';
import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import {log} from "util";
import {MyPostsPropsType} from "./MyPostsContainer";
import PostForm, {FormPropsType} from './PostForm'


const MyPosts = React.memo((props: MyPostsPropsType) => {
    console.log('MYPOSTS')
    const posts = props.posts.map(p => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    })


    const onSubmit = (value: FormPropsType) => {
        console.log(value)
        props.addPost(value.message)
    }
    return (
        <div>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <PostForm onSubmit={onSubmit}/>
                {posts}
            </div>

        </div>
    );
})

export default MyPosts;