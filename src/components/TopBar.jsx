import React, { useState, useEffect } from 'react';
import { ReactComponent } from '../SideMenuButton.svg';
import '../style/TopBar.css';

const TopBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

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
        <span className='credit'>Made by Eslam</span>
      </header>
      <button className='sideBarButton'>
        <ReactComponent className='sideBarButtonIcon'  />
      </button>
    </div>
  );
};

export default TopBar;
