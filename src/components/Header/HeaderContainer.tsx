import React from 'react';
import classes from './Header.module.css'
import Header from "./Header";
import axios from "axios";
import {store} from "../../redux/store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
class HeaderComponent extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(res => {
            console.log(res.data)
            if (res.data.resultCode == 0) this.props.setAuthUserData(res.data.data.id, res.data.data.login, res.data.data.email)

        })
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
type mapDispatchToPropsType = typeof mapDispatchToProps
const mapDispatchToProps = {
    setAuthUserData: setAuthUserDataAC
}
export default connect (mapStateToProps, mapDispatchToProps) (HeaderComponent)