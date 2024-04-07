import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data,reference}) {
  return (
       <motion.div drag dragConstraints={reference}  whileDrag={{scale:1.1}} dragElastic={.5} className=' relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white overflow-hidden'>
        <div className='flex flex-col items-start justify-center gap-5 p-[20px] py-[30px] pt-[50px]'>
      <div><FaFileCode size="1.5rem"/>
         </div>
         <div><p className='text-md mt-5 leading-tight'>{data.description}</p></div>

<div className=' relative flex justify-between items-center py-[8px] w-full mt-[15px]'> 
        <h5>{data.filesize}</h5>
        <span className='w-[1.6rem] h-[1.6rem] bg-zinc-500 rounded-full flex items-center justify-center'>
            {data.close ? <IoCloseOutline size=".85rem" color='#fff'/>
: <FaCloudDownloadAlt size=".85rem" color='#fff'/>}

        </span>

    </div>
    </div>
    {
        data.tag.isOpen ? (<div className={`footer absolute bottom-0 left-0 w-full h-[45px] flex items-center justify-center ${data.tag.color === 'blue' ? "bg-blue-600" :"bg-green-600" }`}>
        <h3 className='font-semibold text-zinc-300'>{data.tag.downloaded ? " Downloaded Already " : "Download Now !"}</h3>
    </div>) : null
    }

       </motion.div>
    
  )
}

export default Card
