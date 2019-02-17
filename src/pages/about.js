import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import rdo from '../images/robert-oates.png'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex flex-col md:flex-row items-top mx-auto">


</div>


<div className="border-t-2 border-grey-lighter bg-white">
            <div className="container mx-auto py-6 text-center">
                <div className="mb-6">
                    <h2 className="font-black-darker text-3xl pt-6">About Dr. Oates</h2>
                    <p className="text-grey-darker mb-2 font-sans p-4">Vice Chair of Urology at Boston Medical Center | Professor of Urology at Boston University</p>
      <div className="sm:w-2/3 md:w-1/3 mx-auto">
        <img src={rdo} alt="Dr. Oates wears his white medical coat and blue scrubs in a professional photo." className="max-w-xs"/>
      </div>


                    <button className="py-4 px-8 mt-2 text-sm font-black border border-purple-dark hover:border-purple-darkest text-purple-darker bg-white uppercase rounded font-mono">Book Appointment</button>
                </div>

                <div className="flex pt-6 font-serif text-grey-darker">
                    <div className="w-1/3 p-6 border-r-2 border-grey-light">
                        <h1 className="text-2xl mt-6 mb-6">Current</h1>
 
    <p className="text-grey-darker text-base text-left leading-normal">
    I'm a Professor of Urology at Boston University School of Medicine and Vice-Chairman of the Department of Urology. I've been the Fellowship Program Director for the past eight years and ran the residency program for twelve years. I collaborate with colleagues across the globe on numerous research projects and helm a busy clinical practice here at Boston Medical Center.
    </p>
                    </div>
                    <div className="w-1/3 p-6 border-r-2 border-grey-light">
                        <h1 className="text-2xl mt-6 mb-6">Training</h1>
                        <p className="text-grey-darker text-base text-left leading-normal">
    Born and bred in Boston, I attended medical school at Boston University School of Medicine and stayed for my Urology residency. After finishing my residency, I was fortunate be work with Dr. Larry Lipshultz in 1988 at Baylor College of Medicine in Houston for one of the first clinical fellowships in Male Reproductive Medicine. I returned to Boston after my fellowship concluded and have been an attending at BMC ever since.
    </p>
                    </div>
                    <div className="w-1/3 p-6">
                        <h1 className="text-2xl mt-6 mb-6">Honors</h1>
                        <p className="text-grey-darker text-base text-left leading-normal">
    <ul>
      <li>
      Board of Directors of the American Society of Reproductive Medicine
      </li>
      <li>
          Board of Directors of the WHO Guidelines Task Force on Infertility
      </li>
      <li>
            President of the New England Fertility Society, 2013-2014
      </li>
      <li>
      President of the Society of Male Reproduction and Urology (SMRU) in 2012
      </li>
      <li>
      President of the Society for the Study of Male Reproduction (SSMR) in 2006
      </li>
      <li>
      Program Chair for many societal meetings and most recently served as the Scientific Program Chair for the entire American Society of Reproductive Medicine (ASRM) Annual Meeting in 2012
      </li>

  </ul>
</p>
                    </div>
                </div>
                <div className="flex border-t-2 font-serif border-grey-light text-grey-darker text-grey-darker">
                    <div className="w-1/3 p-6 border-r-2 border-grey-light leading-normal">
                        <h1 className="text-2xl mt-6 mb-6">Research</h1>
                        <p className="text-grey-darker text-base text-left leading-normal">
                          <ul>
                            <li>
                              have ongoing clinical research projects involving the genetic basis of male reproductive failure and Klinefelter syndrome</li></ul></p>
                    </div>
                    <div className="w-1/3 p-6 border-r-2 border-grey-light">
                        <h1 className="text-2xl mt-6 mb-6">Fancy Company</h1>
                    </div>
                    <div className="w-1/3 p-6">
                        <h1 className="text-2xl mt-6 mb-6">Fancy Company</h1>
                    </div>
                </div>
            </div>
        </div>


  </Layout>
);

export default AboutPage
