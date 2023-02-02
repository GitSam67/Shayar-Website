import { React, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Header() {

  let [open, setOpen] = useState(false);

  return (
    <header id="navbar" className="bg-black shadow-md w-full fixed top-0 left-0">
      <nav className="container md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-left'>
          <a className="title-font font-bold text-2xl flex flex-row items-center" href="#starter">
            <img className="mainlogo h-16 w-36 rounded-xl border-2 border-purple-900" alt="logo" />
          </a>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-9 top-6 cursor-pointer md:hidden'>
          <i class={open ? 'fa fa-close text-white' : 'fa-solid fa-bars text-white'}></i>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-14 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
        <NavHashLink to="#" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500 duration-200">
          Home
        </NavHashLink>
        </li>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
        <NavHashLink to="#about" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-200">
          Shayar App
        </NavHashLink>
        </li>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
        <NavHashLink to="#skills" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-200">
          Shayari
        </NavHashLink>
        </li>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
        <NavHashLink to="#education" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-200">
          Open Mics
        </NavHashLink>
        </li>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
        <NavHashLink to="#projects" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-200">
          Contact Us
        </NavHashLink>
        </li>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
        <a href="../src/mausam.html" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500  duration-200">
          Mausam <sup id="live" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">Live</sup>
        </a>
        </li>
      </ul>
    </nav>
  </header >
)
}