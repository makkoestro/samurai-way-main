import {stateType} from "../App";
import profileReducer, {
    AddPostsActionType,
    ChangeTextareaValueActionType,
    ProfilePageActionType
} from "./profile-reducer";
import dialogReducer, {AddDialogMessageActionType, ChangeDialogMessageActionType, DialogsActionType} from "./dialogs-reducer";

type StoreType = {
    _state: stateType,
    getState: () => stateType
    _callSubscriber: (state: stateType) => void,
    // subscribe: (observer: (state: stateType) => void) => void
    dispatch: (action: ActionType) => void
}
export type ActionType =
    AddPostsActionType | ChangeTextareaValueActionType |
AddDialogMessageActionType | ChangeDialogMessageActionType




export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello there!', likesCount: 10},
                {id: 2, message: 'How are u?', likesCount: 4},
                {id: 3, message: 'Hello World!', likesCount: 8}
            ],
            message: ''
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Lets go out!'}
            ],
            dialogsData: [
                {id: 1, name: 'Doneil'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Vitalya'},
                {id: 4, name: 'Zis'},
                {id: 5, name: 'Radu'},
            ],
            dialogMessage: ''
        }
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('changed')
    },
    // subscribe(observer: (state: stateType) => void) {
    //     this._callSubscriber = observer
    // },
    dispatch(action: ActionType) {
        console.log(action)
        this._state.profilePage = profileReducer(store._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(store._state.dialogsPage, action)
        // this._callSubscriber(this._state)
    }
}






