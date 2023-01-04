import React from 'react'
import Menu from '../assets/menu.jpg'
import Banner from '../assets/banner.jpg'
import Logo from '../assets/logo.png'
import Book from '../assets/book.jpg'
import Info from '../assets/info.jpg'
import Logo2 from '../assets/Asset 18@4x.png'
import { Link } from "react-router-dom"

const Heather = () =>
{
return(
    <>
     <header>
            <img src={Logo} alt='logo' class='topLogo'/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/book-a-table'>Book</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    </>
        )
}

export default Heather       