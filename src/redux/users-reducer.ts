import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../App";


type UserReducerActionType = ChangeStatusAC
    | SetUsersACType
    | SetCurrentPageACType
    | setTotalCountAcType
    | setIsFetchingACType

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
    // id:number,
    // name: string,
    // description:string
    // photos: {
    //     small: null,
    //     large: null
    // },
    // // photoUrl: string
    // location: {
    //     country: string
    //     city: string
    // }
    // followed:boolean
}
type initialStateType = typeof initialState
const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalCount: 19,
    currentPage: 1,
    isFetching: false
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
        default:
            return state
    }
}
type ChangeStatusAC = ReturnType<typeof ChangeStatusAC>
export const ChangeStatusAC = (userId: number, isFollowed:boolean) => {

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
export default usersReducer
