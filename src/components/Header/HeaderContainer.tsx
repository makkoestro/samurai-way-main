import React from 'react';
import Header from "./Header";
import {AppRootStateType, AppThunkDispatch, store} from "../../redux/store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authApi} from "../../api/api";
import {logOutTC, setAuthUserDataTC} from "../../redux/set-auth-user-data-t-c";
class HeaderComponent extends React.Component<HeaderContainerPropsType>{

    render() {
        return <Header {...this.props}/>
    }

};
export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state:AppRootStateType) => {
    return {
        login:state.auth.login,
        isAuth:state.auth.isAuth
    }
}
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        logout: () => dispatch(logOutTC())
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (HeaderComponent)