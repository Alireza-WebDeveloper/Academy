'use client';

import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from '../icons'; // فرض کنید آیکون‌های مورد نیاز در اینجا قرار دارند
import SimpleBar from 'simplebar-react';

interface Props {
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (e: any) => {
    if (e.target.id === 'sidebar-overlay') {
      closeSidebar();
    }
  };

  return (
    <div className="relative">
      <button className="p-4 text-white" onClick={toggleSidebar}>
        <MenuIcon />
      </button>

      {isOpen && (
        <div
          id="sidebar-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleBackgroundClick}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-500 text-white p-4 transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <SimpleBar className="flex flex-col space-y-8 h-full  p-1">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeSidebar}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col mt-16">{children}</div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default Sidebar;
