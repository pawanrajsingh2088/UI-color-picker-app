import React from 'react'
import toast from 'react-hot-toast'

export default function Cyan() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-cyan-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Cyan</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-cyan-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e0f7fa</div>
      <div onClick={copy} className=" set bg-cyan-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#b2ebf2</div>
      <div onClick={copy} className=" set bg-cyan-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#80deea</div>
      <div onClick={copy} className=" set bg-cyan-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#4dd0e1</div>
      <div onClick={copy} className=" set bg-cyan-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#26c6da</div>
      <div onClick={copy} className=" set bg-cyan-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#00bcd4</div>
      <div onClick={copy} className=" set bg-cyan-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#00acc1</div>
      <div onClick={copy} className=" set bg-cyan-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#0097a7</div>
      <div onClick={copy} className=" set bg-cyan-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#00838f</div>
      <div onClick={copy} className=" set bg-cyan-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#006064</div>
    </div>
  </>
  )
}
