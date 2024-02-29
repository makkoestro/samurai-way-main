import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import defaultPhoto from '../../assets/img/sonic.png'

export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => res.data.items).then(users => {
            this.props.setUsers(users)
        })
        console.log('Я родилась!!')
    }
    componentWillUnmount() {
        console.log('Я умерла!!((')
    }

    render() {
        return (
            <div >
                {this.props.users.map(u => <div key={u.id} className={s.userContainer}>
                    <div>
                        <div>
                            <img className={s.photo} src={u.photos.small ? u.photos.small : defaultPhoto} alt=""/>
                        </div>
                        <div>
                            <button style={u.followed ? {color: 'red'} : {color: 'green'}} onClick={() => this.props.changeStatus(u.id)}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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
    }
}