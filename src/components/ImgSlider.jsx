import React, { useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";

export default function ImgSlider() {
    const [state , changeState] = useState(false);
  return (
    <div className='h-screen w-full bg-gray-800 flex flex-col items-center justify-center gap-3'>
            <div className='w-[40%] h-[40%] bg-yellow-200 rounded-lg display flex overflow-hidden'>
                <img className= {`shrink-0 w-full h-full transition-transform duration-500 ease-in-out delay-100 ${state===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover object-bottom`} src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className= {`shrink-0 w-full h-full transition-transform duration-500 ease-in-out delay-100 ${state===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover object-bottom`} src="https://images.unsplash.com/photo-1578301977886-43be7b983104?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <button onClick={()=>changeState(()=>!state)} className='h-12 w-12 bg-white rounded-full'>
                <span className='flex items-center justify-center'>
                    <MdArrowForwardIos size={'2em'}/>
                </span>
            </button>
        
    </div>
  )
}
