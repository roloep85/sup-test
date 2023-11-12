import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar container inset-x-0 mx-auto px-5 sm:px-10 md:px-20 absolute z-20">
      <div className="navbar-start">
        <a className="btn btn-ghost hover:bg-transparent p-0 normal-case text-xl text-white logo">
          <Image
            src="/img/logo.svg"
            className="max-w-full text-slate-50"
            alt="Game"
            width={50}
            height={50}
          />
          board
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold uppercase px-1">
          <li>
            <a className="font-normal hover:bg-transparent text-white hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a className="font-normal hover:bg-transparent text-white hover:text-gray-300">
              Apps & Games
            </a>
          </li>
          <li>
            <a className="font-normal hover:bg-transparent text-white hover:text-gray-300">
              Features
            </a>
          </li>
          <li>
            <a className="font-normal hover:bg-transparent text-white hover:text-gray-300">
              Support
            </a>
          </li>
          <li>
            <a className="font-normal hover:bg-transparent text-white hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-full dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 right-0 block"
          >
            <li>
              <a className="text-white my-2">Products</a>
            </li>
            <li>
              <a className="text-white my-2">Apps & Games</a>
            </li>
            <li>
              <a className="text-white my-2">Features</a>
            </li>
            <li>
              <a className="text-white my-2">Support</a>
            </li>
            <li>
              <a className="text-white my-2">About</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1532 7.68093C14.7338 7.68093 14.3859 7.3331 14.3859 6.91364V5.50182C14.3859 4.42762 13.9256 3.38409 13.1276 2.65772C12.3194 1.92112 11.2758 1.58351 10.1709 1.68582C8.32943 1.85974 6.71299 3.74216 6.71299 5.70643V6.6988C6.71299 7.11825 6.36515 7.46609 5.9457 7.46609C5.52625 7.46609 5.17841 7.11825 5.17841 6.6988V5.6962C5.17841 2.94418 7.39844 0.406993 10.0277 0.151228C11.5623 0.00800005 13.0355 0.488837 14.1609 1.52213C15.276 2.53495 15.9205 3.9877 15.9205 5.50182V6.91364C15.9205 7.3331 15.5727 7.68093 15.1532 7.68093Z"
                fill="white"
              />
              <path
                d="M13.6185 22.1264H7.48013C2.75361 22.1264 1.87378 19.9269 1.6487 17.7887L0.88141 11.6606C0.768873 10.5557 0.727951 8.96992 1.80216 7.78317C2.72291 6.76011 4.24727 6.26904 6.45708 6.26904H14.6415C16.8616 6.26904 18.3859 6.77034 19.2964 7.78317C20.3604 8.96992 20.3297 10.5557 20.2172 11.6401L19.4499 17.7887C19.2248 19.9269 18.345 22.1264 13.6185 22.1264ZM6.45708 7.80363C4.72811 7.80363 3.54136 8.14124 2.93776 8.81646C2.43646 9.36891 2.27277 10.218 2.40577 11.4866L3.17306 17.6148C3.34698 19.2517 3.79713 20.6021 7.48013 20.6021H13.6185C17.3015 20.6021 17.7516 19.2619 17.9255 17.6352L18.6928 11.4866C18.8258 10.2385 18.6621 9.38937 18.1608 8.82669C17.5572 8.14124 16.3705 7.80363 14.6415 7.80363H6.45708Z"
                fill="white"
              />
              <path
                d="M14.0485 12.3049C13.4756 12.3049 13.0153 11.8445 13.0153 11.2818C13.0153 10.7192 13.4756 10.2588 14.0383 10.2588C14.601 10.2588 15.0614 10.7192 15.0614 11.2818C15.0614 11.8445 14.6112 12.3049 14.0485 12.3049Z"
                fill="white"
              />
              <path
                d="M6.88708 12.3049C6.31417 12.3049 5.85379 11.8445 5.85379 11.2818C5.85379 10.7192 6.31417 10.2588 6.87685 10.2588C7.43953 10.2588 7.89991 10.7192 7.89991 11.2818C7.89991 11.8445 7.44976 12.3049 6.88708 12.3049Z"
                fill="white"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
