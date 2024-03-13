import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {store} from "../../redux/store";
import {SetUserProfileAC} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import { useParams } from 'react-router-dom';
type ProfileContainerPropsTYpe = PropsType & RouteComponentProps<PathParamsType>


 class ProfileContainer extends React.Component<ProfileContainerPropsTYpe> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        console.log(userId)

        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
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
type MapDispatchToPropsType = typeof MapDispatchToProps
const MapDispatchToProps = {
    setUserProfile: SetUserProfileAC
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default  connect(MapStateToProps, MapDispatchToProps)(WithUrlDataContainerComponent)