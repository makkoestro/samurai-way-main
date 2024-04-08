import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {logoutAC, setAuthUserDataAC, setIsAuthAC} from "./auth-reducer";
import {FormPropsType} from "../components/Login/LoginForm";
import {setAppInitializedStatus} from "redux/app-reducer";
import {stopSubmit} from "redux-form";
import {AppThunkDispatch} from "redux/store";

export const setAuthUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authApi.getAuthData().then(res => {
            console.log(res.data)
            if (res.data.resultCode == 0) {
                dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
            }
        }).finally(() => dispatch(setAppInitializedStatus(true)))
    }
}
export const setIsAuthTC = (loginData: FormPropsType) => {
    let {login, ...restProps}=loginData
    const logData = {
        email:login, ...restProps
    }
    return (dispatch: AppThunkDispatch) => {
        authApi.login(logData).then(res => {
            console.log(res.data)
            if (res.data.resultCode === 0) {
                dispatch(setIsAuthAC(true))
            } else {
                let stopForm = stopSubmit('login', {_error: res.data.messages[0]})
                dispatch(stopForm)
            }
            // if (res.data.resultCode == 0) dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
        }).then(() => {
            dispatch(setAuthUserDataTC())
        })
    }
}
export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        authApi.logout().then(res => {
            console.log(res.data)
            dispatch(logoutAC())
            // if (res.data.resultCode == 0) dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
        })
    }
}
