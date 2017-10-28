import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Row,
    Col,
    Tabs,
    message,
    Form,
    Input,
    Button,
    Checkbox,
    Modal,
    Breadcrumb,
    Carousel
} from 'antd';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const {Header, Content, Footer} = Layout;

export default class NavBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Layout>
                <Header style={{position: 'fixed', width: '100%'}}>
                    <Row>
                        <Col span={2}/>
                        <Col span={4}>
                            九月初三
                        </Col>
                        <Col span={16}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{lineHeight: '64px'}}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Row style={{height: '426px'}}>
                    <Col span={2}/>
                    <Col span={20}>
                        <Content style={{height: '426px',marginTop:'64px'}}>
                            <Carousel vertical autoplay={true}>
                                <div><img src="/src/img/1.jpg"/>1</div>
                                <div><img src="/src/img/2.jpg"/>2</div>
                                <div><img src="/src/img/3.jpg"/>3</div>
                                <div><img src="/src/img/4.jpg"/>4</div>
                                <div><img src="/src/img/5.jpg"/>5</div>
                            </Carousel>
                        </Content>
                    </Col>
                </Row>

                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }

}