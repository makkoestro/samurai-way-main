import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {setAuthUserDataAC} from "./auth-reducer";

export const setAuthUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authApi.getAuthData().then(res => {
            console.log(res.data)
            if (res.data.resultCode == 0) dispatch(setAuthUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email))
        })
    }
}