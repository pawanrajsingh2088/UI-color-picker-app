import React from 'react'
import toast from 'react-hot-toast'
export default function Red() {
  const copy = (e)=>{
    const Text = e.target.innerText
    navigator.clipboard.writeText(Text)
    toast.success("Copied")
  }
  return (
    <>
        <h1 className=" flex justify-center text-red-500 font-extrabold underline items-center text-4xl mb-3 mt-3">Red</h1>
      <div className=" curve grid grid-cols-5 ml-4 p-4">
        <div onClick={copy} className=" set bg-red-50 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffebee</div>
        <div onClick={copy} className=" set bg-red-100 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ffcdd2</div>
        <div onClick={copy} className=" set bg-red-200 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ef9a9a</div>
        <div onClick={copy} className=" set bg-red-300 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e57373</div>
        <div onClick={copy} className=" set bg-red-400 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#ef5350</div>
        <div onClick={copy} className=" set bg-red-500 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#f44336</div>
        <div onClick={copy} className=" set bg-red-600 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#e53935</div>
        <div onClick={copy} className=" set bg-red-700 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#d32f2f</div>
        <div onClick={copy} className=" set bg-red-800 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#c62828</div>
        <div onClick={copy} className=" set bg-red-900 w-40 h-40 flex justify-center items-center cursor-pointer rounded-3xl text-2xl font-bold mb-2">#b71c1c</div>
      </div>
    </>
  )
}
