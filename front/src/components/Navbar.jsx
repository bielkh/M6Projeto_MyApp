import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './styles/navbar.css';
import Logo from '../assets/logo.png'


function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (  
        <header className='headNav'>
            <div className='headLogo'>
            <img src={Logo} href="/"></img> <h1>Oval Delivery</h1>
            
            </div>
            <nav ref={navRef}>
                <Link to={'/'}><a className='hover-underline-animation'>Home</a></Link>
                <Link to={'/Sobre'}><a className='hover-underline-animation'>Sobre</a></Link>
                <Link to={'/Menu'}><a className='hover-underline-animation'>Galinhas</a></Link>
                <Link to={'/Galeria'}><a className='hover-underline-animation'>Fotos</a></Link> 
                <Link to={'/Resenha'}><a className='hover-underline-animation'>Resenhas</a></Link>
                <Link to={'/Equipe'}><a className='hover-underline-animation'>Equipe</a></Link>
                <Link to={''}><i class="fa-solid fa-magnifying-glass icon"></i></Link>
                <Link to={''}><i class="fa-solid fa-heart icon"></i></Link>
                <Link to={'/pedido'}><i class="fa-solid fa-cart-shopping icon"></i></Link>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>


            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;
