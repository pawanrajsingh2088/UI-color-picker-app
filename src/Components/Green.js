import React from 'react'
import toast from 'react-hot-toast'

export default function Green() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-green-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Green</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-green-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e8f5e9</div>
      <div onClick={copy} className=" set bg-green-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#c8e6c9</div>
      <div onClick={copy} className=" set bg-green-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#a5d6a7</div>
      <div onClick={copy} className=" set bg-green-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#81c784</div>
      <div onClick={copy} className=" set bg-green-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#66bb6a</div>
      <div onClick={copy} className=" set bg-green-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#4caf50</div>
      <div onClick={copy} className=" set bg-green-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#43a047</div>
      <div onClick={copy} className=" set bg-green-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#388e3c</div>
      <div onClick={copy} className=" set bg-green-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#2e7d32</div>
      <div onClick={copy} className=" set bg-green-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#1b5e20</div>
    </div>
  </>
  )
}
