import React from 'react';
import {connect} from "react-redux";
import {UsersTrash} from "./UsersTrash";
import {ChangeStatusAC, SetCurrentPageAC, setTotalCountAC, SetUsersAC, UserType} from "../../redux/users-reducer";
import {UsersPageType} from "../../App";
import {StoreStateType} from "../../redux/store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        })
        console.log('Я родилась!!')
    }

    componentWillUnmount() {
        console.log('Я умерла!!((')
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(res => res.data.items).then(users => {
            this.props.setUsers(users)
        })
    }

    render() {
        return <Users users={this.props.users}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      onChangeStatus={this.props.changeStatus}
        />
    }
}
const mapStateToProps = (state: StoreStateType) => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount:state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeStatus: (userId:number) => {
            dispatch(ChangeStatusAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (page:number) => {
            dispatch(SetCurrentPageAC(page))
        },
        setTotalCount: (count:number) => {
            dispatch((setTotalCountAC(count)))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)
