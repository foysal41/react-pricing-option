import React from 'react';

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
    return (
        <div>
            <nav>
                <ul className='flex justify-center items-center'>
                    {
                        navData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;