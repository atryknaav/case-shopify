import React from 'react'
import Option from './Option'

const Header = () => {
  return (
    <div className=' flex justify-between gap-20 p-3 fixed w-screen shadow-sm top-0 left-0 z-10 bg-white'>
        <div className=' flex justify-between w-[25%]'>
            <Option name={'Products'} />
            <Option name={'Outdoor Furniture'} />
            <Option name={'Our Material'} />
            <Option name={'About Us'} />
        </div>

        <div className=' flex justify-center w-[50%]'>
            <p>DANGARDEN</p>
        </div>

        <div className=' flex justify-between gap-6 w-[25%]'>

            <input type="text" placeholder='What are you looking for?' className=' border-b-2 border-black px-3'/>

            <select name="currency" id="currency-select" className=' font-bold'>
                <option value="usd">USD$</option>
                <option value="eur">EUR&#8364;</option>
                <option value="uah">UAH&#8372;</option>
            </select>

        </div>

    </div>
  )
}

export default Header