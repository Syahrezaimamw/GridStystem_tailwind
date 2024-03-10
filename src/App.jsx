import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const[theme,setTheme]=useState('light')
  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')

    }

  },[theme])

  function switchMode(){
    setTheme(theme === 'dark'?'light':'dark' )
  }

  return (
<>
    <div className='w-full flex flex-col justify-start items-center h-[200vh] dark:bg-slate-900'>

      <div className='w-11/12 text-2xl leading-6 mt-5 dark:text-white group '>
        <h1 className='text-5xl font-bold bg-gradient-to-br to-blue-900 bg-clip-text text-transparent from-teal-400 text-orange-500'>Penempatan barang searah terbitnya matahari dalam upaya pelindungan diri dari roh jahat</h1>
        <p className='mt-8'>Danish intro </p>
        <p className='mt-5 text-2xl  w-10/12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nobis quam ex vero quibusdam <a href="" className='font-semibold visited:text-purple-800 underline'>linkk</a> delectus laudantium ipsum optio temporibus maxime, ipsam nesciunt? Quam quas temporibus recusandae, deserunt molestias perspiciatis sequi.</p>
        <blockquote className='italic text-2xl groy text-gray-500 my-5 font-thin group-dark:text-white dark:text-white '>dahulu hiduplah seorang pasta yang suka bermai pubg mobile</blockquote>
        <p className='mt-3 leading-8 w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eius! Magnam, voluptatibus officiis saepe quasi enim vel repudiandae aliquam quod quia voluptate dignissimos ex similique obcaecati minima exercitationem! Tempore, quam.</p>
      </div>
      <div className='w-1/2 ms-10 mt-[50px] self-start h-96  bg-fixed bg-center border-4 border-slate-600 bg-cover rounded-t-2xl h-full  bg-no-repeat' style={{ backgroundImage: 'url(https://source.unsplash.com/1000x600?vilage)' }}>

      </div>
      <div className='w-1/2 ms-10 mt-[50px] self-start h-96 h-full border-slate-600 border-4 bg-fixed bg-center bg-cover flex bg-no-repeat ' style={{ backgroundImage: 'url(https://source.unsplash.com/1000x600?vilage)' }}>

        <div className='w-[215px] h-[150px] m-auto bg-white/30 backdrop-blur-lg'>
          login
        </div>
      </div>
      <div className='w-1/2 ms-10 mt-[50px] self-start h-96 h-full border-slate-600 border-4 bg-fixed bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: 'url(https://source.unsplash.com/1000x600?vilage)' }}>

      </div>
      <button className='mt-5 bg-blue-500 px-6 py-5 rounded-lg text-white font-semibold hover:bg-blue-600 active:scale-90 focus:ring cursor-pointer' onClick={switchMode}>Click Here </button>
      <div className='w-1/2 hover:bg-sky-700 dark:bg-black  group mt-5 rounded-lg cursor-pointer hover:text-white shadow-lg px-6 py-5 ' >
        <h1 className='text-blue-900 text-xl font-semibold group-hover:text-white selection:bg-sky-400 dark:text-white' >Menu baru</h1>
        <p className='text-blue-900 first-line:uppercase first-letter:text-6xl first-letter:mr-3 first-letter:float-left accent-pink-500 group-hover:text-white selection:bg-sky-400 dark:text-white'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora odit unde quasi corrupti nemo necessitatibus voluptas. Ipsum, labore totam voluptas a esse voluptates. Porro voluptatibus suscipit ea numquam labore?
        </p>
      </div>
      <button className="transition  mt-9 py-5 px-6 rounded-3xl text-white font-semibold ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." >
        Save Changes
      </button>


      <div class="grid grid-cols-3 divide-x-8 mt-64">
        <div className='w-64 h-64 bg-gray-600'>01</div>
        <div className='w-64 h-64 bg-gray-600 flex'>

        </div>

        <div className='w-64 h-64 bg-gray-600'>03</div>
      </div>
    </div>
      <div className='max-w-lg mt-4 mb-4  m-auto border relative border-slate-300 rounded-xl shadow-lg shadow-slate-300 py-5 px-5 '>
        <div className='size-3 bg-sky-400 rounded-full absolute right-6 animate-ping'></div>
        <div className='size-3 bg-sky-400 rounded-full absolute right-6 '></div>
        <label htmlFor="email" className='ps-2 '> 
          <span className='mr-5 text-xl font-semibold cursor-pointer text-slate-500 after:content-["*"] after:ml-1 after:text-sky-400'>Email</span>
        </label>
        <br />
       <input type="email" className='py-2 mt-3 px-2 outline-none font-medium text-lg w-full focus:ring-2 focus:ring-sky-400 invalid:text-pink-600 invalid:focus:ring-pink-600 peer'  id='email' placeholder='Masukan email...' />
       <p className='text-lg ml-2 mt-2 text-end text-pink-600 hidden peer-invalid:block '>Email tidak valid</p>

      </div>
    

      <div className='mt-4 mb-4 size-[250px] relative bg-sky-500 m-auto rounded-lg flex items-center group'> 
      <p className='m-auto'>hello world</p>
      <div className='w-full h-full absolute top-0 rounded-lg mb-4 bg-sky-900 m-auto  transition cursor-pointer group-hover:rotate-180 group-hover:-translate-y-[249px]'></div>
      <div className='w-full h-full absolute top-0 rounded-lg mb-4 bg-sky-900 m-auto  transition cursor-pointer group-hover:rotate-180 group-hover:-translate-x-[249px]'></div>
      <div className='w-full h-full absolute top-0 rounded-lg mb-4 bg-sky-900 m-auto  transition cursor-pointer group-hover:rotate-180 group-hover:translate-y-[249px]'></div>
      <div className='w-full h-full absolute top-0 rounded-lg mb-4 bg-sky-900 m-auto  transition cursor-pointer group-hover:rotate-180 group-hover:translate-x-[249px]'></div>
      
      </div>
      <div className='size-[250px] mt-4 rounded-lg mb-4 bg-sky-400 m-auto animate-yaya'></div>

      <div className='h-40 container m-auto bg-red-900 px-4'>d</div>

      <div className='mt-4 container m-auto px-6  sm:max-w-lg md:max-w-2xl xl:max-w-full xl xl:px-20 2xl:bg-orange-900' >
        <h3 className='text-3xl text-slate-800 font-bold  xl:text-[60px] xl:mb-8'>Kemunculan Spesies <span className='text-orange-500'>
           Kadal</span> Baru</h3>
           <div className='flex flex-col items-start'>
            <img src="https://source.unsplash.com/1000x600?lizard" className='mt-5 xl:h-64 xl:float-left  ' alt="" />
            {/* <div> */}

            <a href="" className='mt-2 text-blue-400 underline underline-offset-2 visited:text-purple-600'>Info by liputan 7 In</a>
            <p className='mt-5 text-lg text-pretty xl:mt-8 xl:pe-64' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore corrupti ullam ad, voluptatem necessitatibus dolorem placeat inventore suscipit natus minima cupiditate numquam soluta beatae quos, eaque, libero quas sequi. Impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio accusantium sint quis voluptatum qui placeat? Nemo, nam excepturi natus, iusto doloribus aperiam eaque architecto ut nesciunt facilis, placeat maiores.</p>
            {/* </div> */}
            <button className='px-3 d-flex items-center py-1 mt-5 mb-4 rounded-md text-white font-semibold bg-orange-500 ' >View All
            <span className='ms-3 hidden xl:inline-block'>🍪</span>
            
            </button>

           </div>
         </div>
      </>
  )
}

export default App
