import React, { useState } from 'react'
import CurrInputBox from './CurrInputBox'
import fetchCurrInfoHook from './fetchCurrInfoHook'

const CurrConverter = () => {

    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("inr")
    const [ammt,setAmmt]=useState(0)
    const [convertedAmmt,setConvertedAmmt]=useState(0)

    const currencyInfo = fetchCurrInfoHook(from)   
    const options = Object.keys(currencyInfo)

    const swaping=()=>{
        setFrom(to)
        setTo(from)
        setAmmt(convertedAmmt)
        setConvertedAmmt(ammt)
    }
    const submit=(e)=>{
        e.preventDefault();
        setConvertedAmmt(ammt*currencyInfo[to])
    }

  return (   
    <div className='text-center pb-4 pt-1 bg-black w-1/3 min-w-96 mx-auto rounded-lg mt-4'>
       <div className='text-xl font-bold text-amber-300 py-4'>Currency Converter</div> 
       <form onSubmit={submit}>
            <CurrInputBox label="From"  ammt={ammt} currencyList={options} onCurrencyChange={e=>setFrom(e)} onAmmtChange={e=>setAmmt(e)} selectedCur={from}/>
            <div 
                className='bg-violet-500 hover:bg-violet-600 cursor-pointer rounded-md p-1 w-16 text-sm mx-auto mt-3 -mb-2'
                onClick={swaping}
            >Swap</div>
            <CurrInputBox label="To" currencyList={options} onCurrencyChange={e=>setTo(e)} selectedCur={to} convertedAmmt={convertedAmmt}/>
            <button className='py-2 px-4 mt-3'>Submit</button>
        </form>  
    </div>
  )
}

export default CurrConverter