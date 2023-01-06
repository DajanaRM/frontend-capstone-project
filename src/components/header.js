import React from 'react'
import Menu from '../assets/menu.jpg'
import Banner from '../assets/banner.jpg'
import Logo from '../assets/Logo.svg'
import Book from '../assets/book.jpg'
import Info from '../assets/info.jpg'
import Logo2 from '../assets/Asset 18@4x.png'
import { Link } from "react-router-dom"

const Header = () =>
{
return(
    <>
     <header>
     <nav>
            <img src={Logo} alt='logo' className='topLogo'/>
            
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/book-a-table'>Reservations</Link>
                <Link to='/about'>About</Link>
                <Link to='/order'>Order Online</Link> 
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    </>
        )
}

export default Header       