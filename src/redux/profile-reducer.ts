import {ProfilePageType, PropsPostsType} from "../App";
import {AddDialogMessageActionType} from "./dialogs-reducer";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";

export type ActionType =
    AddPostsActionType |
    AddDialogMessageActionType  | SetUserProfileACType | GetProfileStatusACType
export type AddPostsActionType = ReturnType<typeof AddPostAC>

export type ProfilePageActionType = AddPostsActionType
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
    profile: null |  ProfileUserType
    status: string

}
const initialState:ProfilePageType = {
    postsData: [],
    profile: null,
    status: ''
}

const profileReducer = (state:initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: state.postsData.length + 1,
                message: action.post,
                likesCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost]}
        case "SET-USER-PROFILE":
            return {...state, profile: {...action.profile}}
        case "SET-PROFILE-STATUS":
            return {...state, status: action.status}

        default: return state
    }
}

export const AddPostAC = (post:string) => {
    return {
        type: "ADD-POST",
        post
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
export const SetUserProfileTC = (userId:number) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfileData(userId).then(res => {
            dispatch(SetUserProfileAC(res.data))
        })
    }
}
export const getProfileStatusTC = (userId:number) => {
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