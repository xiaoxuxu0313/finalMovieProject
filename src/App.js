import React, { useState } from 'react';
import './style.css';
import Header from './component/Header';
import { TABS } from './constants';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import MovieCardDetails from './component/MovieCardDetails';
import Login from './component/Login';

export default function App() {
  const [currentTab, setCurrentTab] = useState(TABS.HOME);

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div>
      <Header activeTab={currentTab} onTabClick={handleTabClick} />
      <Routes>
        <Route path="/" element={<Home currentTab={currentTab} />} />
        <Route path="/HOME" element={<Home currentTab={currentTab} />} />
        {/* <Route path={TABS.FAVORITE} element={<FAVORITE />} />
        <Route path={TABS.RATED} element={<RATED />} /> */}
        <Route path="/movies/:id" element={<MovieCardDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
