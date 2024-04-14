import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType, AppThunkDispatch, store} from "../../redux/store";
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
        console.log(this.props.authLoggedId)
        let userId: number | null = Number(this.props.match.params.userId)

        if (!userId) {
            userId = this.props.authLoggedId
            if (!userId) this.props.history.push('login')
        }
        if (userId) {
            this.props.SetUserProfile(userId)
        }
        if (userId) {
            this.props.getProfileStatus(userId)
        }
    }

    render() {

        return <Profile updStatus={this.props.updProfileStatus} profile={this.props.profile}
                        status={this.props.status}/>;
    }
}

type PathParamsType = {
    userId: string,
}

const MapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authLoggedId: state.auth.id
    }

}

const MapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        SetUserProfile: (userId: number) => dispatch(SetUserProfileTC(userId)),
        getProfileStatus: (userId: number) => dispatch(getProfileStatusTC(userId)),
        updProfileStatus: (status: string) => dispatch(UpdProfileStatusTC(status))
    }
}


export default compose<React.ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)