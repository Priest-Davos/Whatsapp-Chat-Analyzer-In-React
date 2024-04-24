// Home.tsx
import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
 
  return (
    <>
      <Navbar />

      <Sidebar>
      <Outlet/>
      </Sidebar>
    </>
  );
};

export default Home;
