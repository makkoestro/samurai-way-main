import React from 'react';
import classes from './MyPosts.module.css'
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={classes.posts}>
                <div>My posts</div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <Post message={'Hello there!'} likeCounts={10}/>
            <Post message={'How are u?'} likeCounts={6}/>
            <Post message={'Hello Wordl!'} likeCounts={8}/>
        </div>
    );
};

export default MyPosts;