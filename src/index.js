import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import myReducer from './Reducer/index'
// import PageHome from './Page/PageHome/PageHome';
// import PageBlogs from './Page/Blogs/PageBlogs';
import Direction from './Page/Direction'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToTopPage from './common/ToTopPage';
const store=createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    
    <Provider store={store}>
        <ToTopPage/>
        <ToastContainer autoClose={2000}/>
         <Direction /> 
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
