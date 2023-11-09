import React from "react";

import Image from "next/image";

const GameCard = () => {
  return (
    <div className="card pt-8 text-white shadow-xl">
      <figure>
        <Image
          src="/img/rectangle-13.png"
          className="max-w-full"
          alt="Game"
          width={400}
          height={100}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">core philosophies</h2>
        <div className="flex gap-x-5">
          <Image src="/img/ellipse-7.png" alt="" width={50} height={50} />
          <div>
            <h4></h4>
            <small>Company</small>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn-slant p-4 w-full font-bold border-0 uppercase bg-gradient-to-r from-purple via-pink to-magenta slant text-white mt-5">
            <span>Live Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
