import React from 'react'
import toast from 'react-hot-toast'

export default function Yellow() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-yellow-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Yellow</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-yellow-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fffde7</div>
      <div onClick={copy} className=" set bg-yellow-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fff9c4</div>
      <div onClick={copy} className=" set bg-yellow-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fff59d</div>
      <div onClick={copy} className=" set bg-yellow-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fff176</div>
      <div onClick={copy} className=" set bg-yellow-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffee58</div>
      <div onClick={copy} className=" set bg-yellow-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffeb3b</div>
      <div onClick={copy} className=" set bg-yellow-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fdd835</div>
      <div onClick={copy} className=" set bg-yellow-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#fbc02d</div>
      <div onClick={copy} className=" set bg-yellow-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f9a825</div>
      <div onClick={copy} className=" set bg-yellow-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f57f17</div>
    </div>
  </>
  )
}
