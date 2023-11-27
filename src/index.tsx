import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const postsData = [
    {id: 1, message: 'Hello there!', likesCount: 10},
    {id: 2, message: 'How are u?', likesCount: 4},
    {id: 3, message: 'Hello World!', likesCount: 8}
]

const dialogsData = [
    {id: 1, name: 'Doneil'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Vitalya'},
    {id: 4, name: 'Zis'},
    {id: 5, name: 'Radu'},
]
const messagesData = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Lets go out!'}
]
ReactDOM.render(
    <BrowserRouter>
    <App posts={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </BrowserRouter>,
  document.getElementById('root')
);