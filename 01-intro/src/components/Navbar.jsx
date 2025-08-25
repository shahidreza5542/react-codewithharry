import React from 'react'
import "./Nav.css"


const Navbar = () => {
  return (
    <header class="main-header">
      <div class="header-container">
        <a href="#" aria-label="Back to homepage" class="header-logo-link">
          <img
            src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
            alt="JavaScript Logo"
            class="header-logo"
          />
        </a>
        <ul class="header-nav">
          <li class="header-nav-item">
            <a href="#" class="header-nav-link"> Home </a>
          </li>
          <li class="header-nav-item">
            <a href="#" class="header-nav-link"> About </a>
          </li>
          <li class="header-nav-item">
            <a href="#" class="header-nav-link current"> Context </a>
          </li>
        </ul>
        <button class="header-menu-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="header-menu-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>


  )
}

export default Navbar