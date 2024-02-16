import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreStateType = ReturnType<typeof store.getState>
export type StoreType = typeof store
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

export const store = createStore(rootReducer)

