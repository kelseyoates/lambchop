import React from 'react'
import Link from "gatsby-link";
import Layout from '../components/layout'
import SEO from '../components/seo'
import dad from '../images/shutterstock_341120198.jpg'
import phone from '../images/phone-light.svg'
import envelope from '../images/envelope-light.svg'
import babyOutline from '../images/baby-girl.png'
import pregnancyTest from '../images/pregnancy-test-black.png'
import vasReversal from '../images/shutterstock_780490936.jpg'
import sci from '../images/shutterstock_156885317.jpg'
import infertility from '../images/justin-follis-450674-unsplash.jpg'
import rdo from '../images/robert-oates.png'
import genders from '../images/genders-black.png'
import microscope from '../images/microscope-black.png'
import Contact from '../components/contact'
import ContactSide from '../components/contact-side'
import Nav from '../components/nav'
import buLogo from '../images/boston-university-logo.png'
import bmcLogo from '../images/bmc-logo.png'
import map from '../images/map.png'


const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />


<div className="w-full ">
  <div className=" mx-auto ">
    <img src={dad} alt="A young couple looks joyously at their laughing baby. The man is in his early 30s, dressed casually in a black tee shirt. His wife is in white and he holds her hand while they have a moment as a happy young family." className="w-full " />

    <div className="bg-blue-darker w-full">
      <p className="p-10 text-2xl text-center text-white">
        Sometimes the perfect picture needs a little more time to develop.
      </p>
     
    </div>

  </div>
</div>



{/* General Info One */}
<div className="flex flex-col md:flex-row items-top bg-white mx-auto ">

<div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue pt-20">
    <div className=" bg-white py-8">

        <p className="text-center p-4">
        <img src={pregnancyTest} alt="a pregnancy test icon" className="w-10"/>
      </p>
      <p className="px-8 text-left text-black">
        If you've been unable to conceive naturally, you might be one of the 15% of couples who experience infertility.
      </p>

      </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue-dark pt-20">
    <div className=" bg-white ">
    <div className="w-full py-8">
        <p className="text-center p-4">
        <img src={genders} alt="a microscope  icon" className="w-10"/>
      </p>
      <p className="px-8 text-left text-black">
        While infertility is often associated with women, male infertility occurs just as frequently.
      </p>
      </div>
      </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue pt-20">
    <div className=" bg-white ">
    <div className="w-full py-8">
        <p className="text-center p-4">
        <img src={microscope} alt="a microscope icon" className="w-10"/>
      </p>
      <p className="px-8 text-left text-black">
      In order to determine what's causing your infertility, you'll need a full workup and a coordinated care plan. Book an appointment with Dr. Robert Oates at Boston Medical Center to start your treatment today.
      </p>
      </div>
      </div>
  </div>

</div>

<div className="mx-auto pb-10 bg-white">
<Contact />
  </div>


<div className="bg-blue pt-20 pb-20" >
    <h2>        
      <span className=" font-bold text-2xl text-center bg-blue-darker  px-20 py-4 text-white ">Topics of Male Infertility</span>
    </h2>
  </div>

<div className="flex flex-col md:flex-row items-top bg-blue">
  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className=" overflow-hidden shadow-lg my-2 bg-white">
      <img className="w-full" src={vasReversal} alt="Sunset in the mountains" />
        <div className="px-6 py-4">

          <div className=" mb-2  -mt-8 -ml-6">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Vasectomy Reversal</span>
          </div>
            <p className="text-grey-darker text-base">
            For men who have already had a vasectomy but would like to conceive again, I specialize in microsurgical vasectomy reversals. In this procedure, I reverse the blockage that the vasectomy created so the couple can conceive naturally.
            </p>

            <Link
            to="/services"
            className="text-sm inline-block pt-4 text-grey-darkest"
          >
            Read More →
          </Link>

        </div>
      </div>
  </div>

  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className=" overflow-hidden shadow-lg my-2 bg-white">
      <img className="w-full" src={infertility} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className=" mb-2  -mt-8 -ml-6">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">General Male Infertility</span>
          </div>
            <p className="text-grey-darker text-base">
              Sometimes couples have trouble getting pregnant. If you've been trying to conceive for more than six months, you may be experiencing infertility. While each patient is different, possible services for male infertility include:
            </p>
             

            <Link
            to="/services"
            className="text-sm inline-block pt-4 text-grey-darkest"
          >
            Read More →
          </Link>
          </div>

    </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className="  overflow-hidden shadow-lg my-2 bg-white">
      <img className="w-full" src={sci} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className=" mb-2  -mt-8 -ml-6">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Spinal Cord Injury</span>
          </div>
            <p className="text-grey-darker text-base">
              Many men with spinal cord injuries need medical assistance conceiving. I've been fortunate to work extensively with patients with spinal cord injuries and was on of the first clinicians in the US to be actively involved in the treatment of infertility in the spinal cord injured male. I authored some of the first papers detailing the application and results of penile vibratory stimulation and rectal probe electroejaculation and my experience is second to none in New England.
            </p>

            <Link
            to="/services"
            className="text-sm inline-block pt-4 text-grey-darkest"
          >
            Read More →
          </Link>
        </div>

      </div>
  </div>

</div>

<div className="parallax-1"></div>

  <div className="bg-blue-dark pt-20 pb-10" >
    <h2>        
      <span className=" font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">About Dr. Oates</span>
    </h2>
  </div>


{/* General Info One */}
<div className="flex flex-col md:flex-row items-top bg-blue-dark ">

