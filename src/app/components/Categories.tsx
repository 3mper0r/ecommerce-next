import React from 'react'
import Link from 'next/link'

const Categories = () => {
  return (
    <section>
        <ul className='flex items-center'>
            <Link href='/men'><ul className='text-white text-2xl uppercase p-3'>Men</ul></Link>
            <Link href='/women'><ul className='text-white text-2xl uppercase p-3'>Women</ul></Link>
        </ul>
    </section>
  )
}

export default Categories