import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import glamLogo from '../assets/glamlogo.png'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/promotions', label: 'Promotions' },
    { path: '/merchandising', label: 'Merchandising' },
    { path: '/events', label: 'Events' },
    { path: '/logistics', label: 'Logistics' },
    { path: '/contact', label: 'Contact Us' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <img src={glamLogo} alt="Glam Logo" className="brand-logo" />
            <span className="brand-text">Glam</span>
          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
