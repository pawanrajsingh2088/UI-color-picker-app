import React from 'react'
import toast from 'react-hot-toast'

export default function Blue() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-blue-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Blue</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-blue-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e3f2fd</div>
      <div onClick={copy} className=" set bg-blue-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#bbdefb</div>
      <div onClick={copy} className=" set bg-blue-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#90caf9</div>
      <div onClick={copy} className=" set bg-blue-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#64b5f6</div>
      <div onClick={copy} className=" set bg-blue-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#42a5f5</div>
      <div onClick={copy} className=" set bg-blue-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#2196f3</div>
      <div onClick={copy} className=" set bg-blue-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#1e88e5</div>
      <div onClick={copy} className=" set bg-blue-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#1976d2</div>
      <div onClick={copy} className=" set bg-blue-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#1565c0</div>
      <div onClick={copy} className=" set bg-blue-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#0d47a1</div>
    </div>
  </>
  )
}
