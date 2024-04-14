import React from 'react';
import {connect} from "react-redux";
import {setFollowStatusTC, setUnfollowStatusTC, SetUsersTC} from "../../redux/users-reducer";
import {AppThunkDispatch, StoreStateType} from "../../redux/store";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {compose} from "redux";
import {getPage, getIsFetching, getPageSize, getTotalCount, getUsers} from "redux/users-selectors";


type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = ReturnType<typeof mapDispatchToProps>
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.SetUsersTC(this.props.pageSize, this.props.Page)
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
                         Page={this.props.Page}
                         onPageChanged={this.onPageChanged}
                         onFollowStatus={this.setFollowStatus}
                         setUnfollowStatus={this.setUnfollowStatus}
                />}
        </>

    }
}

const mapStateToProps = (state: StoreStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        Page: getPage(state),
        isFetching: getIsFetching(state),

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
//         setPage: (page:number) => {
//             dispatch(SetPageAC(page))
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
        SetUsersTC: (pageSize: number, Page: number) => dispatch(SetUsersTC(pageSize, Page)),
        setFollowStatus: (userId: number) => dispatch(setFollowStatusTC(userId)),
        setUnfollowStatus: (userId: number) => dispatch(setUnfollowStatusTC(userId))
    };
};
// const mapDispatchToProps = {
//     changeStatus:ChangeStatusAC,
//     setPage: SetPageAC,
//     setTotalCount: setTotalCountAC,
//     setIsFetching: setIsFetchingAC,
//     changeFollowStatus: ChangeStatusAC,
//     setFollowingInProgress: setFollowingInProgressAC,
//     SetUsersTC: SetUsersTC
// }

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersAPIComponent)
