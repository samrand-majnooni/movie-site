import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Pages from "./pages/Pages";
import 'swiper/swiper-bundle.min.css'
import 'antd/dist/antd.dark.css';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Pages className="site-layout" style={{ padding: '0 50px', marginTop: 64 }} />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
