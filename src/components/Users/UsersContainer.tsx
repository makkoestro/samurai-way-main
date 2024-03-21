import React from 'react';
import {connect} from "react-redux";
import {
    ChangeStatusAC,
    SetCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    setFollowingInProgressAC,
    UserType, SetUsersTC, setFollowStatusTC, setUnfollowStatusTC
} from "../../redux/users-reducer";
import {AppThunkDispatch, store, StoreStateType} from "../../redux/store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {userApi} from "../../api/api";


type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.SetUsersTC(this.props.pageSize, this.props.currentPage)
    }

    componentWillUnmount() {
        console.log('Я умерла!!((')
    }

    onPageChanged = (pageNumber: number) => {
        this.props.SetUsersTC(this.props.pageSize, pageNumber)
    }
    setFollowStatus = (userId: number) => {
        this.props.setFollowStatus(userId)
    }
    setUnfollowStatus = (userId: number) => {
        this.props.setUnfollowStatus(userId)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

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
const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        SetUsersTC: (pageSize: number, currentPage: number) => dispatch(SetUsersTC(pageSize, currentPage)),
        setFollowStatus: (userId: number) => dispatch(setFollowStatusTC(userId)),
        setUnfollowStatus: (userId: number) => dispatch(setUnfollowStatusTC(userId))
    };
};
// const mapDispatchToProps = {
//     changeStatus:ChangeStatusAC,
//     setCurrentPage: SetCurrentPageAC,
//     setTotalCount: setTotalCountAC,
//     setIsFetching: setIsFetchingAC,
//     changeFollowStatus: ChangeStatusAC,
//     setFollowingInProgress: setFollowingInProgressAC,
//     SetUsersTC: SetUsersTC
// }
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
