import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppThunkDispatch, store} from "../../redux/store";
import {getProfileStatusTC, SetUserProfileAC, SetUserProfileTC, UpdProfileStatusTC} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {profileApi} from "../../api/api";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType = ReturnType<typeof MapDispatchToProps>
type MapStateToPropsType = ReturnType<typeof MapStateToProps>
type ProfileContainerPropsTYpe = PropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<ProfileContainerPropsTYpe> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) userId = '30538'
        this.props.SetUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {

        return <Profile updStatus={this.props.updProfileStatus} profile={this.props.profile} status={this.props.status}/>;
    }
}

type PathParamsType = {
    userId: string,
}

const MapStateToProps = () => {
    return {
        profile: store.getState().profilePage.profile,
        status: store.getState().profilePage.status
    }

}

const MapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        SetUserProfile: (userId: string) => dispatch(SetUserProfileTC(userId)),
        getProfileStatus: (userId:string) => dispatch(getProfileStatusTC(userId)),
        updProfileStatus: (status:string) => dispatch(UpdProfileStatusTC(status))
    }
}


export default compose<React.ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)