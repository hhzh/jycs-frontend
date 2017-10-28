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

const {Header, Content, Footer,Sider} = Layout;

export default class NavBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const settings = {
            customPaging: function(i) {
                return <a><img src={`/src/img/abstract0${i+1}.jpg`}/></a>
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

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
                <Row style={{lineHeight: '426px',textAlign: 'center', marginTop: '64px'}}>
                    <Col span={2}/>
                    <Col span={16}>
                        <div className="carousel">
                            <Carousel vertical autoplay={true} dots={true} accessibility={true} adaptiveHeight={true} arrows={true} {...settings}>
                                <div><img src="/src/img/1.jpg"/></div>
                                <div><img src="/src/img/2.jpg"/></div>
                                <div><img src="/src/img/3.jpg"/></div>
                                <div><img src="/src/img/4.jpg"/></div>
                                <div><img src="/src/img/5.jpg"/></div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Content style={{height: '426px', marginTop: '64px',textAlign: 'center'}}>
                    内容
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }

}