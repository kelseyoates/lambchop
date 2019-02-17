import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col flex-1 mx-auto w-full">
          {children}
        </div>

        <footer className="bg-blue-darkest">
          <div className="flex justify-between max-w-xl mx-auto p-2 md:p-4 text-sm">
            <p className="text-white">
              Created by{' '}
              <a
                href="https://www.kelseyoates.com"
                className="font-bold no-underline text-white"
              >
                K/O
              </a>
            </p>

            <p>
              <a
                href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                className="font-bold no-underline text-white"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
