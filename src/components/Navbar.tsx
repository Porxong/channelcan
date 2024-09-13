// components/Navbar.tsx
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use this instead of useRouter
import { useState } from 'react';
import { DiHtml5Connectivity } from 'react-icons/di';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname(); // This replaces the useRouter functionality
  const [dropdown, setDropdown]=useState(false)

  const navItems = [
    { name: 'SERVICE INTRODUCTION', href: '/service-introduction' },
    { name: 'APPLY', href: '/apply' },
    { name: 'USER REVIEWS', href: '/user-reviews' },
    { name: 'FREQUENTLY ASKED QUESTIONS', href: '/faq' },
    { name: 'ANNOUNCEMENT', href: '/announcement' },
  ];

  return (
    <nav className="mb-0 shadow-md text-black w-screen">
      <div className=" px-10 flex justify-between items-center shadow-md py-4 sticky top-0 bg-white w-full z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <Link  href="/">
          {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
          <span className="font-bold text-lg"><DiHtml5Connectivity className='text-4xl text-blue-400  font-bold' /></span>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="space-x-6 text-sm hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`${
                  pathname === item.href ? 'text-red-500 font-semibold' : 'hover:text-gray-600'
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        

        {/* User Actions */}
        <div className="space-x-4 flex items-center">
        <FaAngleDoubleDown 
        onClick={() => setDropdown(!dropdown)}
        className='hover:cursor-pointer hover:text-red-500 md:hidden'/>
          <Link href="/login">
            <span className="hover:text-gray-600">LOG IN</span>
          </Link>
          <Link href="/join">
            <span className="hover:text-gray-600">JOIN THE MEMBERSHIP</span>
          </Link>
        </div>
      </div>
      {dropdown && 
      <div className="flex flex-col w-full bg-white absolute text-sm p-2 shadow-md ">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className='hover:bg-slate-200 px-4 p-2 rounded-md'>
              <span 
              onClick={()=> setDropdown(false)}
                className={` ${
                  pathname === item.href ? 'text-red-500 font-semibold' : 'hover:text-gray-600'
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        }

      {/* Announcement Bar */}
      <div className="bg-gray-800 text-center py-2 text-sm text-white">
        <span className="text-red-500">7 days 13 hours 50 minutes 3 seconds left</span>
        <span className="ml-2">(~09/19) Chuseok +10% Bonus Coupon Issued!</span>
        <button className="ml-4 border text-white px-3 py-1 rounded hover:bg-red-500">
          APPLY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
