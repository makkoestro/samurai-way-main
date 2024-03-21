import React from 'react';
import Header from "./Header";
import {AppThunkDispatch, store} from "../../redux/store";
import {setAuthUserDataAC, setAuthUserDataTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authApi} from "../../api/api";
class HeaderComponent extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        this.props.setAuthUserData()
    }
    render() {
        return <Header {...this.props}/>
    }

};
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
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
        setAuthUserData: () => dispatch(setAuthUserDataTC())
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (HeaderComponent)