import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppThunkDispatch, store} from "../../redux/store";
import {SetUserProfileAC, SetUserProfileTC} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {profileApi} from "../../api/api";
type ProfileContainerPropsTYpe = PropsType & RouteComponentProps<PathParamsType>


 class ProfileContainer extends React.Component<ProfileContainerPropsTYpe> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.SetUserProfile(userId)
    }
    render() {
        return <Profile profile={this.props.profile}/>;
    }
}
type PathParamsType = {
    userId: string,
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = ReturnType<typeof MapStateToProps>
const MapStateToProps = () => {
    return {
        profile: store.getState().profilePage.profile
    }

}
type MapDispatchToPropsType = ReturnType<typeof MapDispatchToProps>
const MapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        SetUserProfile:(userId:string) => dispatch(SetUserProfileTC(userId))
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default  connect(MapStateToProps, MapDispatchToProps)(WithUrlDataContainerComponent)