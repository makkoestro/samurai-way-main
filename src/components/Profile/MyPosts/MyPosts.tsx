import React from 'react';
import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import {PropsPostsType} from "../../../App";
import {PostsType} from "../Profile";



const MyPosts = (props: PostsType) => {

    const posts = props.posts.map(p => {
        return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    })

    return (
        <div>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <textarea></textarea>
                <button>add post</button>
                {posts}
            </div>

        </div>
    );
};

export default MyPosts;