import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Card() {
  return (
    <div>
       <div className=' relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white overflow-hidden'>
        <div className='flex flex-col items-start justify-center gap-5 p-[20px] py-[30px]'>
      <div><FaFileCode size="1.5rem"/>
         </div>
         <div><p className='text-xs mt-5 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>

<div className=' relative flex justify-between items-center py-[8px] w-full mt-[15px]'> 
        <h5>.9MB</h5>
        <span className='w-[1.6rem] h-[1.6rem] bg-zinc-500 rounded-full flex items-center justify-center'>
        <FaCloudDownloadAlt size=".85rem" color='#fff'/>

        </span>

    </div>
    </div>
<div className='footer absolute bottom-0 bg-sky-700 left-0 w-full h-[60px] flex items-center justify-center'>
    <h3 className='font-semibold text-zinc-300'>Download Now</h3>
</div>
       </div>
    </div>
  )
}

export default Card
