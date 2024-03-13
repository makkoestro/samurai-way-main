import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreStateType = ReturnType<typeof store.getState>
export type StoreType = typeof store
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)

