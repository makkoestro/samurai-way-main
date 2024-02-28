import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ChangeStatusAC, SetUsersAC, UserType} from "../../redux/users-reducer";
import {UsersPageType} from "../../App";
import {StoreStateType} from "../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps
const mapStateToProps = (state: StoreStateType) => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeStatus: (userId:number) => {
            dispatch(ChangeStatusAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)
