import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    message: string
    likeCounts: number
}
const Post = (props:PostPropsType ) => {
    return (
        <div>
            <div className={classes.Post}>
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/index-avatar3-1672251913.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
                    alt=""/>
                <div className={classes.Message}>{props.message}</div>
                <div>{props.likeCounts} <span>Likes</span></div>
            </div>
        </div>
    );
};

export default Post;