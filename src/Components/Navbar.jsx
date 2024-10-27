import { useState } from 'react'
import './styles/navbar.css'
import navbarLogo from '../assets/Logo-navbar-white.png'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const showSidebar = () => setToggle(!toggle);

    return (
        <nav>
            <a href='#'><img src={navbarLogo} alt='Camaleon Studio logo' id='logo'/></a>
            <ul className={toggle ? 'sidebar show-sidebar' : 'sidebar'}>
                <li>
                    <a onClick={showSidebar} href='#servicios'>Servicios
                    <svg className='arrow-down-sidebar' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F1EFE7"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    </a>
                    <ul  className='sidebar-submenu'>
                        <li><a onClick={showSidebar} href='#edicion-video'>Edición de Video</a></li>
                        <li><a onClick={showSidebar} href='#fotografia'>Fotografía</a></li>
                        <li><a onClick={showSidebar} href='#redes'>Manejo de Redes</a></li>
                        <li><a onClick={showSidebar} href='#content-creation'>Live Content Creation</a></li>
                    </ul>
                </li>
                <li><a onClick={showSidebar} href='#trabajo'>Nuestro Trabajo</a></li>
                <li><a onClick={showSidebar} href='#contacto'>Contacto</a></li>
            </ul>
            <ul className='nav-links'>
                <li className='hide-on-mobile'>
                    <a href='#servicios'>Servicios
                        <svg className='arrow-down' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F1EFE7"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    </a>
                    <ul  className='submenu'>
                        <li><a href='#edicion-video'>Edición de Video</a></li>
                        <li><a href='#fotografia'>Fotografía</a></li>
                        <li><a href='#redes'>Manejo de Redes</a></li>
                        <li><a href='#content-creation'>Live Content Creation</a></li>
                    </ul>
                </li>
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