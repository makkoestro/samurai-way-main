import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../App";
import {Dispatch} from "redux";
import { userApi} from "../api/api";
import {updObjInArray} from "utils/validators/object-helpers";


type UserReducerActionType = ChangeStatusAC
    | SetUsersACType
    | SetPageACType
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
    Page: 1,
    isFetching: false,
    portionSize:10
}

const usersReducer = (state: initialStateType = initialState, action: UserReducerActionType): initialStateType => {

    switch (action.type) {
        case "CHANGE-FOLLOW-STATUS":
            return {
                ...state,
                users: updObjInArray<UserType, Partial<UserType> >(state.users, 'id', action.userId,{followed: action.isFollowed})
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, Page: action.Page, users: [...state.users]}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.count}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOWING-STATUS":
            return {
                ...state,
                users:updObjInArray<UserType, Partial<UserType> >(state.users, 'id', action.id,{followingInProgress: action.isFollow})
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
type SetPageACType = ReturnType<typeof SetPageAC>
export const SetPageAC = (Page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        Page: Page
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
export const SetUsersTC = (pageSize: number, Page: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true))
        userApi.getUsers(pageSize, Page).then(res => res.data).then(data => {
            console.log(data)
            dispatch(SetPageAC(Page))
            dispatch(setIsFetchingAC(false))
            dispatch(SetUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))

        })
    }
}
export const followUnfollow = async (userId:number,dispatch: Dispatch, apiMethod:(userId: number) => ReturnType<typeof userApi.setFollowStatus | typeof userApi.setUnfollowStatus>,isFollowed:boolean) => {
    dispatch(setFollowingInProgressAC(true, userId))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(ChangeStatusAC(userId,isFollowed ))
    }
    dispatch(setFollowingInProgressAC(false, userId))
}
export const setFollowStatusTC = (userId:number) => {
    return (dispatch: Dispatch) => {
        followUnfollow(userId, dispatch, userApi.setFollowStatus, true)
    }
}
export const setUnfollowStatusTC = (userId:number) => {
    return (dispatch: Dispatch) => {
        followUnfollow(userId, dispatch, userApi.setUnfollowStatus, false)
    }

}
export default usersReducer
