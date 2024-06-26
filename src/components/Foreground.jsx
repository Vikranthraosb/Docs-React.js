import React, { useRef, useState } from 'react'
import Card from './Card'
function Foreground() {
const ref =useRef(null);
const data =[
{description :"Card number One....", filesize:"1.5 MB", close:true, tag:{isOpen:true,downloaded:true,color:"blue"}},
{description :"Card number Two....", filesize:"2.5 MB", close:false, tag:{isOpen:true,downloaded:false,color:"green"}},
{description :"Card number Three....", filesize:"4.5 MB", close:true, tag:{isOpen:true,downloaded:true,color:"blue"}},
{description :"Card number Four....", filesize:"6.5 MB", close:false, tag:{isOpen:true,downloaded:false,color:"blue"}}

  ];

  return (
    <div >
            <div ref={ref} className='w-full h-[100vh] fixed z-[3] fixed top-0 left-0 flex gap-5 flex-wrap p-5'>
            {data.map((item,index)=>(
              <Card data={item} reference={ref}/>
            ))}
            </div>
    </div>
  )
}

export default Foreground