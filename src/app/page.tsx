'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SplashScreen = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/home')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-black'>
      <h1 className='text-8xl font-bold text-white mb-4 animate-pulse'>Her Lead</h1>
      <p className='text-xl text-gray-300'>Empowering Women in Leadership</p>
    </div>
  )
}

export default SplashScreen
