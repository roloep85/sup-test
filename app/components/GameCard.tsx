import React from 'react'

const GameCard = ({ person, company }) => {
    console.log(person);
  return (
    <div className="card pt-8 text-white shadow-xl">
        <figure>
        <img src="/img/rectangle-13.png" alt="Game" />
        </figure>
        <div className="card-body">
        <h2 className="card-title capitalize">core philosophies</h2>
        <div className="flex gap-x-5">
            <img src="/img/ellipse-7.png" alt="" />
            <div>
            <h4>Name Surname</h4>
            <small>Company</small>
            </div>
        </div>
        <div className="card-actions">
            <button
            className="p-4 w-full font-bold border-0 uppercase bg-gradient-to-r from-purple via-pink to-magenta slant text-white mt-5"
            >
            <span>Live Demo</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default GameCard