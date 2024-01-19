import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
        <h1 className='max-w-max font-logo text-white ml-2'><span className='logo text-red-500 larger'>Beast</span> Wear</h1>
    </Link>
  )
}

export default Logo