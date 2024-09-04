import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        {/* Link your logo or brand name here */}
        <Link to='/'>MyLogo</Link>
      </div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='/' className='nav-links'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Podcasts' className='nav-links'>
            Podcasts
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Guests' className='nav-links'>
            Guests
          </Link>
        </li>
      </ul>
      <div className='navbar-right'>
        <Link to='/login' className='login-button'>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
