import {stateType} from "../App";

export const store = {
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
    rerenderEntireTree (state: stateType) {
        console.log('lol')
    },
    addPost ()  {

        let newPost =  {id: this._state.profilePage.postsData.length + 1 , message: store._state.profilePage.message, likesCount: 0}
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.message = ''
        this.rerenderEntireTree(this._state)
    },
    changeTextAreaValue (message:string)  {
        this._state.profilePage.message = message
        this.rerenderEntireTree(this._state)
    },
    changeDialogMessage (message:string)  {
        this._state.dialogsPage.dialogMessage = message
        this.rerenderEntireTree(this._state)
    },
    addDialogMessage ()  {
        let newDialogMessage = {
            id: 1, message: this._state.dialogsPage.dialogMessage
        }
        this._state.dialogsPage.messagesData.push(newDialogMessage)
        this._state.dialogsPage.dialogMessage = ''
        this.rerenderEntireTree(this._state)
    },
    subscriber (observer:(state:stateType) => void) {
        this.rerenderEntireTree = observer
    }
}








