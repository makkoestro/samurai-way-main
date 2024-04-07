import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreStateType = ReturnType<typeof store.getState>
export type StoreType = typeof store
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

