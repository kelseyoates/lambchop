import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import vasReversal from '../images/shutterstock_780490936.jpg'
import sci from '../images/shutterstock_156885317.jpg'
import infertility from '../images/justin-follis-450674-unsplash.jpg'
import pdf from '../images/pdf.png'

const ServicesPage = () => (
  <Layout>
    <SEO
      title="Services"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />


<div className="w-full ">
  <div className=" mx-auto ">

    <div className="bg-blue-darker w-full">
      <p className="p-10 text-center text-white">
        Services
      </p>
     
    </div>

  </div>
</div>


<div className="bg-blue-lighter pt-20 pb-10" >
    <h2>        
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">Vasectomy Reversal</span>
    </h2>
  </div>


{/* General Info One */}
<div className="flex flex-col md:flex-row items-top bg-blue-lighter ">

<div className="lg:w-1/3 md:w-1/3 sm:w-1/1 p-4 leading-normal  pb-10 mx-4">
    <div className="rounded-sm text-center">
        <img src={vasReversal} alt="Dr. Oates wears his white medical coat and blue scrubs." className="max-w-xs "/>


      </div>
  </div>


  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 p-4 leading-normal ">
    <div className=" bg-white rounded-sm">
    <div className="w-full py-8">
    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">About</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8 pb-8">
          For men who have already had a vasectomy but would like to conceive again, I specialize in microsurgical vasectomy reversals. In this procedure, I reverse the blockage that the vasectomy created so the couple can conceive naturally.
    </p>

    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">The Process</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8 pb-8">
          Beta cells biopsy body type cerebral cortex cone decongestants dehydration dust mites ear canal enamel exercise-induced asthma fever glycemic index gurney hyperglycemia ibuprofen immunizations insulin injections lacrimal glands microscope myopia nausea optometrist orthodontist pulse rem retina surgery triggers x-ray. 
    </p>




    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Presentations</span>
          </div>
          <p className="text-black text-base  leading-normal px-8">
          <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/459919/joshua-rawson-harris-1165052-unsplash.jpg" download>
  <img src={pdf} alt="W3Schools" width="75" height="75" />
  <p className="text-black text-base text-left leading-normal px-8">
      TESE WS Final 2.19

    </p>
</a>
    </p>





      </div>
      </div>
  </div>


</div>






<div className="bg-blue-dark pt-20 pb-10" >
    <h2>        
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">General Male Infertility</span>
    </h2>
  </div>


{/* General Info One */}
<div className="flex flex-col md:flex-row items-top bg-blue-dark ">

<div className="lg:w-1/3 md:w-1/3 sm:w-1/1 p-4 leading-normal  pb-10 mx-4">
    <div className="rounded-sm text-center">
        <img src={infertility} alt="Dr. Oates wears his white medical coat and blue scrubs." className="max-w-xs "/>


      </div>
  </div>


  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 p-4 leading-normal ">
    <div className=" bg-white rounded-sm">
    <div className="w-full py-8">
    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">About</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8 pb-8">
          For men who have already had a vasectomy but would like to conceive again, I specialize in microsurgical vasectomy reversals. In this procedure, I reverse the blockage that the vasectomy created so the couple can conceive naturally.
    </p>

    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">The Process</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8 pb-8">
          Beta cells biopsy body type cerebral cortex cone decongestants dehydration dust mites ear canal enamel exercise-induced asthma fever glycemic index gurney hyperglycemia ibuprofen immunizations insulin injections lacrimal glands microscope myopia nausea optometrist orthodontist pulse rem retina surgery triggers x-ray. 
    </p>




    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Presentations</span>
          </div>
          <p className="text-black text-base  leading-normal px-8">
          <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/459919/joshua-rawson-harris-1165052-unsplash.jpg" download>
  <img src={pdf} alt="W3Schools" width="75" height="75" />
  <p className="text-black text-base text-left leading-normal px-8">
      TESE WS Final 2.19

    </p>
</a>
    </p>





      </div>
      </div>
  </div>


</div>





  </Layout>
);

export default ServicesPage
