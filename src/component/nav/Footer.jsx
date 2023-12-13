import React from 'react'

export default function Footer() {
  return (
    <footer>
      <nav className='p-3 border-t-[1px] border-[#414c5f]'>
        <p className='text-center text-[#BCD0F7]'>Copyright © {new Date().getFullYear()} Anik. All Right Reserved</p>
      </nav>
    </footer>
  )
}