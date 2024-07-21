"use client";

import Header from '@/components/Header/Header'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <Header />
        <div className=' grid grid-rows-4 grid-flow-col gap-4 h-screen w-screen mt-30 p-32'>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
            <div className=' bg-gray-100 w-full h-full'></div>
        </div>
    </div>
  )
}

export default Loading