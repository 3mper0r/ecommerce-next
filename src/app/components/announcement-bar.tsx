import Link from 'next/link'
import React from 'react'

const AnnouncementBar = () => {
  return (
    <nav className='flex items-center text-white bg-black justify-evenly py-2'>
        <Link href="/men"><button className='uppercase outline outline-2 px-8 py-0.5'>Men</button></Link>
        <p className='text-center font-semibold tracking-wider'>NEW HERE? Get 15% off everything! <span className='block tracking-widest'>With code: HELLOBEAST</span></p>
        <Link href="/women"><button className='uppercase outline outline-2 px-6 py-0.5'>Women</button></Link>
    </nav>
  )
}

export default AnnouncementBar