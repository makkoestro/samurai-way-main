
import './index.css';
import {store} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PropsPostsType, stateType} from './App';
import {BrowserRouter} from "react-router-dom";



export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                changeTextAreaValue={store.changeTextAreaValue.bind(store)}
                changeDialogMessage={store.changeDialogMessage.bind(store)}
                addDialogMessage={store.addDialogMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)


