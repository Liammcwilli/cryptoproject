import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { NavBar, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage />}>
                        </Route>
                        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}> 
                        </Route>
                        <Route exact path="/crypto/:coinId" element={<CryptoDetails />}>
                        </Route>
                        <Route exact path="/news" element={<News />}>
                        </Route>
                    </Routes>
                </div>
            </Layout>
            <div className="footer" level={5}>
            <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
                Cryptoverse <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                <Link to="/news">News</Link>
            </Space>
            </div>
    </div>
    </div>
  )
}

export default App
