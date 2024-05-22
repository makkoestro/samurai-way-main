import React, {FC} from 'react';
import s from "./users.module.css";
import defaultPhoto from "../../assets/img/sonic.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Pagination} from "common/Pagination/Paginator";

type PropsType = {
    setUnfollowStatus: (id: number) => void,
    onFollowStatus: (id: number) => void,
}

export const User: FC<UserType & PropsType> = ({id, photos, onFollowStatus, setUnfollowStatus, followingInProgress, followed, name}) => {


    return (
        <div>
            <div className={s.userInfo}>
                <div>
                    <div>{name}</div>
                    <div>{'u.description'}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
            <div>
                <div>
                    <NavLink to={'/profile/' + id}>
                        <img className={s.photo} src={photos.small ? photos.small : defaultPhoto} alt=""/>
                    </NavLink>

                </div>
                <div>
                    <button disabled={followingInProgress} style={followed ? {color: 'red'} : {color: 'green'}}
                            onClick={followed ? () => setUnfollowStatus(id) : () => onFollowStatus(id)}>{followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>

            </div>


        </div>
    );
};

