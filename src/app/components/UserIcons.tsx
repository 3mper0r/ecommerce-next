import { ShoppingCart, Heart, User } from 'lucide-react'
import React from 'react'

const UserIcons = () => {
  return (
    <aside className='flex cursor-pointer'>
        <User color='white' />
        <Heart color='white' />    
        <ShoppingCart color='white' />
    </aside >
  )
}

export default UserIcons