import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import vasReversal from '../images/shutterstock_780490936.jpg'
import sci from '../images/shutterstock_156885317.jpg'
import infertility from '../images/justin-follis-450674-unsplash.jpg'


const ServicesPage = () => (
  <Layout>
    <SEO
      title="Services"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

<div className="flex flex-col md:flex-row items-top mx-auto">
  <div className="w-full px-2">
    <div className="container  mt-4">
      <div>
        <h2 className="inline-block my-8 p-2 text-3xl ">
          Topics of Male Infertility
        </h2>
      </div>
    </div>
  </div>
</div>


<div className="flex flex-col md:flex-row items-top">
  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className="rounded overflow-hidden shadow-lg my-2">
      <img className="w-full" src={vasReversal} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Vasectomy Reversal</div>
            <p className="text-grey-darker text-base">
            For men who have already had a vasectomy but would like to conceive again, I specialize in microsurgical vasectomy reversals. In this procedure, I reverse the blockage that the vasectomy created so the couple can conceive naturally.
            </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        </div>
      </div>
  </div>

  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className="rounded overflow-hidden shadow-lg my-2">
      <img className="w-full" src={infertility} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">General Male Infertility</div>
            <p className="text-grey-darker text-base">
              Sometimes couples have trouble getting pregnant. If you've been trying to conceive for more than six months, you may be experiencing infertility. While each patient is different, possible services for male infertility include:
            </p>
              <ul>
                <li>microsurgical epididyman sperm aspiration (MESA) - extracting sperm from outside the testis
                </li>
                <li>
                  microsurgical testis sperm extraction (TESE) - harvesting sperm microsurgically from within the testis
                </li>
                <li>
                  genetic evaluation and testing - we'll find out if there's a genetic component to your infertility, helping us develop a better care plan
                </li>
                <li>
                  fertility in men with spinal cord injuries - 
                </li>
              </ul>

          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
          </div>
    </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className=" rounded overflow-hidden shadow-lg my-2">
      <img className="w-full" src={sci} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Spinal Cord Injury</div>
            <p className="text-grey-darker text-base">
              Many men with spinal cord injuries need medical assistance conceiving. I've been fortunate to work extensively with patients with spinal cord injuries and was on of the first clinicians in the US to be actively involved in the treatment of infertility in the spinal cord injured male. I authored some of the first papers detailing the application and results of penile vibratory stimulation and rectal probe electroejaculation and my experience is second to none in New England.
            </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        </div>
      </div>
  </div>


      {/* <div className="w-2/3 md:w-1/3">
        <img src={rdo} alt="Dr. Oates wears his white medical coat and blue scrubs in a professional photo." />
      </div> */}
</div>
  </Layout>
);

export default ServicesPage
