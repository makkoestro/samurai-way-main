
import './index.css';
import {state, subscriber} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PropsPostsType, stateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addDialogMessage, addPost, changeDialogMessage, changeTextAreaValue} from "./redux/state";


export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeTextAreaValue={changeTextAreaValue}
                changeDialogMessage={changeDialogMessage}
                addDialogMessage={addDialogMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)

subscriber(rerenderEntireTree)


