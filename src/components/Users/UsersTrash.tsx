import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import defaultPhoto from '../../assets/img/sonic.png'

export const UsersTrash: React.FC<UsersPropsType> = (props) => {
    let getUsers =  () => {
        let users =   axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => res.data.items).then(users => {
            props.setUsers(users)
        })

    }


    // if (props.users.length == 0) {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
    //         console.log(res.data.items)
    //         props.setUsers(res.data.items)
    //     } )
    // }




    return (
        <div >
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(u => <div key={u.id} className={s.userContainer}>
                <div>
                    <div>
                         <img className={s.photo} src={u.photos.small ? u.photos.small : defaultPhoto} alt=""/>
                    </div>
                   <div>
                        <button onClick={() => props.changeStatus(u.id)}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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

