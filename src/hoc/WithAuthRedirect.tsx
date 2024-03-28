import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Redirect} from "react-router-dom";
type mapStateToPropsType= {
    isAuth:boolean
}
const mapStateToProps  = (state:AppRootStateType):mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect <T>(Component:ComponentType<T>) {

    const RedirectComponent = (props:mapStateToPropsType) => {
        let {isAuth, ...restProps}=props
        return !isAuth
            ? <Redirect to={'/login'}/>
            :  <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}

