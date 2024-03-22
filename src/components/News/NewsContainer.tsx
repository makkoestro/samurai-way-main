import React from "react";
import News from "./News";
import {connect} from "react-redux";
import {UsersAPIComponent} from "../Users/UsersContainer";
import {DialogsPageType} from "../../App";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type NewsAuthorizedPropsType= ReturnType<typeof mapStateToProps>

class NewsContainer extends React.Component<NewsAuthorizedPropsType> {
    render() {
        return  <News/>;
    }
}



const mapStateToProps = (state:StoreStateType) => {
    return {
        // isAuth: state.auth.isAuth
    }
}
let AuthDirectComponent = withAuthRedirect(NewsContainer)

export default connect(mapStateToProps)(AuthDirectComponent)
