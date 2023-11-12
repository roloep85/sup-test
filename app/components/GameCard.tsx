import React from "react";

import Image from "next/image";

interface CardProps {
  username: string;
  company: string;
  src: string;
  avatar: string;
}

const GameCard: React.FC<CardProps> = ({ username, company, src, avatar }) => {
  return (
    <div className="game-card text-white shadow-xl">
      <figure className="px-5 pt-5">
        <Image
          src={src}
          className="w-full"
          alt="Game"
          width={500}
          height={50}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">core philosophies</h2>
        <div className="flex gap-x-5">
          <Image
            className="rounded-full"
            src={avatar}
            alt=""
            width={50}
            height={50}
          />
          <div>
            <h4>{username}</h4>
            <small>{company}</small>
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
