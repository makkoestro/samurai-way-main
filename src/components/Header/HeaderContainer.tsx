import React from 'react';
import Header from "./Header";
import {AppThunkDispatch, store} from "../../redux/store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authApi} from "../../api/api";
import {logOutTC, setAuthUserDataTC} from "../../redux/set-auth-user-data-t-c";
class HeaderComponent extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        this.props.setAuthUserData()
    }
    render() {
        return <Header {...this.props}/>
    }

};
export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = () => {
    return {
        login:store.getState().auth.login,
        isAuth:store.getState().auth.isAuth
    }
}
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        setAuthUserData: () => dispatch(setAuthUserDataTC()),
        logout: () => dispatch(logOutTC())
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (HeaderComponent)