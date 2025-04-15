import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-black text-white px-6 py-4 flex items-center justify-between shadow-md'>
        <h1 className='text-xl font-bold text-pink-500'>OMAV</h1>
        <button className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition'>
            Profile
        </button>
      </nav>
    </div>
  )
}

export default Navbar
