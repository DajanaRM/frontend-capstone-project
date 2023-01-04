import React from 'react'
import Menu from '../assets/menu.jpg'
import Banner from '../assets/banner.jpg'
import Logo from '../assets/logo.png'
import Book from '../assets/book.jpg'
import Info from '../assets/info.jpg'
import Logo2 from '../assets/Asset 18@4x.png'
import Heather from './heather'
import {Link} from 'react-router-dom'

const Main = () =>
{
return(
    <div className='App'>
       <Heather />
      
        <main>
            <div class='banner'>
                    <img src={Banner}/>
                <div class='promo'>
                    <h1>30% Off This Weekend</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis. Lacus luctus accumsan tortor posuere ac ut consequat.</p>
                </div>
            </div>
            <div class='columns'>
                <div>
                    <div class='portion portion1'></div>
                    <div class='section'>
                        <h2>Our New Menu</h2>
                            <img src={Menu}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis. Lacus luctus accumsan tortor posuere ac ut consequat. Et molestie ac feugiat sed lectus. Lacus sed viverra tellus in. Urna neque viverra justo nec ultrices. Nullam ac tortor vitae purus faucibus ornare. Sem fringilla ut morbi tincidunt.</p>
                            <Link to='/menu'>See our new menu</Link>
                    </div>
                </div>
                <div>
                    <div class='portion'></div>
                    <div class='section'>
                    <h2>Book a Table</h2>
                        <img src={Book}/>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis. Lacus luctus accumsan tortor posuere ac ut consequat. Et molestie ac feugiat sed lectus. Lacus sed viverra tellus in. Urna neque viverra justo nec ultrices. Nullam ac tortor vitae purus faucibus ornare. Sem fringilla ut morbi tincidunt.</p>
                         <Link to='/book-a-table'>Book your table now</Link>
                    </div>
                </div>
                <div>
                    <div class='portion'></div>
                    <div class='section'>
                        <h2>Opening Hours</h2>
                        <img src={Info}/>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis.</p>
                            <p> Mon - Fri: 2pm - 10pm<br/><br/>
                              Sat: 2pm - 11pm<br/><br/>
                              Sun: 2pm - 9pm
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </main> 
      
        <footer>
            <img src={Logo2}/>
            <div class='copyright'>Copyright Little Lemon</div>
        </footer>
        </div>
        )
}

export default Main       