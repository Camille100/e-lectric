import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
// import { CSSTransition } from 'react-transition-group';

import './Navbar.scss';
import logo from '../../assets/img/logo.png'





function Navbar() {

	const MenuLiens = () => {
		return(
			<>
				<li>
					<Link to='/' onClick={() => setDisplayMenu(false)}>Accueil</Link>
				</li>
				<li>
					<Link to='/services' onClick={() => setDisplayMenu(false)}>Services</Link>
				</li>
				<li>
					<Link to='/projets' onClick={() => setDisplayMenu(false)}>Projets réalisés</Link>
				</li>
				<li>
					<Link to='/contact' onClick={() => setDisplayMenu(false)}>Contact</Link>
				</li>
			</>
		)
	}

    const [displayMenu, setDisplayMenu] = useState(false);

	const menuMobile = useRef()


	const isMobile = useMediaQuery({
        query: '(max-width: 992px)'
    })

	useEffect(() => {
		if(displayMenu){
			menuMobile.current.style.transform = "translateX(0)"
			menuMobile.current.style.opacity = 1
		} else {
			menuMobile.current.style.transform = "translateX(100vw)"
			menuMobile.current.style.opacity = 0
		}

	}, [displayMenu])

	useEffect(() => {
		setDisplayMenu(false)

	}, [isMobile])

	const handleClick = () => {
		setDisplayMenu(!displayMenu)
	}

	return (
		<div id="navbar">
			<div id="navbarWrapper">
				
				<Link to='/' onClick={() => setDisplayMenu(false)} className="logo">
					<h1>ELECTR-IC</h1>
					<img src={logo} alt="Logo ELECTR-IC" />
				</Link>


				<div className="menu">

					<ul
						className="menuMobile"
						ref={menuMobile}
					>
						<MenuLiens />
					</ul>

					{
						!isMobile &&
							<ul
								className="menuDesktop"
							>
								<MenuLiens />
							</ul>
						
					}



					<a href="tel:+33640351107" className="navbar-tel icons">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
							<path fill="#e9e9e9" d="M353.188 252.052c-23.51 0-46.594-3.677-68.469-10.906-10.719-3.656-23.896-.302-30.438 6.417l-43.177 32.594c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208 11.167-20.198 7.635-31.448-7.26-21.99-10.948-45.063-10.948-68.583C132.146 13.823 118.323 0 101.333 0h-70.52C13.823 0 0 13.823 0 30.813 0 225.563 158.438 384 353.188 384c16.99 0 30.813-13.823 30.813-30.813v-70.323c-.001-16.989-13.824-30.812-30.813-30.812z" />
						</svg>
					</a>

					<button className="navbar-burger icons" onClick={handleClick}>
						<svg viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg">
							<path fill="#e9e9e9" d="M368 155H16a16 16 0 010-32h352a16 16 0 010 32zm0 0M368 32H16a16 16 0 010-32h352a16 16 0 010 32zm0 0M368 277H16a16 16 0 010-32h352a16 16 0 010 32zm0 0"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
    
}

export default Navbar
