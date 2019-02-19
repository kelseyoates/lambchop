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
          {/* <div className="flex justify-between max-w-xl mx-auto p-2 md:p-4 text-sm">
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
          </div> */}


<section className="bg-white py-8 w-full">
    <div className="container mx-auto px-8">
        <div className="table w-full">
            <div className="block sm:table-cell">
                <p className="uppercase text-grey text-sm sm:mb-6">About</p>
                <ul className="list-reset text-xs mb-6">
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">Male Infertility</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark"> Dr. Oates</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark"> Boston Medical Center</a>
                    </li>
                </ul>
            </div>
            <div className="block sm:table-cell">
                <p className="uppercase text-grey text-sm sm:mb-6">Topics of Infertility</p>
                <ul className="list-reset text-xs mb-6">
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">Vasectomy Reversal</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">Spinal Cord Injury</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">General Male Infertility</a>
                    </li>
                </ul>
            </div>
            <div className="block sm:table-cell">
                <p className="uppercase text-grey text-sm sm:mb-6">Support</p>
                <ul className="list-reset text-xs mb-6">
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">FAQ</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">Contact</a>
                    </li>
            
                </ul>
            </div>
            <div className="block sm:table-cell">
                <p className="uppercase text-grey text-sm sm:mb-6">BMC Urology</p>
                <ul className="list-reset text-xs mb-6">
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark"> 617-638-8485</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                        <a href="#" className="text-grey hover:text-grey-dark">725 Albany St <br /> Boston MA 02118 <br /> Shapiro Center 3rd Floor, Suite 3B</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</section>



        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
