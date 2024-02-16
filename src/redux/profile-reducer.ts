import {ProfilePageType, PropsPostsType} from "../App";
import {ActionType} from "./state";


export type AddPostsActionType = ReturnType<typeof AddPostAC>
export type ChangeTextareaValueActionType = ReturnType<typeof ChangeTextareaValueAC>
export type ProfilePageActionType = AddPostsActionType | ChangeTextareaValueActionType
type initialStateType = {
    postsData: PropsPostsType[]
    message: string
}
const initialState:ProfilePageType = {
    postsData: [],
    message: ''
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
export default profileReducer