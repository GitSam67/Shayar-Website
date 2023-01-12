import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
// import emailjs from "@emailjs/browser";

const options = [
  { value: 'love', label: 'Love', color: 'white', backgroundColor: 'black'},
  { value: 'nature', label: 'Nature', color: 'white', backgroundColor: 'black' },
  { value: 'religion', label: 'Religion/Spirituality', color: 'white', backgroundColor: 'black' },
  { value: 'life', label: 'Life/Birth', color: 'white', backgroundColor: 'black' },
  { value: 'death', label: 'Death', color: 'white', backgroundColor: 'black' },
  { value: 'beauty', label: 'Beauty', color: 'white', backgroundColor: 'black' },
  { value: 'aging', label: 'Aging', color: 'white', backgroundColor: 'black' },
  { value: 'astrospace', label: 'Astrospace', color: 'white', backgroundColor: 'black' },
  { value: 'emotions', label: 'Emotions', color: 'white', backgroundColor: 'black' },
  { value: 'identity', label: 'Identity/Self', color: 'white', backgroundColor: 'black' },
  { value: 'travel', label: 'Travel/Journeys', color: 'white', backgroundColor: 'black' },
  { value: 'dreams', label: 'Dreams', color: 'white', backgroundColor: 'black' },
  { value: 'success', label: 'Success/Celebration', color: 'white', backgroundColor: 'black' },
  { value: 'wellness', label: 'Wellness', color: 'white', backgroundColor: 'black' },
  { value: 'failure', label: 'Failure', color: 'white', backgroundColor: 'black' },
  { value: 'other', label: 'Others', color: 'white', backgroundColor: 'black' },
];

export default function Mausam() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();

      setName("");
      setEmail("");
      setPhone("");
      setTitle("");
      setTheme("");
      setMessage("");
  
    //   emailjs.sendForm('service_k2si4zg', 'template_2q6exjx', e.target, 'PsflA5qIdmDHTJA67')
    //   .then(() => alert("Form submitted successfully..!!"))
    //   .catch((error) => alert("Form submission Unsuccessful..!! Kindly try again.."));  
    };

    const colorStyle = {
      control: (styles) => ({...styles, text: 'white', backgroundColor: 'black',
          // borderColor: isFocused ? '#E238EC' : '1a202c',
        }),
      option: (styles, {data, isDisabled, isFocused, isSelected}) =>{
        return {...styles, 
          color: data.color, 
          backgroundColor: isFocused ? '#2B65EC' : data.backgroundColor,

        };
      },
    };

  return (
    <section id="mausam" className="relative bg-black">
    <header id="navbar" className="bg-black bg-opacity-90 border-2 border-purple-800 md:sticky top-0 z-10">
    <nav className="container mx-auto flex flex-row p-3 md:flex-row items-center">
      <div className="w-1/3 text-left">
          <a className="title-font font-bold text-2xl flex flex-row items-center" href="/Shayar-Website/">
              <img className="mainlogo h-16 w-36 rounded-xl border-2 border-purple-900" alt="logo" />
          </a>
      </div>
      <div id="link" className="w-2/3 md:py-1 flex flex-row items-center text-base justify-center">
        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 title-font sm:text-4xl text-3xl font-extrabold"> Shayar Community Publication house </h4>
      </div>
    </nav>
  </header>
      <div className="container rounded-lg px-5 my-10 py-2 mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-2">
          <h1 className="sm:text-4xl text-3xl border-b-2 border-purple-700 font-medium title-font text-white">
            <span className="text-purple-500">Shayari Submission Form</span>
          </h1>
        </div>
        <div className="bg-white m-5 w-5/6 rounded-lg flex sm:flex-nowrap flex-wrap">
          <form
            name="upload"
            onSubmit={sendEmail}
            className="md:w-full flex flex-col px-20 items-center w-full md:py-8 mt-8 md:mt-0">
            <div className="relative mb-5 w-full">
              <h2 className="text-xl font-bold text-black mb-1">Enter your name:</h2>
              <i class="fas fa-md fa-user absolute mt-3 ml-3 text-purple-500" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                autoComplete="off"
                className="w-2/5 bg-gray-800 rounded border items-center pl-10 text-white border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="relative mb-5 w-full">
            <h2 className="text-xl font-bold text-black mb-1">Enter your email:</h2>
              <i class="fas fa-md fa-envelope absolute mt-3 ml-3 text-purple-500" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="w-1/2 bg-gray-800 rounded border items-center pl-10 text-white border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="relative mb-5 w-full">
            <h2 className="text-xl font-bold text-black mb-1">Enter your contact no:</h2>
              <i class="fas fa-md fa-phone absolute mt-3 ml-3 text-purple-500" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                autoComplete="off"
                pattern="[0-9]{10}"
                className="w-2/5 bg-gray-800 rounded border items-center pl-10 text-white border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="relative mb-5 w-full">
            <h2 className="text-xl font-bold text-black mb-1">Enter title:</h2>
              <i class="fa-sharp fa-solid fa-pen absolute mt-3 ml-3 text-purple-500" />
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="off"
                placeholder="Title of your shayari"
                className="w-2/5 bg-gray-800 rounded border items-center pl-10 text-white border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="relative mb-5 w-full">
            <h2 className="text-xl font-bold text-black mb-1">Enter theme:</h2>
              <CreatableSelect 
                options={options}
                id="theme"
                name="theme"
                autoComplete="off"
                placeholder="Select your theme"
                isSearchable={true}
                // className="w-2/5 bg-gray-800 rounded border items-center text-black border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                className="w-2/5 text-white border-2 border-gray-700 rounded focus:border-purple-500 focus:ring-2 focus:ring-purple-900"
                 onChange={setTheme}
                 value={theme}
                 styles={colorStyle} 
              />
            </div>
            <div className="relative mb-5 w-full">
            <h2 className="text-xl font-bold mb-1">Your shayari:</h2>
              <i class="fas fa-md fa-comment-dots absolute mt-3 ml-3 text-purple-500" />
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                placeholder="Write your Shayari here.."
                className="w-2/5 bg-gray-800 rounded border items-center pl-10 text-white border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-40 w-96 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <button
              id="submit"
              type="submit"
              className="transition delay-5 text-white items-center bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-lg text-lg duration-300">
              Submit
              <i class="fas fa-sm fa-paper-plane ml-3" />
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-black bg-opacity-100 border-2 border-purple-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-row p-3 md:flex-row items-center">
        <div className="w-full md:py-1 md:pl-3 flex flex-row items-center text-base justify-center">
            <h1 class="w-10/12 mx-auto py-2 text-center text-white title-font font-medium">Copyright © 2023 Shayar Community Pvt. Ltd. • All rights reserved.</h1>
        </div>
      </div>
    </footer>
    </section>
  );
}
