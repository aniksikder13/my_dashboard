import React from 'react'
import styles from './nav.module.css'


export default function Header() {



  return (
    <header className='bg-[#19243A]'>
        <nav className={styles.nav_header}>
            <ul className={styles.navList}>
                <li>
                    <img 
                        alt='vite'
                        src='/public/vite.svg'
                        className={styles.brand_logo}
                    />
                </li>
                <li>
             
              
                </li>
            </ul>
        </nav>
    </header>
  )
}