import React from "react";
import {TypeAnimation} from "react-type-animation";

export default function Home() {
  return (
    <section id="home" className="border-2 border-t-0 border-purple-500">
      <div className="container mx-auto mt-5 mb-20 flex px-10 pt-10 pb-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full mb-16 md:mb-0 flex flex-col mx-auto items-center text-center">
          <h1 className="title-font sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-sky-600">
            Welcome to <br/>
            <span className="text-purple-600"> India's budding community for Shayar's </span> 
            <br className="hidden lg:inline-block" /><br className="hidden lg:inline-block" />
          </h1>
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 title-font sm:text-4xl text-3xl mb-4 font-extrabold">
            <TypeAnimation
              sequence={[
                'Shayar App', 
                1000,
                'Corporate Events',
                1000,
                'Open Mic Shows',
                1000,
                'Publication House',
                1000,
                'Evergrowing Community',
                1000,
              ]}
              speed={70}
              wrapper="b"
              repeat={Infinity}
              />
            </h3>
          <p className="mb-5 leading-relaxed">
          </p>
          <div className="title-font font-bold bg-sky-500 h-10 w-24 rounded-lg cursor-pointer text-white m-5 p-2 flex flex-row items-center justify-center">
              Join Us <i className="fa fa-arrow-down m-1"></i>
          </div>
          <div id="homsoc" className="flex justify-center">
            <div className="transition delay-40 h-10 w-10 rounded-full bg-black text-purple-400 mx-2 flex flex-row items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer duration-500">
              <a className="text-lg" href="https://www.linkedin.com/in/samanuay-nambiar-31852b233/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> </a>
            </div>
            <div className="transition delay-40 h-10 w-10 rounded-full bg-black text-purple-400 mx-2 flex flex-row items-center justify-center hover:bg-black hover:text-white cursor-pointer duration-500">
              <a className="text-lg" href="https://github.com/GitSam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> </a>
            </div>
            <div className="transition delay-40 h-10 w-10 rounded-full bg-black text-purple-400 mx-2 flex flex-row items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer duration-500">
              <a className="text-lg" href="https://twitter.com/SamanuayN" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> </a>
            </div>
            <div className="transition delay-40 h-10 w-10 rounded-full bg-black text-purple-400 mx-2 flex flex-row items-center justify-center hover:bg-pink-500 hover:text-white cursor-pointer duration-500">
              <a className="text-lg" href="https://www.instagram.com/samanuaynambiar/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> </a>
            </div>
            <div className="transition delay-40 h-10 w-10 rounded-full bg-black text-purple-400 mx-2 flex flex-row items-center justify-center hover:bg-black hover:text-white cursor-pointer duration-500">
              <a className="text-lg" href="https://dev.to/devsam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-dev"></i> </a>
            </div>
            </div>
            <p className="mb-20 leading-relaxed">
          </p>
        </div>
      </div>
    </section>
  );
}
