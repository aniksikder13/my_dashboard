import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import styles from './nav.module.css'


export default function Header() {
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      // Navigation Link lists
      const navList= <ul className={`${styles.navList} flex items-center`}>
      <li>
          <a href='#'>
              Dashboard
          </a>
      </li>
      <li>
          <a href='#'>
              My Business
          </a>
      </li>
      <li>
          <a href='#'>
              Analytics
          </a>
      </li>
      <li>
          <a href='#'>
              Analytics
          </a>
      </li>
      <li>
          <a href='#'>
              Revenue
          </a>
      </li>
      {window.innerWidth>645 && <li>
          <img 
              alt='vite'
              src='https://cott.org.tt/membersworksystem/external/assets/avatars/profile-pic.jpg'
              className={styles.profile_img}
          />
      </li>}
  </ul>


  return (
    <header className='bg-[#19243A]'>
        <nav className={styles.nav_header}>
            <div>
                <img 
                    alt='vite'
                    src='/public/vite.svg'
                    className={styles.brand_logo}
                />
            </div>
            {navList}

            {/* Navigation link lists for Small device */}
            <div className={styles.mobileNav}>
                {[ 'right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon sx={{color:'white'}} />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <Box
                            sx={{ width: 250, backgroundColor: '#19243A', height: '100%' }}
                            role="presentation"
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <h2 className='border-b-[1px] border-b-[#0E1526] p-3 flex items-center justify-between'>
                                <img 
                                    alt='vite'
                                    src='https://cott.org.tt/membersworksystem/external/assets/avatars/profile-pic.jpg'
                                    className={styles.profile_img}
                                />
                                <span onClick={toggleDrawer(anchor, false)}>
                                    <CloseIcon sx={{color:'white'}} />
                                </span>
                            </h2>
                            {navList}
                        </Box>
                    </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    </header>
  )
}