import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Kasa" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'nav-active' : 'nav-inactive')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? 'nav-active' : 'nav-inactive')}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}
