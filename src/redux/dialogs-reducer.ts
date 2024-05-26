import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../App";
import {ActionType} from "./profile-reducer";

export type DialogsActionType =  AddDialogMessageActionType


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
        {id: 3, name: 'Volodya'},
        {id: 4, name: 'Serii'},
    ] as DialogsType[],
    messagesData: [] as MessagesType[],
}

const dialogReducer = (state:initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case "ADD-DIALOG-MESSAGE":
            let newDialogMessage = {
                id: 1, message: action.message
            }
            return {...state, messagesData: [...state.messagesData, newDialogMessage]}
        default:
            return state
    }
}

export const AddDialogMessageAC = (message:string) => {
    return {
        type: 'ADD-DIALOG-MESSAGE',
        message
    } as const
}
export default dialogReducer
