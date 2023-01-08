import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-purple-500">
      <div className="container mx-auto flex px-5 pt-2 text-white pb-2 md:flex-row flex-col items-center">
        <div className="flex flex-col justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <p className="text-2xl font-bold mb-10">
            Shayar is a new-age social networking platform where talented poetry writers
            & shayari lovers from all across the globe meet...!!
            </p>
            <p className="text-2xl font-extrabold">
            Download Our App Today &
            Be A Part of Social Shayari Network <br/>
            <span className="text-xl font-thin"> Scroll through thousands of poetries at free of cost.</span>
            </p>
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col mb-16 md:mb-0 items-center text-center">
            <img id="applogo" className="rounded-xl border-2 border-purple-600" src="../src/assets/applogo.webp" alt="app" />
        <br className="hidden lg:inline-block" />
          <div className="flex justify-center items-center">
            <a
              href="#about"
              className="inline-flex text-white bg-indigo-600 border-0 mb-2 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded-3xl text-lg">
              Download our App now
              <i class="fas fa-sm fa-chevron-right mt-4 ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
