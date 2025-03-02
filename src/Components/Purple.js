import React from 'react'
import toast from 'react-hot-toast'

export default function Purple() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
      <h1 className="flex justify-center text-purple-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Purple</h1>
      <div className=" curve grid grid-cols-5 ml-4 p-4">
        <div onClick={copy} className=" set bg-purple-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f3e5f5</div>
        <div onClick={copy} className=" set bg-purple-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e1bee7</div>
        <div onClick={copy} className=" set bg-purple-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ce93d8</div>
        <div onClick={copy} className=" set bg-purple-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ba68c8</div>
        <div onClick={copy} className=" set bg-purple-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ab47bc</div>
        <div onClick={copy} className=" set bg-purple-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#9c27b0</div>
        <div onClick={copy} className=" set bg-purple-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#8e24aa</div>
        <div onClick={copy} className=" set bg-purple-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#7b1fa2</div>
        <div onClick={copy} className=" set bg-purple-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#6a1b9a</div>
        <div onClick={copy} className=" set bg-purple-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#4a148c</div>
      </div>
    </>
  )
}
