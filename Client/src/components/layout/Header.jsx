import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
   render() {
      return (
         <nav className='navbar navbar-expand-lg bg-primary'>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
               <ul className='nav mx-auto'>
                  <li className='nav-item active'>
                     <Link to='/' className='nav-link text-white' href='#'>
                        <h3>Home</h3>
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Header;
