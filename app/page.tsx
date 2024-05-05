"use client"

import { useState } from "react";
import "./globals.css";

export default function Home() {

  const [visible, setVisible] = useState(false);

  return (
    <div className="mmm h-screen flex">
      <div className="h-screen flex flex-col justify-center max-h-screen-lg md:px-6 lg:px-4 xl:px-2 text-white p-20 md:ml-28 pl-12 font-bold">
        <h1 className="flex-1">FRANCIS SHOK</h1>
        <div className="flex-1 md:w-1/2 lg:w-1/2 w-1/2 text-2xl">
          Breathing an artistic flair into brands and organizations communication materials
        </div>

        <div className="flex-1 flex items-center">
          <div onClick={() => setVisible(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-3xl w-36 text-center transition-colors duration-300 cursor-pointer">CONTACT ME</div>

          <div className="flex items-center"
            style={{ position: 'absolute', right: 50 }}>
            <a className="ml-2 mr-2">
              <img src="./favicon.ico" className="w-6 h-6" />
            </a>
            <a className="ml-2 mr-2">
              <img src="./favicon.ico" className="w-6 h-6" />
            </a>
            <a className="ml-2 mr-2">
              <img src="./favicon.ico" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>


      {visible ?
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} className="backdrop-blur-sm h-screen flex flex-col justify-center">

          <div className="mx-auto max-w-screen-lg md:w-1/3 md:px-1 lg:px-1 xl:px-2">
            <div className="mb-4">
              <input placeholder="Names" name="name" className="text-white w-full pl-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', outline: 'none', height: 50, borderBottomWidth: 1, borderColor: 'white', display: 'block' }} />

              <input placeholder="Email adress" name="name" className="text-white w-full pl-2 mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', outline: 'none', height: 50, borderBottomWidth: 1, borderColor: 'white' }} />
            </div>

            <textarea placeholder="Type message here" className="text-black w-full bg-white rounded-md pl-2 pt-2 pb-2 pr-2 mh-18 h-full" style={{ outline: 'none' }}></textarea>

            <div className="flex items-center justify-between mt-4">
              <div onClick={() => setVisible(false)} className=" hover:bg-black text-white font-bold py-2 rounded-3xl w-36 text-center transition-colors duration-300 cursor-pointer">CLOSE</div>

              <div onClick={() => setVisible(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-3xl w-36 text-center transition-colors duration-300 cursor-pointer">SEND</div>
            </div>

          </div>

        </div> : null}
    </div>
  );
}