<div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue-dark pb-10 mx-4">
    <div className=" bg-white py-8">

    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Current</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8">
    Professor of Urology, Boston University School of Medicine 
    </p>
    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    2003 - present
    </p>
    <p className="text-black text-base text-left leading-normal px-6">
    Vice-Chair, Department of Urology, Boston University School of Medicine 
    </p>
    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    2010 - present
    </p>
    <p className="text-black text-base text-left leading-normal px-6">
    Co-Director, New England Male Reproductive Cetner, Boston Medical Center, Boston, MA
    </p>
    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    1988 - present
    </p>


    <p className="text-black text-base text-left leading-normal px-8">
    Adjunct Faculty - Beth Israel Deaconess Fellowship Reproductive Encocrinology, Beth Israel Medical Center
    </p>

    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    2002 - present
    </p>

      </div>
  </div>


  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue-dark mx-4">
    <div className=" bg-white ">
    <div className="w-full py-8">
    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Recent</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8">
    Program Director: Urological Residency Program, Boston University Department of Urology
    </p>
    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    2003 - 2017
    </p>
    <p className="text-black text-base text-left leading-normal px-8">
    Director of Medical Student Urological Education, Boston University School of Medicine 
    </p>
    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    2003 - 2010
    </p>
    <p className="text-black text-base text-left leading-normal px-8">
    American Society of Reproductive Medicine: Board of Directors
    </p>
    <p className="text-grey-dark  text-sm italic text-left leading-normal mb-3 px-8">
    2012 - 2017
    </p>

      </div>
      </div>
  </div>


</div>



<div className="flex flex-col md:flex-row items-top bg-white py-10">


<div className="lg:w-1/4 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className=" shadow-lg bg-white border-l-4 border-blue">
        <div className="p-3">

          <p className="text-black font-bold text-base text-center leading-normal ">
    America's Top Doctors, 
    </p>
    <p className="text-black text-base text-center leading-normal ">
    Castle and Connolly
    </p>
    <p className="text-grey-dark  text-sm italic text-center leading-normal mb-3">
    2000-2018 (annually)
    </p>

        </div>
      </div>
  </div>

  <div className="lg:w-1/4 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className=" shadow-lg  bg-white border-l-4 border-blue">
        <div className="p-3">

          <p className="text-black font-bold  text-base text-center leading-normal ">
    Boston's Top Doctors
    </p>
    <p className="text-black text-base text-center leading-normal ">
    Boston Magazine
    </p>
    <p className="text-grey-dark  text-sm italic text-center leading-normal mb-3">
    2006 - 2018
    </p>

        </div>
      </div>
  </div>

  <div className="lg:w-1/4 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className=" shadow-lg bg-white border-l-4 border-blue">
        <div className="p-3">

          <p className="text-black font-bold  text-base text-center leading-normal ">
    Marqus Who's Who
    </p>
    <p className="text-black text-base text-center leading-normal ">
    National Registry
    </p>
    <p className="text-grey-dark  text-sm italic text-center leading-normal mb-3">
      Lifetime Member #130654
    </p>

        </div>
      </div>
  </div>


  <div className="lg:w-1/4 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className=" shadow-lg bg-white border-l-4 border-blue">
        <div className="p-4">

          <p className="text-black font-bold  text-base text-center leading-normal ">
    Kingston's Who's Who
    </p>
    <p className="text-black text-base text-center leading-normal ">
    National Registry
    </p>
    <p className="text-grey-dark  text-sm italic text-center leading-normal mb-3">
      Lifetime Member #192304
    </p>

        </div>
      </div>
  </div>


</div>

<div className="bg-grey-light pt-20 pb-10 " >
    <h2>        
      <span className=" font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">Why Boston Medical Center</span>
    </h2>
  </div>
<div className="flex flex-col md:flex-row items-top bg-grey-light pb-20">
  <div className="lg:w-1/3 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className="rounded overflow-hidden my-2">
      <img className="max-w-xs " src={bmcLogo} alt="Sunset in the mountains" />
      <img className="max-w-xs " src={buLogo} alt="Sunset in the mountains" />

      </div>
  </div>

  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 leading-normal px-10 ">
    
        <div className="px-6 py-4">

            <p className="text-grey-darker text-base mt-6">
            Boston Medical Center (BMC) is a renowned academic hospital in the heart of Boston's historic south end. BMC is affiliated with Boston University and has been home to some of the best medicine in the nation. From trauma to other stuff, BMC represents the heart of Boston and will always offer "exceptional care without exception".
            </p>
            <p className="text-grey-darker text-base mt-6">
            We're located right off the highway and are accessible by public transportation.
            </p>
           
            <div className="flex rounded border-right-rounded border-grey-dark overflow-hidden">
  <div className="bg-blue-light shadow-border p-3">
    <div className="w-4 h-4">
    <img src={map} alt="a phone icon" />
    </div>
  </div>
  <button className="block text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-4"> BMC Urology 
  725 Albany Street 
            Boston, MA 02118
            Shapiro Center
            3rd Floor, Suite 3B
  </button>

</div>
         
          </div>
   
  </div>

</div>



<div className="bg-blue pt-20 pb-10" >
    <h2>        
      <span className=" font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">Get in Touch</span>
    </h2>
  </div>
<div className="flex flex-col md:flex-row items-top bg-blue py-5">
  <div className="lg:w-1/3 md:w-1/3 sm:w-1/1 p-4 leading-normal">

  </div>

  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 leading-normal px-10">
  <div className="mx-auto py-10 ">
<ContactSide />
  </div>
   
  </div>

</div>



  </Layout>
)

export default IndexPage
