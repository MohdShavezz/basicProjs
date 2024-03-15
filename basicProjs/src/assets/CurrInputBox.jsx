import React from 'react'

const CurrInputBox = ({label,ammt,currencyList=[],onCurrencyChange,onAmmtChange,selectedCur="usd",convertedAmmt}) => {

  return (
    <div className='flex justify-around'>
        <div className='flex flex-col'>
            <label htmlFor='from' className='text-start'>{label}</label>
            <input type="number" onChange={e=>onAmmtChange && onAmmtChange(Number(e.target.value))} value={label === "To" ? convertedAmmt : ammt} readOnly={label === "To" ? true : false}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor='currType'>Currency Type</label>
            <select onChange={curr=>onCurrencyChange && onCurrencyChange(curr.target.value)} 
            value={selectedCur} 
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                {
                    currencyList?.map((data,ind)=>{
                        return <option key={ind}>{data}</option>
                    })
                }
                
            </select>
        </div>
    </div>
  )
}

export default CurrInputBox