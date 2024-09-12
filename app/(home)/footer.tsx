import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image
              src="/telu.png"
              alt="logo"
              className="rounded-xl"
              width={75}
              height={75}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Telu FC
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase ">
                Resources
              </h2>
              <ul className="text-black  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:underline">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase ">
                Legal
              </h2>
              <ul className="text-black  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Telu FC{" "}
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-black hover:text-black ">
              <FaFacebook />
              <span className="sr-only">Facebook</span>
            </a>

            <a href="#" className="text-black hover:text-black  ms-5">
              <FaXTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-black hover:text-black  ms-5">
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
