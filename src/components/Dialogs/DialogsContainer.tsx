
import {DialogsPageType} from "../../App";

import {AddDialogMessageAC, ChangeDialogMessageValueAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";



export type DialogAndMessagesPropsType = {

}
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
//         // <div className={classes.dialogWrapper}>
//         //     <ul className={'dialogItems'}>
//         //         {dialogs}
//         //     </ul>
//         //     <div className={'messages'}>
//         //         {messages}
//         //         <textarea  onChange={ChangeDialogMessageHandler} value={dialogsPage.dialogMessage} ref={newPostEl}></textarea>
//         //         <button onClick={addDialogMessageHandler}>Add</button>
//         //     </div>
//         // </div>
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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
