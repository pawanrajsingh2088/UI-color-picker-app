import React from 'react'
import toast from 'react-hot-toast'

export default function Orange() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-orange-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Orange</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-orange-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fff3e0</div>
      <div onClick={copy} className=" set bg-orange-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffe0b2</div>
      <div onClick={copy} className=" set bg-orange-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffcc80</div>
      <div onClick={copy} className=" set bg-orange-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffb74d</div>
      <div onClick={copy} className=" set bg-orange-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffa726</div>
      <div onClick={copy} className=" set bg-orange-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ff9800</div>
      <div onClick={copy} className=" set bg-orange-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fb8c00</div>
      <div onClick={copy} className=" set bg-orange-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f57c00</div>
      <div onClick={copy} className=" set bg-orange-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ef6c00</div>
      <div onClick={copy} className=" set bg-orange-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e65100</div>
    </div>
  </>
  )
}
