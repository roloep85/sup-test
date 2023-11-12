import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-footer-image bg-cover">
      <div className="container mx-auto p-5 sm:p-10 md:p-20 py-12 lg:py-32 ">
        <footer className="footer grid-cols-2 lg:grid-cols-4 gap-x-10 text-white">
          <aside className="col-span-2 lg:col-span-1">
            <a className="btn btn-ghost hover:bg-transparent mb-4 -mt-3 p-0 normal-case text-xl logo">
              <Image
                src="/img/logo.svg"
                className="max-w-full text-slate-50"
                alt="Game"
                width={50}
                height={50}
              />
              board
            </a>
            <p>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals.
            </p>
          </aside>
          <nav>
            <header className="footer-title opacity-100 ">company</header>
            <a className="link link-hover capitalize">products</a>
            <a className="link link-hover capitalize">apps & games</a>
            <a className="link link-hover capitalize">features</a>
          </nav>
          <nav>
            <header className="footer-title opacity-100 ">help</header>
            <a className="link link-hover capitalize">support</a>
            <a className="link link-hover capitalize">about</a>
            <a className="link link-hover capitalize">contact us</a>
          </nav>
          <nav>
            <header className="footer-title opacity-100 ">resources</header>
            <a className="link link-hover capitalize">youtube playlist</a>
            <a className="link link-hover capitalize">how to - blog</a>
            <a className="link link-hover capitalize">terms & conditions</a>
          </nav>
        </footer>
        <small className="text-white mt-10 block">
          © Copyright 2023, All Rights Reserved by board
        </small>
      </div>
    </div>
  );
};

export default Footer;
