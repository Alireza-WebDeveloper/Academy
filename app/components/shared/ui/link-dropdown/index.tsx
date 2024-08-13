'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownIcon } from '../icons';
import LinkContainer from '../link-container';

const DropDownItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // تعریف آیتم‌های Dropdown به عنوان یک آرایه
  const dropdownItems = [
    { id: 1, label: 'گزینه اول', link: '/option1' },
    { id: 2, label: 'گزینه دوم', link: '/option2' },
    { id: 3, label: 'گزینه سوم', link: '/option3' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-white">لورم ایپسوم</span>
        <ArrowDownIcon />
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-md rounded-lg min-w-[20vw]">
          <ul className="py-2">
            {dropdownItems.map((item) => (
              <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                <LinkContainer href={item.link} className="text-black">
                  {item.label}
                </LinkContainer>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownItem;
