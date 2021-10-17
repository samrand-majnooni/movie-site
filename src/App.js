import { useEffect,useState } from 'react' 
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Layout from './Layout/Layout';
import React from 'react';



function App() {
  
  return (
    <div>

    <Header/>

      <Layout/>
      
     <Footer/>
    </div>
    
  );
}

export default App;
