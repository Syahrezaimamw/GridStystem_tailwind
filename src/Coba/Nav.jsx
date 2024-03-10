import React from 'react'
import'./all.css'
const Nav = () => {
  return (
    <div className='flex  mt-9 h-30 items-center justify-between w-full'>
        <h1 className='text-blue-800 font-bold  text-2xl'>Logo</h1>
        <ul className='flex space-x-12 font-semibold text-slate-500 items-center'>
            <li className='text-blue-800 font-bold  '>Top</li>
            <li className=''>For Everyone</li>
            <li>features </li>
            <li>Preview </li>
            <li>License</li>
        </ul>
        <button className='text-sky-400 py-[6px] px-4 hover:bg-sky-400 hover:text-white duration-200 transition-all rounded-md bg-white text-lg font-bold'>Download</button>

      
    </div>
  )
}

export default Nav
