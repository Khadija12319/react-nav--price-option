import { useState } from "react";
import Link from "../Link/Link";
// import PropTypes from 'prop-types'; 
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: '404', path: '*' }
      ];  
      const [open , setOpen] =useState(false);  
    return (  
        <nav className="text-black p-6 bg-yellow-200"> 
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose className="text-2xl"/>: <RiMenu2Fill className="text-2xl"/>
                }
            </div>
            <ul className={`md:flex md:gap-4 md:static absolute duration-1000 ${open? 'top-16' : '-top-60'} bg-yellow-200 md:shadow-none shadow-lg px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

NavBar.propTypes={

}

export default NavBar;