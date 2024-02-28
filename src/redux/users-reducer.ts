import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../App";
import {ActionType} from "./state";
type UserReducerActionType = ChangeStatusAC | SetUsersACType

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
    users:[ ] as UserType[]
}

const usersReducer = (state:initialStateType = initialState, action: UserReducerActionType):initialStateType => {

    switch (action.type) {
        case "CHANGE-FOLLOW-STATUS":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        default:
            return state
    }
}
type ChangeStatusAC = ReturnType<typeof ChangeStatusAC>
export const ChangeStatusAC = (userId: number) => {

    return {
        type: 'CHANGE-FOLLOW-STATUS',
       userId: userId
    } as const
}
type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users:users

    } as const
}
export default usersReducer
