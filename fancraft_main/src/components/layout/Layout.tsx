import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';
import Footer from '../common/Footer';
import HamburgerMenu from './HamburgerMenu';

const Layout: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || '';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 모바일 여부 체크
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleHamburgerClick = () => {
    setSidebarOpen((prev) => !prev);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="layout">
      {isMobile && (
        <HamburgerMenu onClick={handleHamburgerClick} isOpen={sidebarOpen} />
      )}
      <div className="sidebar">
        <Sidebar currentPath={currentPath} isOpen={sidebarOpen} onClose={handleSidebarClose} />
      </div>
      <div className="content_area">
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 