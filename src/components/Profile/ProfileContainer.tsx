import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppThunkDispatch, store} from "../../redux/store";
import {SetUserProfileAC, SetUserProfileTC} from "../../redux/profile-reducer";
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

const MapStateToProps = () => {
    return {
        profile: store.getState().profilePage.profile,
    }

}

const MapDispatchToProps = (dispatch: AppThunkDispatch) => {
    return {
        SetUserProfile: (userId: string) => dispatch(SetUserProfileTC(userId))
    }
}


export default compose<React.ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)