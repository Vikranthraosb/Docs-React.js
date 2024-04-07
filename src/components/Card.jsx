import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Card() {
  return (
    <div>
       <div className=' relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white p-5 overflow-hidden'>
        <div className='p-5 flex-col items-center justify-between'>
      <span><FaFileCode />
        </span> 
<p className='text-xs mt-5 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
<div className='flex justify-between items-center p-[20px] px-10'> 
        <h5>.9MB</h5>
        <span className='w-5 h-5 bg-green-800 rounded-full flex items-center justify-center'>
        <FaCloudDownloadAlt size=".7rem" color='#fff'/>

        </span>

    </div>
    </div>
<div className='footer absolute bottom-0 bg-sky-700 left-0 w-full h-[60px]'>
    <h3></h3>
</div>
       </div>
    </div>
  )
}

export default Card
