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


{/* General Info  */}
<div className="flex flex-col md:flex-row items-top bg-white pt-20">

<div className="lg:w-1/3 mx-auto md:w-1/2 sm:w-1/1 leading-normal ">
  <div>
      <div className="w-full">
        <p className="text-center my-6">
        <img src={pregnancyTest} alt="a pregnancy test icon" className="w-10"/>
      </p>
      <p className="px-10 text-left text-black">
        If you've been unable to conceive naturally, you might be one of the 15% of couples who experience infertility.
      </p>
      </div>
    </div>
</div>

<div className="lg:w-1/3 mx-auto md:w-1/2 sm:w-1/1 leading-normal ">
  <div className=" my-2">
      <div className="w-full">
        <p className="text-xl text-center my-6">
      <img src={genders} alt="a microscope  icon" className="w-10"/>
      </p>
      <p className="px-10 text-left text-black">
        While infertility is often associated with women, male infertility occurs just as frequently.
      </p>
      </div>
    </div>
</div>

<div className="lg:w-1/3 mx-auto md:w-1/2 sm:w-1/1 leading-normal ">
  <div className="my-2">
      <div className="w-full">
        <p className="text-xl text-center my-6">
      <img src={microscope} alt="a microscope icon" className="w-10"/>
      </p>
      <p className="px-10 text-left text-black">
        In order to determine what's causing your infertility, you'll need a full workup and a coordinated care plan. Book an appointment with Dr. Robert Oates at Boston Medical Center to start your treatment today.
      </p>
      </div>
    </div>
</div>


</div>
<Contact />


<div className="flex flex-col md:flex-row items-top mx-auto  bg-blue-darkest">
  <div className="w-full px-2">
    <div className="my-4 px-20 py-10 ">
      <div>
        <h2 className="inline-block text-3xl text-white my-4 ">
          About Infertility
        </h2>
        <p className="text-white">
          Many couples will experience some form of infertility. Causes can range from genetic issues to physical illness to luck of the draw. While infertility is often talked about in context of the woman, it is very common for men to be having the difficulties. When I meet with patients, I often meet with both partners, as infertility is a couple's issue, even if only one person is being treated medically.
            </p>
            <p className="mt-6 text-white">
              I treat a range of infertility issues. Here are some of the most common and what your journey might look like.
            </p>
      </div>
    </div>
  </div>
</div>



<div className="flex flex-col md:flex-row items-top bg-blue-darkest px-10">

  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 leading-normal ">
    <div className="rounded overflow-hidden my-2">
      <img className="w-full" src={vasReversal} alt="Sunset in the mountains" />   
      </div>
  </div>


  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 mx-auto leading-normal ">
    <div className=" rounded overflow-hidden  my-2">
        <div className="w-full">
        <div className="font-bold text-xl mb-2">Vasectomy Reversal</div>
            <p className="text-grey-darker text-base">
            For men who have already had a vasectomy but would like to conceive again, I specialize in microsurgical vasectomy reversals. In this procedure, I reverse the blockage that the vasectomy created so the couple can conceive naturally.
            </p>
        </div>

      </div>
  </div>


</div>


<div className="flex flex-col md:flex-row items-top bg-blue-darkest px-10">

  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 leading-normal ">
    <div className="rounded overflow-hidden my-2">
      <img className="w-full" src={sci} alt="Sunset in the mountains" />   
      </div>
  </div>


  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 mx-auto leading-normal ">
    <div className=" rounded overflow-hidden  my-2">
        <div className="w-full">
        <div className="font-bold text-xl mb-2">Spinal Cord Injury</div>
            <p className="text-grey-darker text-base">
              Many men with spinal cord injuries need medical assistance conceiving. I've been fortunate to work extensively with patients with spinal cord injuries and was on of the first clinicians in the US to be actively involved in the treatment of infertility in the spinal cord injured male. I authored some of the first papers detailing the application and results of penile vibratory stimulation and rectal probe electroejaculation and my experience is second to none in New England.
            </p>
        </div>

      </div>
  </div>

