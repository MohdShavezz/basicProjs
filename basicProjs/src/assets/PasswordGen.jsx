import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGen = () => {

    const [length,setLenght]=useState(8)
    let [pass,setPass]=useState('')
    const [numAllowed,setNumAllowed]=useState(false)
    const [charAllowed,setCharAllowed]=useState(false)
    const passwordRef=useRef(null)

    function copyToClip(){
        navigator.clipboard.writeText(pass)
        passwordRef.current.select()
    }

    const generatePass=useCallback(()=>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numAllowed) str+="0123456789"
        if(charAllowed) str+="!@#$%^&*+-"
        pass=''
        for (let index = 0; index < length; index++) {
            let rand = Math.floor(Math.random()* str.length+1);
            pass += str.charAt(rand)
        }
       setPass(pass)
    },[length,numAllowed,charAllowed])
    useEffect(()=>{
        generatePass()
    },[length,numAllowed,charAllowed])

  return (
    <div className='text-center p-4 bg-black w-1/3 min-w-96 mx-auto rounded-lg mt-8'>
        <h2 className='text-xl font-bold text-amber-300 '>Password Generator</h2>
        <div className='flex my-3'>
            <input 
            type='text' 
            placeholder='password'
            value={pass}
            ref={passwordRef}
            readOnly
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <button
                onClick={copyToClip}
            >Copy</button>
        </div>
        <div className='flex justify-evenly'>
            <input 
            type='range'
            min={6} max={100}
            value={length}
            onChange={(e)=>setLenght(e.target.value)}
            />
            <label className='mr-2'>Length:{length}</label>

            <input 
            id='checkNum'
             type='checkbox'
             defaultChecked={numAllowed}
             onChange={()=>setNumAllowed(val=>!val)}
            />
             <label htmlFor='checkNum' className='mr-2'>Numebrs</label>

             <input 
             id='checkChar'
             type='checkbox'
             defaultChecked={charAllowed}
             onChange={()=>setCharAllowed(val=>!val)}
            />
             <label htmlFor='checkChar' className='mr-2'>Characters</label>
        </div>
    </div>
  )
}

export default PasswordGen