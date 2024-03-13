import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../App";
import {ActionType} from "./profile-reducer";

export type DialogsActionType = ChangeDialogMessageActionType | AddDialogMessageActionType
export type ChangeDialogMessageActionType = ReturnType<typeof ChangeDialogMessageValueAC>

export type AddDialogMessageActionType = ReturnType<typeof AddDialogMessageAC>

// type initialStateType = {
//     messagesData: MessagesPropsType[]
//     dialogsData: DialogsPropsType[]
//     dialogMessage: string
// }
type DialogsType = {
    id:number
    name:string
}
type MessagesType = {
    id:number
    message:string
}
type initialStateType = typeof initialState
const initialState = {
    dialogsData: [
        {id: 1, name: 'Doneil'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Vitalya'},
        {id: 4, name: 'Zis'},
        {id: 5, name: 'Radu'},
    ] as DialogsType[],
    messagesData: [] as MessagesType[],
    dialogMessage: ''
}

const dialogReducer = (state:initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case "CHANGE-DIALOG-MESSAGE-VALUE":
            return {...state, dialogMessage: action.message}
        case "ADD-DIALOG-MESSAGE":
            let newDialogMessage = {
                id: 1, message: state.dialogMessage
            }
            return {...state, messagesData: [...state.messagesData, newDialogMessage], dialogMessage: ''}
        default:
            return state
    }
}
export const ChangeDialogMessageValueAC = (message: string) => {

    return {
        type: 'CHANGE-DIALOG-MESSAGE-VALUE',
        message: message
    } as const
}
export const AddDialogMessageAC = () => {
    return {
        type: 'ADD-DIALOG-MESSAGE'
    } as const
}
export default dialogReducer
