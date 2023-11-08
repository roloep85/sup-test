// import Image from 'next/image'

import GameCard from "./components/GameCard"

export default function Home() {
  return (
    <>
      <div className="gamer hero min-h-screen relative">
        <div
          className="absolute -z-10 w-96 h-96 rounded-full blur-3xl inset-0 opacity-70 bg-pink-dark"
        ></div>
        <div className="text-neutral-content w-10/12">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold font-display uppercase heading mb-2">
              Let your mind <span>explore</span> new world
            </h1>
            <p className="mb-5">
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced term
              that suggests regular gameplay, possibly as a hobby.
            </p>
            <button
              className="p-4 w-40 font-bold border-0 uppercase bg-gradient-to-r from-purple via-pink to-magenta slant text-white mt-5"
            >
              Buy Now
            </button>
            <button
              className="p-4 w-40 font-bold border-0 uppercase to-magenta slant text-white mt-5"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
      <section className="container mx-auto p-20">
        <div className="max-w-lg mb-10 mx-auto">
          <h2 className="text-5xl font-bold heading mb-2 text-center text-white">
            choose your <span>FAvorite</span> games
          </h2>
          <p className="text-center text-white mt-3">
            Offer sneak peeks and previews of upcoming games, including trailers,
            screenshots, and information about release.
          </p>
        </div>
      </section>
      <section className="container mx-auto p-20">
        <div className="max-w-lg mb-10 mx-auto">
          <h2 className="text-5xl font-bold heading mb-2 text-center text-white">
            Welcome to the top <span>games</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="card pt-8 text-white shadow-xl">
            <figure>
              <img src="/img/rectangle-9.png" alt="Game" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <img src="/img/ellipse-5.png" alt="" />
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
          <div className="card pt-8 text-white shadow-xl">
            <figure>
              <img src="/img/rectangle-11.png" alt="Game" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <img src="/img/ellipse-6.png" alt="" />
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
          <GameCard person={"Roland Prinsloo"} company={"Priro Design"} />
          <div className="card pt-8 text-white shadow-xl">
            <figure>
              <img src="/img/rectangle-17.png" alt="Game" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <img src="/img/ellipse-8.png" alt="" />
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
          <div className="card pt-8 text-white shadow-xl">
            <figure>
              <img src="/img/rectangle-18.png" alt="Game" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <img src="/img/ellipse-9.png" alt="" />
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
          <div className="card pt-8 text-white shadow-xl">
            <figure>
              <img src="/img/rectangle-19.png" alt="Game" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <img src="/img/ellipse-10.png" alt="" />
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
        </div>
      </section>
      <section className="container mx-auto p-20">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="card pt-8 text-white shadow-xl">
            <div className="card-body">
              <img
                src="/img/rating-full.svg"
                className="w-32"
                alt="Rating"
              />
              <p>
                One of the standout features of this gaming website is its
                extensive library of game guides and tutorials. It has helped me
                level up my skills, conquer challenging quests, and discover
                hidden secrets within games. The guides are comprehensive, easy to
                follow, and have undoubtedly elevated my gaming performance.
              </p>
              <div
                className="h-[1px] my-4 bg-gradient-to-r from-white to-transparent"
              ></div>
              <div className="card-actions flex gap-x-5">
                <img src="/img/ellipse-12.png" alt="" />
                <div>
                  <h4>Name Surname</h4>
                  <small>Company</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card pt-8 text-white shadow-xl">
            <div className="card-body">
              <img
                src="/img/rating-full.svg"
                className="w-32"
                alt="Rating"
              />
              <p>
                One of the standout features of this gaming website is its
                extensive library of game guides and tutorials. It has helped me
                level up my skills, conquer challenging quests, and discover
                hidden secrets within games. The guides are comprehensive, easy to
                follow, and have undoubtedly elevated my gaming performance.
              </p>
              <div
                className="h-[1px] my-4 bg-gradient-to-r from-white to-transparent"
              ></div>
              <div className="card-actions flex gap-x-5">
                <img src="/img/ellipse-13.png" alt="" />
                <div>
                  <h4>Name Surname</h4>
                  <small>Company</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
