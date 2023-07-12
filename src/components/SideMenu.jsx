import React from 'react';
import { sideMenuStateAtom } from './TopBar';
import { ReactComponent as CloseButton } from '../icons/close.svg';
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';

const SideMenu = () => {
    const [sideMenuState, setSideMenuState] = useAtom(sideMenuStateAtom)
    const [style, setStyle] = useState({})
    useEffect(() => {
        if (sideMenuState) {
            setStyle({ right: '0px' })
        } else {
            setStyle({ right: '-300px' })
        }


    }, [sideMenuState]);
    return (
        <div style={style} className="sideMenu">
            <div style={{ margin: '10px' }} onClick={() => setSideMenuState(false)}>
                <CloseButton className='CloseButton' />
            </div>
            <div style={{
                height: '60%',
                display: 'flex',
                alignItems: 'center',
                margin: '10px',
                color: 'gray',
                textAlign: 'center',
                fontSize: '20px'
            }}>
                coming soon the ability to store conversations
            </div>
        </div>
    );
}

export default SideMenu;