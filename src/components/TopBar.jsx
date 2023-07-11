import React, { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { ReactComponent as SideMenuButton } from '../icons/SideMenuButton.svg';
import '../style/TopBar.css';
export const sideMenuStateAtom = atom(false)
const TopBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [sideMenuState, setSideMenuState] = useAtom(sideMenuStateAtom)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsHidden(false); // Scrolling upwards
      } else {
        setIsHidden(true); // Scrolling downwards
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`top-bar ${isHidden ? 'hidden' : ''}`}>
      <header className='header'>
        <span className='name'>G.A.M</span>
        <span className='credit'>
          Made by Eslam
          <span style={{
            fontSize: '15px',
            color: 'gray',
            position: 'relative',
            top: '-20px',
            left: '-70px'
          }}>
            BETA version 0.1.0
          </span>
        </span>
      </header>
      <button
        className='sideBarButton'
        onClick={() => sideMenuState ? setSideMenuState(false) : setSideMenuState(true)}
      >
        <SideMenuButton className='sideBarButtonIcon' />
      </button>
    </div>
  );
};

export default TopBar;
