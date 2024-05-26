import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {logoutAC, setAuthUserDataAC, setIsAuthAC} from "./auth-reducer";
import {FormPropsType} from "../components/Login/LoginForm";
import {setAppInitializedStatus} from "redux/app-reducer";
import {stopSubmit} from "redux-form";
import {AppThunkDispatch} from "redux/store";

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch) => {

        return authApi.getAuthData().then(res => {
            if (res.data.resultCode == 0) {
                dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
            }
        })
    }
}
export const setIsAuthTC = (loginData: FormPropsType) => {
    let {login, ...restProps}=loginData
    const logData = {
        email:login, ...restProps
    }
    return (dispatch: AppThunkDispatch) => {
        authApi.login(logData).then(res => {
            if (res.data.resultCode === 0) {
                let res = dispatch(getAuthUserDataTC())

                res.then(() => {
                    dispatch(setIsAuthAC(true))
                })

            } else {
                let stopForm = stopSubmit('login', {_error: res.data.messages[0]})
                dispatch(stopForm)
            }
            // if (res.data.resultCode == 0) dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
        }).then(() => {

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
