import React from 'react';
import MainContainer from './MainContainer';
import SideBar from './SideBar';

const BodyContainer = () => {
  return (
    <div className='grid grid-flow-col'>
      <SideBar />
      <MainContainer />
    </div>
  )
}

export default BodyContainer;