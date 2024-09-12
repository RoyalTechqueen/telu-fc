"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-colors duration-300 px-8 ${
        isScrolled ? "bg-yellow-50" : "bg-transparent"
      }`}
    >
      <div className="flex max-w-screen-8xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/telu.png"
              alt="logo"
              className="rounded-xl"
              width={75}
              height={75}
            />
          </Link>
        </div>

        {/* Navigation - Hidden on mobile and tablet screens */}
        <nav className="hidden lg:flex space-x-8 items-center text-xl">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#programs">Programs</Link>
          <Link href="#players">Players</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="flex items-center space-x-5">
          {/* Login and Get Started buttons - Hidden on mobile and tablet screens */}
          <div className="hidden lg:flex lg:gap-5 items-center">
            <Link href="/login">
              <span className="w-full px-4 py-3 rounded-full bg-gray-200 border hover:bg-gray-300">
                Login
              </span>
            </Link>
            <Link href="/signup">
              <span className="rounded-full bg-yellow-600 px-4 py-3 text-white hover:bg-yellow-800">
                Get Started
              </span>
            </Link>
          </div>
        </div>

        {/* Menu toggle button - Visible only on mobile and tablet screens */}
        <button
          className="block lg:hidden ml-4"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile and tablet menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-yellow-100 shadow-lg transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 p-6">
          <div className="flex items-center">
            <Image
              src="/telu.png"
              alt="logo"
              className="rounded-xl"
              width={75}
              height={75}
            />
          </div>
          <a
            href="#home"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Home
          </a>
          <Link
            href="#about"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            href="#programs"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Programs
          </Link>
          <Link
            href="#players"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Players
          </Link>
          <a
            href="#gallery"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </a>
        </nav>
        <Link href="/login">
          <span className=" block w-full rounded-full px-4 py-3 text-center bg-gray-200 hover:bg-gray-300 border ">
            Login
          </span>
        </Link>

        <Link href="/signup">
          <span className="mt-4 block w-full px-4 py-3 text-center rounded-full bg-yellow-600 text-white hover:bg-yellow-800">
            Get Started
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
