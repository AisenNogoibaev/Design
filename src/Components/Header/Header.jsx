import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = () => {
	return (
		<div className='header-bg'>
			<nav className='nav-container'>
				<div className='logo-box'>
					<img src={logo} alt='logo' className='header-logo' />
				</div>
				<ul className='list-container'>
					<li>About</li>
					<li>Services</li>
					<li>Pricing</li>
					<li>Blog</li>
				</ul>
				<Link to='/contacts' className='btn'>
					<div className='btn-box'>Contact</div>
				</Link>
			</nav>
		</div>
	);
};

export default Header;
