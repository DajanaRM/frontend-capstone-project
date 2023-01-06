import React from 'react'
import Menu from '../assets/salad.jpg'
import Banner from '../assets/restauranfood.jpg'

import Book from '../assets/book.jpg'
import Info from '../assets/lemon dessert.jpg'
import Logo2 from '../assets/Asset 20@4x.png'
import Header from './header'
import {Link} from 'react-router-dom'

const Main = () => {
    
return(
    <div className='App'>
       <Header />
      
        <main>
            <div className='banner'>
                <div className='lemon'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/book-a-table'><button className='reserve'>Reserve a Table</button></Link>
              
            </div>
            <img src={Banner}/>
            </div>
            <div className='specials'>
                <h1>This weeks specials!</h1>
                <Link to='/menu'><button className='reserve'>Online Menu</button></Link>
            </div>
            <div className='columns'>
                <div>
                   
                    <div className='section'>
                        
                            <img src={Menu}/>
                            <h2>Greek Salad</h2>
                            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis. Lacus luctus accumsan tortor posuere ac ut consequat. Et molestie ac feugiat sed lectus. Lacus sed viverra tellus in. Urna neque viverra justo nec ultrices. Nullam ac tortor vitae purus faucibus ornare. Sem fringilla ut morbi tincidunt.</p>
                           
                    </div>
                </div>
                <div>
                   
                    <div className='section'>
                    
                        <img src={Book}/>
                        <h2>Bruchetta</h2>
                         <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis. Lacus luctus accumsan tortor posuere ac ut consequat. Et molestie ac feugiat sed lectus. Lacus sed viverra tellus in. Urna neque viverra justo nec ultrices. Nullam ac tortor vitae purus faucibus ornare. Sem fringilla ut morbi tincidunt.</p>
                       
                    </div>
                </div>
                <div>
                   
                    <div className='section'>
                       
                        <img src={Info}/>
                         <h2>Lemon Dessert</h2>
                        <div>
                            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Sed enim ut sem viverra aliquet eget sit. Felis bibendum ut tristique et egestas quis.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </main> 
      
        <footer>
            <img src={Logo2}/>
            <div className='copyright'>Copyright Little Lemon</div>
        </footer>
        </div>
        )
}

export default Main       