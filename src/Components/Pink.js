import React from 'react'
import toast from 'react-hot-toast'

export default function Pink() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
      <h1 className="flex justify-center text-pink-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Pink</h1>
      <div className=" curve grid grid-cols-5 ml-4 p-4">
        <div onClick={copy} className=" set bg-pink-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fce4ec</div>
        <div onClick={copy} className=" set bg-pink-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f8bbd0</div>
        <div onClick={copy} className=" set bg-pink-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f48fb1</div>
        <div onClick={copy} className=" set bg-pink-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f06292</div>
        <div onClick={copy} className=" set bg-pink-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ec407a</div>
        <div onClick={copy} className=" set bg-pink-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e91e63</div>
        <div onClick={copy} className=" set bg-pink-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#d81b60</div>
        <div onClick={copy} className=" set bg-pink-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#c2185b</div>
        <div onClick={copy} className=" set bg-pink-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ad1457</div>
        <div onClick={copy} className=" set bg-pink-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#880e4f</div>
      </div>
    </>
  )
}
