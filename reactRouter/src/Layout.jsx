import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom'
//this layout file is just for what will remain even if component are changing
function Layout(){
  return (
    <>
      <Header /> 
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;