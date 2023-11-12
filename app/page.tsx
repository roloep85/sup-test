import Image from "next/image";

import Hero from "./components/Hero";
import Shards from "./components/Shards";
// import GameCard from "./components/GameCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto p-5 sm:p-10 md:p-20">
        <div className="max-w-lg mb-10 mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold heading mb-2 lg:text-center text-white">
            choose your <span>FAvorite</span> games
          </h2>
          <p className="lg:text-center text-white mt-3">
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </p>
        </div>
        <div className="carousel relative z-10 carousel-center gap-10 rounded-box">
          <div className="carousel-item">
            <img src="/img/slide-1.png" alt="Wolf" />
          </div>
          <div className="carousel-item">
            <img src="/img/slide-2.png" alt="Wolf" />
          </div>
          <div className="carousel-item">
            <img src="/img/slide-3.png" alt="Wolf" />
          </div>
          <div className="carousel-item">
            <img src="/img/slide-1.png" alt="Wolf" />
          </div>
          <div className="carousel-item">
            <img src="/img/slide-2.png" alt="Wolf" />
          </div>
          <div className="carousel-item">
            <img src="/img/slide-3.png" alt="Wolf" />
          </div>
        </div>
      </section>
      <section className="container mx-auto p-5 sm:p-10 md:p-20">
        <div className="game-card pb-0 lg:p-5 grid xl:grid-cols-2 gap-10 shadow-xl max-w-6xl mx-auto">
          <figure className="order-last xl:order-none">
            <Image
              className="xl:absolute bottom-0 left-0"
              width={600}
              height={100}
              src="/img/vr-gaming-woman.png"
              alt="VR Woman"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl xl:text-5xl font-bold heading mb-2 text-white">
              Discover the <span>Virtual</span> Reality Gaming{" "}
            </h2>
            <p className="text-white mt-3">
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </p>
            <div className="card-actions justify-start mt-10">
              <button className="btn btn-slant w-40 p-4 font-bold border-0 uppercase bg-gradient-to-r from-purple via-pink to-magenta slant text-white mt-5">
                Play now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-5 sm:p-10 md:p-20">
        <div className="max-w-lg mb-10 mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold heading mb-2 lg:text-center text-white">
            Welcome to the top <span>games</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="game-card text-white shadow-xl">
            <figure className="px-5 pt-5">
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
          <div className="game-card text-white shadow-xl">
            <figure className="px-5 pt-5">
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
          <div className="game-card text-white shadow-xl">
            <figure className="px-5 pt-5">
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
          <div className="game-card text-white shadow-xl">
            <figure className="px-5 pt-5">
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
          <div className="game-card text-white shadow-xl">
            <figure className="px-5 pt-5">
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
          <div className="game-card text-white shadow-xl">
            <figure className="px-5 pt-5">
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
      <section className="container mx-auto p-5 sm:p-10 md:p-20">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="game-card text-white shadow-xl">
            <Shards />
            <div className="card-body">
              <Image
                width={128}
                height={50}
                src="/img/rating-full.svg"
                alt="Rating"
              />
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
          <div className="game-card text-white shadow-xl">
            <Shards />
            <div className="card-body">
              <Image
                width={128}
                height={50}
                src="/img/rating-full.svg"
                alt="Rating"
              />
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
