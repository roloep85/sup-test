import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative">
      <div className="absolute w-96 h-96 rounded-full blur-3xl left-0 top-20 opacity-25 bg-pink-dark"></div>
      <div className="hero-overlay gamer"></div>
      <div className="container relative text-white p-5 sm:p-10 md:p-20 w-full">
        <div className="max-w-md">
          <h1 className="text-3xl lg:text-5xl font-bold font-display uppercase heading mb-2">
            Let your mind <span className="gradient-text">explore</span> new
            world
          </h1>
          <p className="mb-5">
            Playing electronic games, whether through consoles, computers,
            mobile phones or another medium altogether. Gaming is a nuanced term
            that suggests regular gameplay, possibly as a hobby.
          </p>
          <button className="p-4 w-full lg:w-40 font-bold border-0 uppercase btn-slant text-white mt-5">
            Buy Now
          </button>
          <button className="p-4 w-full lg:w-40 font-bold border-0 uppercase btn-slant-outlined text-white mt-5">
            Play Now
          </button>
          <div className="flex gap-2 mt-5">
            <div>
              <h4 className="text-lg font-extrabold">500+</h4>
              <p>Unique style</p>
            </div>
            <div>
              <h4 className="text-lg font-extrabold gradient-text">200+</h4>
              <p>Project finished</p>
            </div>
            <div>
              <h4 className="text-lg font-extrabold">500+</h4>
              <p>Happy customer</p>
            </div>
          </div>
          {/* <Image src="/img/artboard-11.png" alt="VR" width={500} height={100} /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
