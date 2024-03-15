import React, { useEffect, useState } from 'react'
import data from '../ImgUrls.json';

const ImgSlider = () => {
    const [cur,setCur]=useState(0)
   
  return (
    <>
        <div className='text-center pb-4 pt-1 bg-black w-1/3 min-w-96 mx-auto rounded-lg mt-4'>
        <div className="flex justify-center flex-col items-center">
            <div className='text-xl font-bold text-amber-300 py-4'>Image Slider</div> 
            <div className='flex'>
                <button onClick={()=>{setCur(val=>(val===0?data.Imgs.length-1:val-1))}}>Pre</button>
                <img  src={data.Imgs[cur]} width={220} />
                <button onClick={()=>{setCur(val=>(val===data.Imgs.length-1?0:val+1))}}>Next</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default ImgSlider