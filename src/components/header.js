import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const handleClick = ev => {
  ev.preventDefault()
  const element = document.getElementById('nav')
  element.classList.toggle('block')
  element.classList.toggle('hidden')
}

const Header = ({ siteTitle }) => (
  <nav className="bg-nav">
    <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-0">
      <Link to="/" className="flex items-center leading-normal no-underline text-black hover:bg-grey-dark p-4">
       
        <span>{siteTitle}</span>
      </Link>

      <button
        className="block md:hidden border bg-white border-white shadow flex items-center px-4 mx-2 mt-2 py-2 rounded text-indigo "
        onClick={handleClick}
      >
        <svg
          className="fill-current h-5 w-5"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
        <div className="text-sm">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-grey-darkest hover:bg-grey-dark p-4"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest hover:bg-grey-dark p-4"
          >
            About Dr. Oates
          </Link>

          <Link
            to="/services"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest hover:bg-grey-dark p-4"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="block md:inline-block mt-4 md:mt-0 no-underline text-grey-darkest hover:bg-grey-dark p-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
