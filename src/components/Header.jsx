import React from 'react';
import "../stylesheet/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
    <section>
        <h1>NovelNest</h1>
    </section>
        <nav>
            <ul>
           <Link to="/" className='link'><li>Home</li></Link> 
                <li>Shop</li>
              <Link to="/addbook"  className='link'><li>Add Book</li></Link>  
                <li>Shop</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header