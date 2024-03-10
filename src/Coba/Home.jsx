import React from 'react'
import Nav from './Nav'
const Home = () => {
  return (
    <>
    <div className='flex flex-col items-center bg-[rgb(187,204,230)] h-[100vh]'>
        <div className="container max-w-7xl  flex justify-center h-20" style={{zIndex:1}} >
            <Nav/>
        </div>
        <div className='max-w-7xl container mt-9  h-[90vh] flex items-center'>
            <div className='w-1/2'>s</div>
            <div> s</div>
        </div>
        {/* <div className='rotate-[0deg] origin-top'> */}

            {/* <div className=' absolute bg-gradient-to-t from-sky-600 to-sky-400'id='jajargenjang' ></div> */}
        {/* </div> */}
      
    </div>
    </>
  )
}

export default Home
