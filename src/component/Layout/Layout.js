import { Col, Pagination, Row } from "antd";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


export default function Layout({ children }) {
  
  return (
    <>
      <Header style={{ position:'fixed', zIndex : 1, width: '100%' }}></Header>
      {children}
      
      <Footer></Footer>
    </>
    
  );
}
