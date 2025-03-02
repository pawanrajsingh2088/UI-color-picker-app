import React from 'react'
import toast from 'react-hot-toast'

export default function Amber() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-amber-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Amber</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-amber-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fff8e1</div>
      <div onClick={copy} className=" set bg-amber-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffecb3</div>
      <div onClick={copy} className=" set bg-amber-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffe082</div>
      <div onClick={copy} className=" set bg-amber-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffd54f</div>
      <div onClick={copy} className=" set bg-amber-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffca28</div>
      <div onClick={copy} className=" set bg-amber-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffc107</div>
      <div onClick={copy} className=" set bg-amber-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffb300</div>
      <div onClick={copy} className=" set bg-amber-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffa000</div>
      <div onClick={copy} className=" set bg-amber-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ff8f00</div>
      <div onClick={copy} className=" set bg-amber-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ff6f00</div>
    </div>
  </>
  )
}
