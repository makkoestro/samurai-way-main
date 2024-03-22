
import {DialogsPageType} from "../../App";

import {AddDialogMessageAC, ChangeDialogMessageValueAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import React from "react";
import {Redirect} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



export type DialogAndMessagesPropsType = {

}

// class DialogsWrapper extends React.Component {
//
//     componentDidMount() {
//         c
//     }
//     render() {
//
//        return  <Dialogs/>
//     }
// }
// export const DialogsContainer:React.FC<DialogAndMessagesPropsType> = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 const addDialogMessage = () => {
//                     store.dispatch(AddDialogMessageAC())
//                 }
//                 const ChangeDialogMessage = (text:string) => {
//                     store.dispatch(ChangeDialogMessageValueAC(text))
//                 }
//                return  <Dialogs dialogsPage={store.getState().dialogsPage} addDialogMessage={addDialogMessage} ChangeDialogMessage={ChangeDialogMessage}  />
//             }
//             }
//         </StoreContext.Consumer>
//
//
//     );
// };
type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}
const mapStateToProps = (state:mapStateToPropsType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
type mapDispatchToPropsType = {
    addDialogMessage: () => void
    ChangeDialogMessage: (text:string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addDialogMessage: () => {
            dispatch(AddDialogMessageAC())
        },
        ChangeDialogMessage: (text:string) => {
            dispatch(ChangeDialogMessageValueAC(text))
        }
    }
}
const AuthRedirectComponent = withAuthRedirect(Dialogs)

 export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

