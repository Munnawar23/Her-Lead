'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const CareerPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">Careers</h1>
      <p className="text-xl md:text-2xl text-gray-400">Career page will be here</p>
      
      <button 
        onClick={() => router.push('/home')}
        className="mt-12 px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-sm cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  )
}

export default CareerPage
