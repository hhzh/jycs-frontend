import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import asyncComponent from "./AsyncComponent";
import HomePage from './components/HomePage';

// const Home = asyncComponent(() => import("./components/Home"));

export default class Index extends React.Component {
    render() {
        return (
            <HomePage/>
        );
    };
}

ReactDOM.render(<Index/>, document.getElementById('root'));