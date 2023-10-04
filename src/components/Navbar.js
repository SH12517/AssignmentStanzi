import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='nav-main'>
        <div className='nav-container'>
            
                <ul>
                    <Link  to='/mumbai'>
                    <li>Mumbai</li>

                    </Link>
                    <Link to='/newyork'>
                    <li>New York</li></Link>
                    <Link to='/'>
                    <li>London</li>  

                    </Link>
                    <Link to='/paris'>
                    <li>Paris</li>

                    </Link>
                </ul>
            
        </div>
    </div>
  )
}
export default Navbar;