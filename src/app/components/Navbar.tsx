import React from 'react'
import Logo from './Logo'
import Categories from './Categories'
import Searchbar from './Searchbar'
import UserIcons from './UserIcons'
import Footer from './Footer'

const Navbar = () => {
  return (
    <nav className='flex justify-evenly items-center  bg-navbar'>
        <Logo />
        <Categories />
        <Searchbar />
        <UserIcons />
    </nav>
  )
}

export default Navbar