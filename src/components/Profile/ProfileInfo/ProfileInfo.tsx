import React from 'react';
import classes from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
type ProfileInfoPropsType = {
    profile: ProfileUserType
}

const ProfileInfo = ({profile}:ProfileInfoPropsType) => {
    return !profile
    ?  <Preloader/>
    : (
        <div>
            <div className={classes.intro}>
                <img className={classes.img}
                     // src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-colorful-long-haired-cat-art-peggy-collins.jpg"
                     src={profile.photos.large}
                     alt=""/>
                <div>
                    <ul>
                        <li>
                           <h3 className={classes.ProfileName}>{profile.fullName}</h3>
                        </li>
                        <li></li>
                        {/*<li>{profile.aboutMe}</li>*/}
                        <li><ProfileStatus status={profile.aboutMe}/></li>
                        <li></li>
                        <li><a href={`https://${profile.contacts.vk}`}> {profile.contacts.vk}</a></li>
                        <li><a href={`https://${profile.contacts.instagram}`}> {profile.contacts.instagram}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;