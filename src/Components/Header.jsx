import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Header(){
    return (
        <header id="navbar" className="bg-white bg-opacity-50 border-2 border-purple-800 md:sticky top-0 z-10">
      <nav className="container mx-auto flex flex-row p-3 md:flex-row items-center">
        <div className="w-1/3 text-left">
            <a className="title-font font-bold text-2xl flex flex-row items-center" href="#starter">
                <img className="mainlogo h-16 w-36 rounded-xl border-2 border-purple-900" alt="logo" />
            </a>
        </div>
        <div id="link" className="w-2/3 md:py-1 md:pl-3 flex flex-row items-center text-base justify-center">
          <NavHashLink to="#" className="transition delay-40 mr-7 font-bold font-mono text-xl text-indigo-900 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800 duration-500">
            Home
          </NavHashLink>
          <NavHashLink to="#about" className="transition delay-40 mr-7 font-bold font-mono text-xl text-indigo-900 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800  duration-500">
            Shayar App
          </NavHashLink>
          <NavHashLink to="#skills" className="transition delay-40 mr-7 font-bold font-mono text-xl text-indigo-900 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800  duration-500">
            Shayari
          </NavHashLink>
          <NavHashLink to="#education" className="transition delay-40 mr-7 font-bold font-mono text-xl text-indigo-900 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800  duration-500">
            Open Mics
          </NavHashLink>
          <NavHashLink to="#projects" className="transition delay-40 mr-7 font-bold font-mono text-xl text-indigo-900 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800  duration-500">
            Contact Us
          </NavHashLink>
          <Link to="/Shayar-Website/mausam" className="transition delay-40 font-bold font-mono text-xl text-indigo-900 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800  duration-500">
            Mausam <sup id="live" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">Live</sup>
          </Link>
        </div>
      </nav>
    </header>
    )
}