import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={classes.intro}>
                <img className={classes.img}
                     src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-colorful-long-haired-cat-art-peggy-collins.jpg"
                     alt=""/>
                <div>
                    <ul>
                        <li>
                            <h3 className={classes.ProfileName}>Lex Murza</h3>
                        </li>
                        <li>Date of birth: 19 May</li>
                        <li>City: Odessa</li>
                        <li>Education: ONMA</li>
                        <li>Web-site: no</li>
                    </ul>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};


export default Profile;