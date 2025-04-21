import React from 'react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 w-full">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="PicPost" className="h-6 w-auto object-contain" />
        <span className="text-pink-500 font-bold text-xl">OMAV</span>
      </div>
      <button><Link
      to='/profile'
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
        Profile
      </Link></button>
      <button
      onClick={() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      }}
      className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition'
      >
      Logout
      </button>
    </div>
  </nav>
  )
}

export default Navbar