</div>



<div className="flex flex-col md:flex-row items-top bg-blue-darkest px-10">

  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 leading-normal ">
    <div className="rounded overflow-hidden my-2">
      <img className="w-full" src={infertility} alt="Sunset in the mountains" />   
      </div>
  </div>


  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 p-4 mx-auto leading-normal ">
    <div className=" rounded overflow-hidden  my-2">
        <div className="w-full">
          <div className="font-bold text-xl mb-2">General Male Infertility</div>
          <p className="text-grey-darker text-base">
              Sometimes couples have trouble getting pregnant and aren't sure why. If you've been trying to conceive for more than six months, you may be experiencing infertility. While each patient is different, possible services for male infertility include:
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

      </div>
  </div>

</div>




<div className="parallax-1"></div>



<div className="bg-blue-darker">
            <div className="px-20 mx-auto py-6 ">
                <div className="mb-6">
                    <h2 className="font-black-darker text-3xl pt-6">About Dr. Oates</h2>
                    <p className="text-grey-darker mb-2 font-sans py-4">Vice Chair of Urology at Boston Medical Center | Professor of Urology at Boston University</p>
      {/* <div className="sm:w-2/3 md:w-1/3 ">
        <img src={rdo} alt="Dr. Oates wears his white medical coat and blue scrubs in a professional photo." className="max-w-xs"/>
      </div> */}



<div className="flex flex-col md:flex-row items-top">



<div className="lg:w-1/3 md:w-1/2 sm:w-1/1 leading-normal">

<div className="rounded overflow-hidden shadow-lg my-2">
<div className="px-6 py-4">
<img src={rdo} alt="Dr. Oates wears his white medical coat and blue scrubs in a professional photo." />
</div>

</div>
</div>

<div className="lg:w-1/3 md:w-1/2 sm:w-1/1 leading-normal">

<div className="border-r-2 border-blue-darkest my-2">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Work</div>
      
<p className="text-grey-darker text-base text-left leading-normal">
Professor of Urology at Boston University School of Medicine and Vice-Chairman of the Department of Urology
</p>
<p className="text-grey-darker text-base text-left leading-normal">
Fellowship Program Director 2008-2016 
</p>
<p className="text-grey-darker text-base text-left leading-normal">
Residency program director 2001-2009 
</p>
<p className="text-grey-darker text-base text-left leading-normal">
Collaborate with colleagues from 12 countries on 200 papers
</p>
  </div>

</div>
</div>

<div className="lg:w-1/3 md:w-1/2 sm:w-1/1 leading-normal">
<div className="border-r-2 border-blue-darkest my-2">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Training</div>
    <p className="text-grey-darker text-base text-left leading-normal">
Born and bred in Boston, I attended medical school at Boston University School of Medicine and stayed for my Urology residency. After finishing my residency, I was fortunate be work with Dr. Larry Lipshultz in 1988 at Baylor College of Medicine in Houston for one of the first clinical fellowships in Male Reproductive Medicine. I returned to Boston after my fellowship concluded and have been an attending at BMC ever since.
</p>
    </div>

</div>
</div>


 <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 leading-normal">
<div className="  my-2">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Honors</div>
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
</div> 

</div>


                </div>

            </div>
        </div>

<div className="flex flex-col md:flex-row items-top bg-grey-light">
  <div className="lg:w-1/3 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className="rounded overflow-hidden my-2">
      <img className="max-w-xs " src={bmcLogo} alt="Sunset in the mountains" />
      <img className="max-w-xs " src={buLogo} alt="Sunset in the mountains" />

      </div>
  </div>

  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 p-4 leading-normal container">
    <div className="rounded overflow-hidden my-2">

        <div className="px-6 py-4">
          <div className="font-bold text-xl">Why Boston Medical Center</div>
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



      {/* <div className="w-2/3 md:w-1/3">
        <img src={rdo} alt="Dr. Oates wears his white medical coat and blue scrubs in a professional photo." />
      </div> */}
</div>

<Contact />

  </Layout>
)

export default IndexPage
