import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav className='flex justify-between mx-10 mt-4'>

        <span className='flex gap-2' onClick={() => setOpen(!open)}> {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}


          <ul className={`md:hidden ${open ? 'top-7' : '-top-40'} absolute duration-1000`}>
           
              {
                navData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
              }
           

          </ul>
          <h3>Hello</h3>
        </span>




        <ul className='flex justify-center items-center'>
          {
            navData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
          }
        </ul>
        <button>SignIn</button>
      </nav>
    </div>
  );
};

export default NavBar;