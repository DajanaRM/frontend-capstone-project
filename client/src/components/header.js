import React, {useEffect, useState} from 'react'
import Logo from '../assets/Logo.svg'
import { NavLink, Link, useLocation } from "react-router-dom"

const Header = () => {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
       const handleScroll = () => {
       let moving = window.pageYOffset
 
       setVisible(position > moving);
       setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? "visible" : "hidden";
return(
        <header className={cls}>
            <nav>
                <Link to='/'><img src={Logo} fetchpriority="high" alt='logo' className='topLogo'/></Link>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink id='book-a-table' to='/book-a-table' >Reservations</NavLink>
                <NavLink to='/about'>About</NavLink>
                
            </nav>
        </header>
        )
}

export default Header       