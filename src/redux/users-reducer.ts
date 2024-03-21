import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../App";
import {Dispatch} from "redux";
import {userApi} from "../api/api";


type UserReducerActionType = ChangeStatusAC
    | SetUsersACType
    | SetCurrentPageACType
    | setTotalCountAcType
    | setIsFetchingACType
    | setFollowingInProgressACType

// type initialStateType = typeof initialState
// const initialState = {
//     dialogsData: [
//         {id: 1, name: 'Doneil'},
//         {id: 2, name: 'Masha'},
//         {id: 3, name: 'Vitalya'},
//         {id: 4, name: 'Zis'},
//         {id: 5, name: 'Radu'},
//     ] as DialogsType[],
//     messagesData: [] as MessagesType[],
//     dialogMessage: ''
// }
export type UserType = {
    "name": string,
    "id": number,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean
    followingInProgress: boolean

}
type initialStateType = typeof initialState
const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalCount: 19,
    currentPage: 1,
    isFetching: false,

}

const usersReducer = (state: initialStateType = initialState, action: UserReducerActionType): initialStateType => {


    switch (action.type) {
        case "CHANGE-FOLLOW-STATUS":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: action.isFollowed} : el)
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage, users: [...state.users]}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.count}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOWING-STATUS":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followingInProgress: action.isFollow} : u)
            }

        default:
            return state
    }
}
type ChangeStatusAC = ReturnType<typeof ChangeStatusAC>
export const ChangeStatusAC = (userId: number, isFollowed: boolean) => {

    return {
        type: 'CHANGE-FOLLOW-STATUS',
        userId: userId,
        isFollowed
    } as const
}
type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users

    } as const
}
type SetCurrentPageACType = ReturnType<typeof SetCurrentPageAC>
export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}
type setTotalCountAcType = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        count: count
    } as const
}
type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        isFetching
    } as const
}
type setFollowingInProgressACType = ReturnType<typeof setFollowingInProgressAC>
export const setFollowingInProgressAC = (isFollow: boolean, id: number) => {
    return {
        type: 'SET-FOLLOWING-STATUS',
        isFollow, id
    } as const
}
export const SetUsersTC = (pageSize: number, currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        userApi.getUsers(pageSize, currentPage).then(res => res.data).then(data => {
            dispatch(SetCurrentPageAC(currentPage))
            dispatch(setIsFetchingAC(false))
            dispatch(SetUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))

        })
    }
}
export const setFollowStatusTC = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingInProgressAC(true, userId))
        userApi.setFollowStatus(userId)
            .then(res => {
                dispatch(ChangeStatusAC(userId,true ))
                dispatch(setFollowingInProgressAC(false, userId))
            })
    }
}
export const setUnfollowStatusTC = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingInProgressAC(true, userId))
        userApi.setUnfollowStatus(userId)
            .then(res => {
                dispatch(ChangeStatusAC(userId,false ))
                dispatch(setFollowingInProgressAC(false, userId))
            })
    }

}
export default usersReducer
