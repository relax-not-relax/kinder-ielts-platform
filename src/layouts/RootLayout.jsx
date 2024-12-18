/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/header/Header';
import { Card, Typography } from '@material-tailwind/react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

function RootLayout(props) {
    return (
        <div className='w-screen h-screen max-w-screen overflow-y-scroll scroll-smooth overflow-x-hidden'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;