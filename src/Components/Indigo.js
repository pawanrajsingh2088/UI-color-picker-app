import React from 'react'
import toast from 'react-hot-toast'

export default function Indigo() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-indigo-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Indigo</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-indigo-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e8eaf6</div>
      <div onClick={copy} className=" set bg-indigo-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#c5cae9</div>
      <div onClick={copy} className=" set bg-indigo-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#9fa8da</div>
      <div onClick={copy} className=" set bg-indigo-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#7986cb</div>
      <div onClick={copy} className=" set bg-indigo-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#5c6bc0</div>
      <div onClick={copy} className=" set bg-indigo-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#3f51b5</div>
      <div onClick={copy} className=" set bg-indigo-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#3949ab</div>
      <div onClick={copy} className=" set bg-indigo-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#303f9f</div>
      <div onClick={copy} className=" set bg-indigo-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#283593</div>
      <div onClick={copy} className=" set bg-indigo-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#1a237e</div>
    </div>
  </>
  )
}
