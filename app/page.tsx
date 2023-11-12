import Image from "next/image";

import Card from "./components/GameCard";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl left-0 top-20 opacity-25 bg-pink-dark"></div>
        <div className="hero-overlay gamer"></div>
        <div className="relative text-white p-5 sm:w-10/12">
          <div className="max-w-md">
            <h1 className="text-3xl lg:text-5xl font-bold font-display uppercase heading mb-2">
              Let your mind <span>explore</span> new world
            </h1>
            <p className="mb-5">
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
            <button className="p-4 w-full lg:w-40 font-bold border-0 uppercase btn-slant text-white mt-5">
              Buy Now
            </button>
            <button className="p-4 w-full lg:w-40 font-bold border-0 uppercase to-magenta slant text-white mt-5">
              Play Now
            </button>
          </div>
        </div>
      </div>
      <section className="container mx-auto p-5 lg:p-20">
        <div className="max-w-lg mb-10 mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold heading mb-2 lg:text-center text-white">
            choose your <span>FAvorite</span> games
          </h2>
          <p className="lg:text-center text-white mt-3">
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </p>
        </div>
      </section>
      <section className="container mx-auto p-5 lg:p-20">
        <div className="game-card grid grid-cols-2 shadow-xl">
          <figure>
            <Image
              width={400}
              height={100}
              src="/img/vr-gaming-woman.png"
              alt="Game"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl lg:text-5xl font-bold heading mb-2 text-white">
              Discover the <span>Virtual</span> Reality Gaming{" "}
            </h2>
            <p className="text-white mt-3">
              Click the button to listen on Spotiwhy app.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-5 lg:p-20">
        <div className="max-w-lg mb-10 mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold heading mb-2 lg:text-center text-white">
            Welcome to the top <span>games</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="game-card pt-8 text-white shadow-xl">
            <figure>
              <Image
                width={400}
                height={100}
                src="/img/rectangle-9.png"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <Image width={50} height={50} src="/img/ellipse-5.png" alt="" />
                <div>
                  <h4>Name Surname</h4>
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
          <div className="game-card pt-8 text-white shadow-xl">
            <figure>
              <Image
                width={400}
                height={100}
                src="/img/rectangle-11.png"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <Image width={50} height={50} src="/img/ellipse-6.png" alt="" />
                <div>
                  <h4>Name Surname</h4>
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
          <div className="game-card pt-8 text-white shadow-xl">
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
          <div className="game-card pt-8 text-white shadow-xl">
            <figure>
              <Image
                width={400}
                height={100}
                src="/img/rectangle-17.png"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <Image width={50} height={50} src="/img/ellipse-8.png" alt="" />
                <div>
                  <h4>Name Surname</h4>
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
          <div className="game-card pt-8 text-white shadow-xl">
            <figure>
              <Image
                width={400}
                height={100}
                src="/img/rectangle-18.png"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <Image width={50} height={50} src="/img/ellipse-9.png" alt="" />
                <div>
                  <h4>Name Surname</h4>
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
          <div className="game-card pt-8 text-white shadow-xl">
            <figure>
              <Image
                width={400}
                height={100}
                src="/img/rectangle-19.png"
                alt="Game"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">core philosophies</h2>
              <div className="flex gap-x-5">
                <Image
                  width={50}
                  height={50}
                  src="/img/ellipse-10.png"
                  alt=""
                />
                <div>
                  <h4>Name Surname</h4>
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
        </div>
      </section>
      <section className="container mx-auto p-5 lg:p-20">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="game-card pt-8 text-white shadow-xl">
            <div className="card-body">
              <img src="/img/rating-full.svg" className="w-32" alt="Rating" />
              <p>
                One of the standout features of this gaming website is its
                extensive library of game guides and tutorials. It has helped me
                level up my skills, conquer challenging quests, and discover
                hidden secrets within games. The guides are comprehensive, easy
                to follow, and have undoubtedly elevated my gaming performance.
              </p>
              <div className="h-[1px] my-4 bg-gradient-to-r from-white to-transparent"></div>
              <div className="card-actions flex gap-x-5">
                <Image
                  width={50}
                  height={50}
                  src="/img/ellipse-12.png"
                  alt=""
                />
                <div>
                  <h4>Name Surname</h4>
                  <small>Company</small>
                </div>
              </div>
            </div>
          </div>
          <div className="game-card pt-8 text-white shadow-xl">
            <div className="card-body">
              <img src="/img/rating-full.svg" className="w-32" alt="Rating" />
              <p>
                One of the standout features of this gaming website is its
                extensive library of game guides and tutorials. It has helped me
                level up my skills, conquer challenging quests, and discover
                hidden secrets within games. The guides are comprehensive, easy
                to follow, and have undoubtedly elevated my gaming performance.
              </p>
              <div className="h-[1px] my-4 bg-gradient-to-r from-white to-transparent"></div>
              <div className="card-actions flex gap-x-5">
                <Image
                  width={50}
                  height={50}
                  src="/img/ellipse-13.png"
                  alt=""
                />
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
  );
}
