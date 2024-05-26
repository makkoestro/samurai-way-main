import React from 'react';
import LoginReduxForm, {FormPropsType} from "./LoginForm";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AddDialogMessageAC} from "../../redux/dialogs-reducer";
import {AppThunkDispatch, StoreStateType} from "../../redux/store";
import {setIsAuthTC} from "../../redux/set-auth-user-data-t-c";
import {log} from "util";
import {Redirect} from "react-router-dom";
import s from '../Login/Login.module.css'




type LoginPropsType = mapStateToPropsType & {
    login: (data: LoginFormType) => void
}
const Login = (props: LoginPropsType) => {
    const submitForm = (formData:FormPropsType) => {
        console.log(formData)
        props.login(formData)
    }
    if (props.isAuth) return <Redirect to={'profile'}/>
    return (
        <div className={s.login}>
            <h1 >LOGIN</h1>
            <LoginReduxForm onSubmit={submitForm}/>
        </div>

    );
};


type LoginFormType = {
    login:string
    password:string
    rememberMe:boolean
}
type mapDispatchToPropsType = {
    login: (data: LoginFormType) => void
}
const mapDispatchToProps = (dispatch: AppThunkDispatch):mapDispatchToPropsType => {
    return {
        login:(loginData:LoginFormType ) => dispatch(setIsAuthTC(loginData))
    }
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: StoreStateType) => {
    return {
        isAuth: state.auth.isAuth

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)


