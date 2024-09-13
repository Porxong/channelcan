import Link from 'next/link';
import React from 'react';
import { DiHtml5Connectivity } from 'react-icons/di';
import { FaFacebookMessenger, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';
import { SiWechat } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 p-4">
      <div className="gap-5 flex items-center  flex-wrap md:flex-row">
        {/* Left side: Company Information */}
        <div className='flex justify-center w-full md:w-auto '><span><DiHtml5Connectivity className='text-9xl text-blue-400  font-bold' /></span></div>
        <div className="text-sm md:flex-1">
          <p className='mb-5'>
            S&G Company | 799-86-02247 | CEO: Lee In-geon, Lee In-seong | 
            <Link href="mailto:help@sg.kr" className="text-gray-200 hover:text-white hover:font-bold"> help@sg.kr </Link>219, Gasan Digital 1-ro, Geumcheon-gu, Seoul, 804 | Weekday consultations from 9:00 a.m. to 6:00 p.m.Shinhan Bank 140-013-364442 S&G Company | KakaoTalk Channel: 
            <Link href="#" className="text-gray-200 hover:text-white hover:font-bold"> @ChannelKhan </Link>
          </p>
        </div>

        {/* Right side: Links and Icons */}
        <div className="flex flex-1 flex-col text-sm text-nowrap px-4">
          <div className=" flex flex-wrap gap-x-5">
            <Link href="#" className="hover:text-white">Service Introduction</Link>
            <Link href="#" className="hover:text-white">Apply</Link>
            <Link href="#" className="hover:text-white">Reviews</Link>
            <Link href="#" className="hover:text-white">FAQ</Link>
            <Link href="#" className="hover:text-white">Notice</Link>
            <Link href="#" className="hover:text-white">Login</Link>
            <Link href="#" className="hover:text-white">Sign Up</Link>
          </div>

          <div className="mt-2 flex flex-col items-start gap-1">
            <Link href="#" className="hover:text-white flex items-center"><MdNavigateNext />Terms of Use and Processing Policy</Link>
            <Link href="#" className="hover:text-white flex items-center"><MdNavigateNext />Customer Service Center</Link>
            <Link href="#" className="hover:text-white flex items-center"><MdNavigateNext />Coalition</Link>
          <div className="mt-4 space-x-4 flex text-2xl">
            {/* Add social media icons here */}
            <Link href="#" className="hover:text-white"><FaFacebookSquare /></Link>
            <Link href="#" className="hover:text-white"> <FaFacebookMessenger /></Link>
            <Link href="#" className="hover:text-white"> <FaWhatsappSquare /></Link>
            <Link href="#" className="hover:text-white"> <SiWechat /></Link>
          </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
