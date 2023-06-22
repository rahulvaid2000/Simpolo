import React from "react";
import {Link} from "react-router-dom";
import {Layout, Menu, Row, Col, Dropdown, } from "antd";
import {DownOutlined, CaretDownOutlined} from "@ant-design/icons";

import Simpolo from "../../assets/Logo.png";
import MissionAndVision from './../AboutUs/MissionAndVision';

const {Header} = Layout;
const {SubMenu} = Menu;

const HeaderMenu = () => {
    const aboutUs = (
        <Menu>
            <Menu.Item key="1" className="header-submenu">
            <Link to= "director-message">     Director's Message</Link>   
            </Menu.Item>
            <Menu.Item key="2" className="header-submenu">
            <Link to= "company-profile">   Company Profile</Link>
            </Menu.Item>
            <Menu.Item key="3" className="header-submenu">
            <Link to="mission-vision">MissionAndVision</Link>
            </Menu.Item>
            <Menu.Item key="4" className="header-submenu">
            <Link to="r-d"> R & D </Link>
            </Menu.Item>
        </Menu>
    );

    const products = (
        <Menu>
            <Menu.Item key="5" className="header-submenu">
            <Link to="silica-sand">Silica Sand</Link>
            </Menu.Item>
            <Menu.Item key="6" className="header-submenu">
            <Link to="ballClay">  Ball Clay</Link>
            </Menu.Item>
            <Menu.Item key="7" className="header-submenu">
                Bentonite
            </Menu.Item>
            <Menu.Item key="8" className="header-submenu">
                Kaolin
            </Menu.Item>
        </Menu>
    )
 
    const contactUs = (
        <Menu>
            <Menu.Item key="9" className="header-submenu">
                Enquiry
            </Menu.Item>
            <Menu.Item key="10" className="header-submenu">
                Feedback
            </Menu.Item>
            <Menu.Item key="11" className="header-submenu">
                Contact Details
            </Menu.Item>
        </Menu>
    )

    return (
        <Row gutter={[16,16]} className="headerlayout">
            <Col span={24}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    // style={{
                    //     // lineHeight: "50px",
                    //     // display:"inline-block",
                    //     lineSpacing: "35px",
                    // }}
                    
                >
                    <Menu.Item>
                        <Link to="/">
                            <img className="header-logo" src={Simpolo} alt="Logo" />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="aboutUs" style={{float: "right"}}>
                        <Dropdown overlay={aboutUs}>
                            <a className="ant-dropdown-link">
                                About Us <CaretDownOutlined />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="products" style={{float: "right"}}>
                        <Dropdown overlay={products}>
                            <a className="ant-dropdown-link">
                                Products <DownOutlined />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="applications">
                        <Link to="/applications">Applications</Link>
                    </Menu.Item>
                    <Menu.Item key="downloads">
                        <Link to="/downloads">Downloads</Link>
                    </Menu.Item>
                    <Menu.Item key="contactUs" style={{float: "right"}}>
                        <Dropdown overlay={contactUs}>
                            <a className="ant-dropdown-link">
                                Contact Us <DownOutlined />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};

export default HeaderMenu;
