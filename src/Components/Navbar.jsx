import { useState } from 'react'
import './styles/navbar.css'
import navbarLogo from '../assets/Logo-navbar-white.png'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const showSidebar = () => setToggle(!toggle);

    return (
        <nav id="navbar">
            <a href='#'><img src={navbarLogo} alt='Camaleon Studio logo' id='logo'/></a>
            <ul className={toggle ? 'sidebar show-sidebar' : 'sidebar'}>
                <li><a href='#servicios'>Servicios</a></li>
                <li><a href='#trabajo'>Nuestro Trabajo</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
            <ul>
                <li className='hide-on-mobile'><a href='#servicios'>Servicios</a></li>
                <li className='hide-on-mobile'><a href='#trabajo'>Nuestro Trabajo</a></li>
                <li className='hide-on-mobile'><a href='#contacto'>Contacto</a></li>
                { toggle ? 
                    <svg id='close' onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F1EFE7"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                : 
                    <svg id='menu' onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F1EFE7"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                }
            </ul>
        </nav>
    )
}

export default Navbar;