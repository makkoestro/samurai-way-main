import React from 'react';
import {connect} from "react-redux";
import {
    ChangeStatusAC,
    SetCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    SetUsersAC,
    UserType
} from "../../redux/users-reducer";
import {store, StoreStateType} from "../../redux/store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";


type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = typeof mapDispatchToProps
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
            {withCredentials:true}
            ).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        })
        console.log('Я родилась!!')
    }

    componentWillUnmount() {
        console.log('Я умерла!!((')
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(res => res.data.items).then(users => {
            this.props.setUsers(users)
            this.props.setIsFetching(false)
        })
    }
    setFollowStatus = (userId:number) => {
       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
           {withCredentials:true, headers: {
           'API-KEY': 'df76ac7a-b95d-4748-a798-8ee5c154d07a'}}
       ).then(res => {
           this.props.changeFollowStatus(userId,true )
       })
    }
    setUnfollowStatus = (userId:number) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials:true}
        ).then(res => {
            this.props.changeFollowStatus(userId,false )
        })
    }


    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users}
                   totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onFollowStatus={this.setFollowStatus}
                         setUnfollowStatus={this.setUnfollowStatus}
            />}
        </>

    }
}
const mapStateToProps = (state: StoreStateType) => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount:state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         changeStatus: (userId:number) => {
//             dispatch(ChangeStatusAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (page:number) => {
//             dispatch(SetCurrentPageAC(page))
//         },
//         setTotalCount: (count:number) => {
//             dispatch((setTotalCountAC(count)))
//         },
//         setIsFetching:(isFetching:boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//
//     }
// }

const mapDispatchToProps = {
    changeStatus:ChangeStatusAC,
    setUsers:SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalCount: setTotalCountAC,
    setIsFetching: setIsFetchingAC,
    changeFollowStatus: ChangeStatusAC
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)
