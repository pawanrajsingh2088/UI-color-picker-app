import React from 'react'
import toast from 'react-hot-toast'

export default function Lime() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
    <h1 className="flex justify-center text-lime-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Lime</h1>
    <div className=" curve grid grid-cols-5 ml-4 p-4">
      <div onClick={copy} className=" set bg-lime-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f9fbe7</div>
      <div onClick={copy} className=" set bg-lime-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f0f4c3</div>
      <div onClick={copy} className=" set bg-lime-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e6ee9c</div>
      <div onClick={copy} className=" set bg-lime-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#dce775</div>
      <div onClick={copy} className=" set bg-lime-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#d4e157</div>
      <div onClick={copy} className=" set bg-lime-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#cddc39</div>
      <div onClick={copy} className=" set bg-lime-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#c0ca33</div>
      <div onClick={copy} className=" set bg-lime-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#afb42b</div>
      <div onClick={copy} className=" set bg-lime-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#9e9d24</div>
      <div onClick={copy} className=" set bg-lime-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#827717</div>
    </div>
  </>
  )
}
