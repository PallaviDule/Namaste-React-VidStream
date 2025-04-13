import React from 'react';
import MainContainer from './MainContainer';
import SideBar from './SideBar';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const BodyContainer = () => {
  return (
    <div className='grid grid-flow-col'>
      <SideBar />
      <Outlet />
      {/* <MainContainer />
      <WatchPage /> */}
    </div>
  )
}

export default BodyContainer;