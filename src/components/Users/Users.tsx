import React from 'react';
import s from "./users.module.css";
import defaultPhoto from "../../assets/img/sonic.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Pagination} from "common/Pagination/Paginator";
import {User} from "components/Users/User";
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

    return (
        <div >
           <Pagination totalCount={props.totalCount} pageSize={props.pageSize} Page={props.Page} onPageChanged={props.onPageChanged} />
            {props.users.map(u => <User name={u.name} id={u.id} photos={u.photos} status={u.status} followed={u.followed} followingInProgress={u.followingInProgress} setUnfollowStatus={props.setUnfollowStatus} onFollowStatus={props.onFollowStatus}/>)}
        </div>
    );
};

