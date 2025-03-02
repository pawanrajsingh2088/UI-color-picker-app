import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <div className="flex justify-center items-center w-screen bg-blue-400 h-20 font-bold text-3xl text-white" > <Link to="/" >UI Colors</Link></div>
    </>
  )
}
