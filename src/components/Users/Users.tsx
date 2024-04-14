import React from 'react';
import s from "./users.module.css";
import defaultPhoto from "../../assets/img/sonic.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
type PropsType = {
    users: UserType[]
    totalCount:number
    pageSize:number
    Page:number
    onPageChanged: (p:number) => void
    onFollowStatus: (id:number) => void
    setUnfollowStatus: (id:number) => void
}

export const Users = (props:PropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    console.log(pagesCount)
    let pages = []
    for (let i = 1;i <= pagesCount;i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }
    const onPageChangedHandler = (p:number) => {
        props.onPageChanged(p)

    }
    return (
        <div >
            <div>
                {pages.map(p => <span onClick={() => onPageChangedHandler(p)} className={props.Page === p ? `${s.pageStyle} ${s.isSelected}` : s.pageStyle}>{p}</span>)}
            </div>

            <div></div>
            {props.users.map(u => <div key={u.id} className={s.userContainer}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.photo} src={u.photos.small ? u.photos.small : defaultPhoto} alt=""/>
                        </NavLink>

                    </div>
                    <div>
                        <button disabled={u.followingInProgress} style={u.followed ? {color: 'red'} : {color: 'green'}} onClick={ u.followed ? () => props.setUnfollowStatus(u.id) : () => props.onFollowStatus(u.id)}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                    </div>

                </div>
                <div className={s.userInfo}>
                    <div>
                        <div>{u.name}</div>
                        <div>{'u.description'}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>

            </div>)}
        </div>
    );
};

