import {ProfilePageType, PropsPostsType} from "../App";
import {AddDialogMessageActionType, ChangeDialogMessageActionType} from "./dialogs-reducer";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";

export type ActionType =
    AddPostsActionType | ChangeTextareaValueActionType |
    AddDialogMessageActionType | ChangeDialogMessageActionType | SetUserProfileACType | GetProfileStatusACType
export type AddPostsActionType = ReturnType<typeof AddPostAC>
export type ChangeTextareaValueActionType = ReturnType<typeof ChangeTextareaValueAC>
export type ProfilePageActionType = AddPostsActionType | ChangeTextareaValueActionType
export type ProfileUserResponseType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null | string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null | string,
        "github": string,
        "mainLink": null | string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}
export type ProfileUserType = null |  ProfileUserResponseType
type initialStateType = {
    postsData: PropsPostsType[]
    message: string
    profile: null |  ProfileUserType
    status: string

}
const initialState:ProfilePageType = {
    postsData: [],
    message: '',
    profile: null,
    status: ''
}

const profileReducer = (state:initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: state.postsData.length + 1,
                message: state.message,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost], message: ''}
        case "CHANGE-TEXTAREA-VALUE":
            // state.message = action.message
            return {...state, message: action.message}
        case "SET-USER-PROFILE":
            return {...state, profile: {...action.profile}}
        case "SET-PROFILE-STATUS":
            return {...state, status: action.status}

        default: return state
    }
}

export const AddPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const ChangeTextareaValueAC = (message: string) => {
    return {
        type: "CHANGE-TEXTAREA-VALUE",
        message: message
    } as const
}
export type SetUserProfileACType = ReturnType<typeof SetUserProfileAC>
export const SetUserProfileAC = (profile:any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export type GetProfileStatusACType = ReturnType<typeof GetProfileStatusAC>
export const GetProfileStatusAC = (status:string) => {
    return {
        type: 'SET-PROFILE-STATUS',
        status
    } as const
}
export const UpdProfileStatusAC = (status:string) => {
    return {
        type: 'SET-PROFILE-STATUS',
        status
    } as const
}
export const SetUserProfileTC = (userId:string) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfileData(userId).then(res => {
            dispatch(SetUserProfileAC(res.data))
        })
    }
}
export const getProfileStatusTC = (userId:string) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId).then(res => {
            console.log(res.data)
            dispatch(GetProfileStatusAC(res.data))
        })
    }
}
export const UpdProfileStatusTC = (status:string) => {
    return (dispatch: Dispatch) => {
        profileApi.updStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(GetProfileStatusAC(status))
            }
            console.log(res.data)

        })
    }
}

export default profileReducer