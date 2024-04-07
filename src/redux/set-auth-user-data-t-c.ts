import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {logoutAC, setAuthUserDataAC, setIsAuthAC} from "./auth-reducer";
import {FormPropsType} from "../components/Login/LoginForm";

export const setAuthUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authApi.getAuthData().then(res => {
            console.log(res.data)
            if (res.data.resultCode == 0) dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
        })
    }
}
export const setIsAuthTC = (loginData: FormPropsType) => {
    let {login, ...restProps}=loginData
    const logData = {
        email:login, ...restProps
    }
    return (dispatch: Dispatch) => {
        authApi.login(logData).then(res => {
            console.log(res.data)
            dispatch(setIsAuthAC(true))
            // if (res.data.resultCode == 0) dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
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
