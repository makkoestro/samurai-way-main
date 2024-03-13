import {ProfilePageType, PropsPostsType} from "../App";
import {AddDialogMessageActionType, ChangeDialogMessageActionType} from "./dialogs-reducer";

export type ActionType =
    AddPostsActionType | ChangeTextareaValueActionType |
    AddDialogMessageActionType | ChangeDialogMessageActionType | SetUserProfileACType
export type AddPostsActionType = ReturnType<typeof AddPostAC>
export type ChangeTextareaValueActionType = ReturnType<typeof ChangeTextareaValueAC>
export type ProfilePageActionType = AddPostsActionType | ChangeTextareaValueActionType
export type ProfileUserType = null |  {
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
type initialStateType = {
    postsData: PropsPostsType[]
    message: string
    profile: null |  ProfileUserType

}
const initialState:ProfilePageType = {
    postsData: [],
    message: '',
    profile: null
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
export default profileReducer