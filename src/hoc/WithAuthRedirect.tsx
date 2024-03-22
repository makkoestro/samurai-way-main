import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Redirect} from "react-router-dom";
type mapDispatchToPropsType= {
    isAuth:boolean
}
const mapDispatchToProps  = (state:AppRootStateType):mapDispatchToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect <T>(Component:ComponentType<T>) {

    const RedirectComponent = (props:mapDispatchToPropsType) => {
        console.log(props)
        let {isAuth, ...restProps}=props
        return !isAuth
            ? <Redirect to={'/login'}/>
            :  <Component {...restProps as T}/>
    }
    let connectedRedirectComponent = connect(mapDispatchToProps)(RedirectComponent)
    return connectedRedirectComponent
}

