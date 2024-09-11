// components/Navbar.tsx
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use this instead of useRouter

const Navbar = () => {
  const pathname = usePathname(); // This replaces the useRouter functionality

  const navItems = [
    { name: 'SERVICE INTRODUCTION', href: '/service-introduction' },
    { name: 'APPLY', href: '/apply' },
    { name: 'USER REVIEWS', href: '/user-reviews' },
    { name: 'FREQUENTLY ASKED QUESTIONS', href: '/faq' },
    { name: 'ANNOUNCEMENT', href: '/announcement' },
  ];

  return (
    <nav className="bg-white border-b shadow-md text-black">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
          <span className="font-bold text-lg">채널관</span>
        </div>

        {/* Menu Items */}
        <div className="space-x-6 text-sm">
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
        <div className="space-x-4">
          <Link href="/login">
            <span className="hover:text-gray-600">LOG IN</span>
          </Link>
          <Link href="/join">
            <span className="hover:text-gray-600">JOIN THE MEMBERSHIP</span>
          </Link>
        </div>
      </div>

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
