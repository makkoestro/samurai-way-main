import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "redux/app-reducer";


export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreStateType = ReturnType<typeof store.getState>
export type StoreType = typeof store
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));



