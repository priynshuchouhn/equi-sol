import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='py-16 px-6 grid lg:grid-cols-3 bg-gray-50'>
      <div className='mb-8'>
        <h1 className='text-3xl mb-5 font-semibold'>EquiSol</h1>
        <p>Trade Company Shares on the Blockchain</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mb-8'>
        <div className='lg:col-span-2'>
            <p className='text-xl font-semibold'>Quick Links</p>
        </div>
        <ul>
            <li><Link className='text-gray-400 hover:text-gray-800 hover:underline' href={'#'}>About</Link></li>
            <li><Link className='text-gray-400 hover:text-gray-800 hover:underline' href={'#'}>Contact</Link></li>
            <li><Link className='text-gray-400 hover:text-gray-800 hover:underline' href={'#'}>Privacy Policy</Link></li>
        </ul>
        <ul>
            <li><Link className='text-gray-400 hover:text-gray-800 hover:underline' href={"#"}>Blog</Link></li>
            <li><Link className='text-gray-400 hover:text-gray-800 hover:underline' href={"#"}>Story</Link></li>
            <li><Link className='text-gray-400 hover:text-gray-800 hover:underline' href={"#"}>Support</Link></li>
        </ul>
      </div>
      <div className='mb-8 order-first lg:order-last'>
        <p className='text-xl font-semibold mb-3'>Contact us</p>
        <p className='text-gray-500 mb-5'>We have a great support team to help you</p>
        <div className='flex gap-2'>
            <Input placeholder='Enter your email'/>
            <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

export default Footer
