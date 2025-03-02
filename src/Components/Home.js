import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
        <div className="main w-screen h-auto grid grid-cols-4 items-center p-7 ">
          <Link to="/red" className=" child w-48 h-48 bg-red-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Red</div>
          </Link>
          <Link to="/pink" className=" child w-48 h-48 bg-pink-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Pink</div>
          </Link>
          <Link to="/purple" className=" child w-48 h-48 bg-purple-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Purple</div>
          </Link>
          <Link to="/indigo" className=" child w-48 h-48 bg-indigo-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4  italic">
            <div>Indigo</div>
          </Link>
          <Link to="/blue" className=" child w-48 h-48 bg-blue-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Blue</div>
          </Link>
          <Link to="/cyan" className=" child w-48 h-48 bg-cyan-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Cyan</div>
          </Link>
          <Link to="/teal" className=" child w-48 h-48 bg-teal-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Teal</div>
          </Link>
          <Link to="/green" className=" child w-48 h-48 bg-green-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Green</div>
          </Link>
          <Link to="/lime" className=" child w-48 h-48 bg-lime-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Lime</div>
          </Link>
          <Link to="/yellow" className=" child w-48 h-48 bg-yellow-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Yellow</div>
          </Link>
          <Link to="/amber" className=" child w-48 h-48 bg-amber-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Amber</div>
          </Link>
          <Link to="/orange" className=" child w-48 h-48 bg-orange-500 flex justify-center items-center font-bold text-3xl rounded-3xl mb-4 italic">
            <div>Orange</div>
          </Link>
        </div>
    </>
  )
}
