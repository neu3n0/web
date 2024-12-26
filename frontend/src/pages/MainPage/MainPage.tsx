// import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss'

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainContent from "../../components/MainContent/MainContent";

const MainPage = () => {
  return (
    <div className={styles.main_page}>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
  );
};

export default MainPage;
