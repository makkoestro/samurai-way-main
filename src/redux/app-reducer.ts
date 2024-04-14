import {AppThunkDispatch} from "redux/store";
import {getAuthUserDataTC} from "redux/set-auth-user-data-t-c";

type AppReducerActionType = setAuthUserDataACType
// const AuthReducerActionType =
type initialStateType = typeof initialState
const initialState = {
    isInitialized:false
}

export const appReducer = (state: initialStateType = initialState, action: AppReducerActionType): initialStateType => {
    switch (action.type) {
        case "SET-APP-INIT-STATUS":

            return {...state, isInitialized: true}
        default:
            return state
    }
}
type setAuthUserDataACType = ReturnType<typeof setAppInitializedStatus>
export const setAppInitializedStatus = () => {
    return {
        type: 'SET-APP-INIT-STATUS'
    } as const
}
export const initializeApp = () => (dispatch:AppThunkDispatch) => {

    dispatch(getAuthUserDataTC()).then(() => {
        dispatch(setAppInitializedStatus())
    })

}