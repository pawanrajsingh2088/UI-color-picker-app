import React from 'react'
import toast from 'react-hot-toast'

export default function Teal() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-teal-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Teal</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-teal-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e0f2f1</div>
      <div onClick={copy} className=" set bg-teal-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#b2dfdb</div>
      <div onClick={copy} className=" set bg-teal-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#80cbc4</div>
      <div onClick={copy} className=" set bg-teal-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#4db6ac</div>
      <div onClick={copy} className=" set bg-teal-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#26a69a</div>
      <div onClick={copy} className=" set bg-teal-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#009688</div>
      <div onClick={copy} className=" set bg-teal-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#00897b</div>
      <div onClick={copy} className=" set bg-teal-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#00796b</div>
      <div onClick={copy} className=" set bg-teal-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#00695c</div>
      <div onClick={copy} className=" set bg-teal-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#004d40</div>
    </div>
  </>
  )
}
