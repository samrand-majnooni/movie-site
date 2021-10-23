import React from "react";
import {  Menu } from 'antd';
import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import { Link } from "react-router-dom";
export default function Header() {
  return (

  
    <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">about</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/contact">contact us</Link></Menu.Item>
      </Menu>
        )
  
}
