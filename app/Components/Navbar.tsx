'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '@/app/assets/logoone.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#fef8ee] relative">
      <div className="flex items-center">
        <Image src={Logo} alt="Company Logo" className="w-[140px] h-auto" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#411a09] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen
            ? 'flex flex-col absolute top-full right-0 w-full bg-[#fef8ee] p-8 gap-6 z-10'
            : 'hidden'
        } md:flex md:static md:flex-row md:gap-8 md:items-center`}
      >
        <Link href="/" className="text-[1.6rem] text-[#411a09] hover:text-[#f28211]" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/aboutpage" className="text-[1.6rem] text-[#411a09] hover:text-[#f28211]" onClick={closeMenu}>
          About Us
        </Link>
        <Link href="/" className="text-[1.6rem] text-[#411a09] hover:text-[#f28211]" onClick={closeMenu}>
          Features
        </Link>
        <Link href="/" className="text-[1.6rem] text-[#411a09] hover:text-[#f28211]" onClick={closeMenu}>
          Testimonials
        </Link>
        <Link href="/" className="text-[1.6rem] text-[#411a09] hover:text-[#f28211]" onClick={closeMenu}>
          FAQ
        </Link>
        <Link href="/" className="text-[1.6rem] text-[#411a09] hover:text-[#f28211]" onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
