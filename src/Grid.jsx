import React from 'react'

const Grid = () => {
    return (
        <div className='bg-[rgb(247,245,238)] pt-5 pb-5'>
            <div className='grid   grid-cols-2  md:grid-cols-4 px-2 m-auto gap-3 xl:px-6'>

                <div className='h-15 rounded-lg bg-transparent aspect-[4/3]  sm:aspect-[16/9] md:aspect-[3/4] lg:aspect-[5/3] xl:aspect-[5/3] md:col-start-4 md:row-start-2'>
                    <h2 className='text-xl font-medium tracking-wider '>My Project React</h2>
                    <p className='mt-5 font-bold text-md  '>Article</p>
                    <p className=' font-bold text-md '>Previous demo</p>
                    <p className=' font-bold text-md '>Github</p>
                </div>
                <div className='h-15 rounded-lg bg-transparent aspect-[4/3] sm:aspect-[16/9] md:aspect-[3/4] lg:aspect-[5/3] xl:aspect-[5/3] md:col-start-2 md:row-start-2 flex '>
                    <p className='self-end font-bold'>@rimayu</p>
                </div>
                <div className='h-15 overflow-hidden rounded-lg group   bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 '>
                    <img src="https://source.unsplash.com/1000x600?lizard" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />
                </div>
                <div className='h-15 overflow-hidden rounded-lg ant)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 md:col-start-3'>
                    <img src="https://source.unsplash.com/1000x600?ant" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />

                </div>
                <div className='h-15 overflow-hidden rounded-lg elephant)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 '>

                    <img src="https://source.unsplash.com/1000x600?snake" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />
                </div>
                <div className='h-15 overflow-hidden rounded-lg crocodile)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000'>
                    <img src="https://source.unsplash.com/1000x600?elephants" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />

                </div>
                <div className='h-15 overflow-hidden rounded-lg eagle)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000'>

                    <img src="https://source.unsplash.com/1000x600?camel" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />
                </div>
                <div className='h-15 overflow-hidden rounded-lg pinguin)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 md:col-start-2'>

                    <img src="https://source.unsplash.com/1000x600?lion" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />
                </div>
                <div className='h-15 overflow-hidden rounded-lg bird)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 md:col-start-4'>

                    <img src="https://source.unsplash.com/1000x600?tiger" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />
                </div>
                <div className='h-15 overflow-hidden rounded-lg fish)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 '>
                    <img src="https://source.unsplash.com/1000x600?kanguru" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />

                </div>
                <div className='h-15 overflow-hidden rounded-lg lion)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 md:col-start-3'>
                    <img src="https://source.unsplash.com/1000x600?rabit" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />

                </div>
                <div className='h-15 overflow-hidden rounded-lg bg-[url(https://source.unsplash.com/1000x600?tiger)] group  bg-slate-400 aspect-[4/3] sm:aspect-[16/9]  md:aspect-[3/4] lg:aspect-[5/3] cursor-pointer xl:aspect-[5/3] hover:scale-95 transition-all duration-1000 md:col-start-3 md:row-start-5'>
                    <img src="https://source.unsplash.com/1000x600?kancil" className='h-full group-hover:scale-125 transition-all duration-700 ' alt="" />

                </div>
            </div>
        </div>
    )
}

export default Grid
