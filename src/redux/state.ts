import {stateType} from "../App";


export const state = {
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
}

let rerenderEntireTree: (state: stateType) => void = () => {
    console.log('lol')
}
export const addPost = () => {
    let newPost =  {id: state.profilePage.postsData.length + 1 , message: state.profilePage.message, likesCount: 0}
    state.profilePage.postsData.push(newPost)
    state.profilePage.message = ''
    rerenderEntireTree(state)
}

export const changeTextAreaValue = (message:string) => {
    state.profilePage.message = message
    rerenderEntireTree(state)
}
export const changeDialogMessage = (message:string) => {
    state.dialogsPage.dialogMessage = message
    rerenderEntireTree(state)
}
export const addDialogMessage = () => {
    let newDialogMessage = {
    id: 1, message: state.dialogsPage.dialogMessage
    }
    state.dialogsPage.messagesData.push(newDialogMessage)
    state.dialogsPage.dialogMessage = ''
    rerenderEntireTree(state)
}
export const subscriber = (observer:(state:stateType) => void) => {
     rerenderEntireTree = observer
}