import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject, useRef} from 'react';
import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import {PropsPostsType} from "../../../App";
import {AddPostAC, ChangeTextareaValueAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType, StoreStateType} from "../../../redux/store";
import StoreContext from "../../../store-context";
import {connect} from "react-redux";
import {Dispatch} from "redux";



// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             store => {
//                 const changeNewPostText = (text:string) => {
//                     let action = ChangeTextareaValueAC(text)
//                     store.dispatch(action)
//                 }
//                 const addPost = () => {
//                     let action = AddPostAC()
//                     store.dispatch(action)
//                 }
//
//               return  <MyPosts posts={store.getState().profilePage.postsData} changeNewPostText={changeNewPostText} postMessages={store.getState().profilePage.message} addPost={addPost} />
//             }
//         }
//         </StoreContext.Consumer>
//
//     );
// };
type mapStateToPropsType = {
    posts:PropsPostsType[]
    postMessages: string
}
let mapStateToProps = (state:StoreStateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
        postMessages:state.profilePage.message
    }
}
type mapDispatchToPropsType = {
    changeNewPostText:(text:string) => void
    addPost:()=> void

}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        changeNewPostText: (text:string) => {
            dispatch(ChangeTextareaValueAC(text))
        },
        addPost: () => {
            dispatch(AddPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;