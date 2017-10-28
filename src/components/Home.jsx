import React from 'react';
import {Menu, Icon, Row, Col, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import NavBar from './NavBar';
import CarouselBar from './CarouselBar';
import ContentBar from './ContentBar';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar/>
                <CarouselBar/>
                <ContentBar/>
            </div>
        )
    }
}