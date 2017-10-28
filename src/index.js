import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

export default class Index extends React.Component {
    render() {
        return (
            <Home/>
        );
    };
}

ReactDOM.render(<Index/>, document.getElementById('root'));