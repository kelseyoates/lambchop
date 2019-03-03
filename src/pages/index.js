import React from 'react'
import Link from "gatsby-link";
import Layout from '../components/layout'
import SEO from '../components/seo'
import dad from '../images/shutterstock_341120198.jpg'
import phone from '../images/phone-light.svg'
import envelope from '../images/envelope-light.svg'
import babyOutline from '../images/baby-girl.png'
import pregnancyTest from '../images/pregnancy-test-black.png'
import vasReversal from '../images/shutterstock_780490936.png'
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

<div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue py-5">
    <div className="rounded-sm bg-white py-8">

        <p className="text-center p-4">
        <img src={pregnancyTest} alt="a pregnancy test icon" className="w-10"/>
      </p>
      <p className="px-8 text-left text-black">
        If you've been unable to conceive naturally, you might be one of the 15% of couples who experience infertility.
      </p>

      </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue-dark py-5">
    <div className="rounded-sm bg-white py-8">
   
        <p className="text-center p-4">
        <img src={genders} alt="a microscope  icon" className="w-10"/>
      </p>
      <p className="px-8 text-left text-black">
        While infertility is often associated with women, male infertility occurs just as frequently.
      </p>
      
      </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal bg-blue py-5">
    <div className="rounded-sm bg-white py-8">
  
        <p className="text-center p-4">
        <img src={microscope} alt="a microscope icon" className="w-10"/>
      </p>
      <p className="px-8 text-left text-black">
      Book an appointment with Dr. Robert Oates at Boston Medical Center to start your treatment today.
      </p>
      </div>
  
  </div>

</div>

<div className="mx-auto pb-10 bg-white">
<Contact />
  </div>


<div className="bg-blue pt-20 pb-20" >
    <h2>        
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker  px-20 py-4 text-white ">Topics of Male Infertility</span>
    </h2>
  </div>

<div className="flex flex-col md:flex-row items-top bg-blue">
  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal ">
    <div className=" overflow-hidden shadow-lg my-2 bg-white rounded-sm">
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
            Learn More →
          </Link>

        </div>
      </div>
  </div>

  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className=" overflow-hidden shadow-lg my-2 bg-white rounded-sm">
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
            Learn More →
          </Link>
          </div>

    </div>
  </div>


  <div className="lg:w-1/3 md:w-1/2 sm:w-1/1 p-4 leading-normal">
    <div className="  overflow-hidden shadow-lg my-2 bg-white rounded-sm">
      <img className="w-full" src={sci} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className=" mb-2  -mt-8 -ml-6">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Spinal Cord Injury</span>
          </div>
            <p className="text-grey-darker text-base">
              Many men with spinal cord injuries need medical assistance conceiving. I've been fortunate to work extensively with patients with spinal cord injuries and was on of the first clinicians in the US to be actively involved in the treatment of infertility in the spinal cord injured male. 
            </p>

            <Link
            to="/services"
            className="text-sm inline-block pt-4 text-grey-darkest"
          >
            Learn More →
          </Link>
        </div>

      </div>
  </div>

</div>

<div className="parallax-1"></div>

  <div className="bg-blue-lighter pt-20 pb-10" >
    <h2>        
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">About Dr. Oates</span>
    </h2>
  </div>


{/* General Info One */}
<div className="flex flex-col md:flex-row items-top bg-blue-lighter ">

<div className="lg:w-1/3 md:w-1/3 sm:w-1/1 p-4 leading-normal  pb-10 mx-4">
    <div className=" bg-white py-3 rounded-sm text-center">
        <img src={rdo} alt="Dr. Oates wears his white medical coat and blue scrubs in a professional photo." className="max-w-xs "/>


      </div>
  </div>


  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 p-4 leading-normal ">
    <div className=" bg-white rounded-sm">
    <div className="w-full py-8">
    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Current</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8 pb-8">
        I'm a Professor of Urology at Boston University School of Medicine and Vice-Chairman of the Department of Urology. I've been the Fellowship Program Director for the past eight years and ran the Urology Residency program for fourteen years. I collaborate with colleagues across the globe on numerous research projects and helm a busy clinical practice here at Boston Medical Center (BMC).
    </p>

    <div className=" mb-2 ">        
          <span className=" font-bold text-xl inline-block bg-blue-dark  px-3 py-1 text-white ">Training</span>
          </div>
          <p className="text-black text-base text-left leading-normal px-8">
          Born and bred in Boston, I attended medical school at Boston University School of Medicine and stayed for my Urology residency. After finishing my residency, I was fortunate to work with Dr. Larry Lipshultz in 1988 at Baylor College of Medicine in Houston for one of the first clinical fellowships in Male Reproductive Medicine. I returned to Boston after my fellowship concluded and have been an Attending Surgeon in the Department of Urology at BMC ever since.
    </p>

    <p className="text-black text-base text-left leading-normal px-8">
    
    <Link
            to="/services"
            className="text-sm inline-block pt-4 text-grey-darkest"
          >
            More about Dr. Oates →
          </Link>

    </p>



      </div>
      </div>
  </div>


</div>



<div className="flex flex-col md:flex-row items-top bg-white py-10">


<div className="lg:w-1/4 md:w-1/3 sm:w-1/1 p-4 leading-normal">
    <div className=" shadow-lg bg-white border-l-4 border-blue rounded-sm">
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
    <div className=" shadow-lg  bg-white border-l-4 border-blue rounded-sm">
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
    <div className=" shadow-lg bg-white border-l-4 border-blue rounded-sm">
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
    <div className=" shadow-lg bg-white border-l-4 border-blue rounded-sm">
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
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">Why Boston Medical Center</span>
    </h2>
  </div>
<div className="flex flex-col md:flex-row items-top bg-grey-light py-10">


  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 leading-normal px-10 ">
    
        <div >

            <p className="text-grey-darker text-base ">
            Boston Medical Center (BMC) is a renowned academic hospital in the heart of Boston's historic south end. BMC is affiliated with Boston University and has been home to some of the best medicine in the nation. From trauma to other stuff, BMC represents the heart of Boston and will always offer "exceptional care without exception".
            </p>
            <p className="text-grey-darker text-base mt-6">
            We're located right off the highway and are accessible by public transportation.
            </p>
           
            {/* <div className="flex rounded-sm border-right-rounded border-grey-dark overflow-hidden">
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

</div> */}
         
          </div>
   
  </div>


  <div className="lg:w-1/3 md:w-1/3 sm:w-1/1 px-5 leading-normal">


<div className=" bg-white rounded-sm">
    <div className="w-full py-8">
    <div className=" mb-2 ">        
          <span className=" font-bold text-2xl inline-block bg-blue-dark  px-10 py-2 text-white ">
          
          <div className="w-4 h-4">
    <img src={map} alt="a phone icon" />
    </div>
          
          
          </span>
          </div>
  
          <p className="text-black font-bold  text-base text-center leading-normal ">
          BMC Urology 
    </p>
    <p className="text-black text-base text-center leading-normal ">
    725 Albany Street 
    </p>

    <p className="text-black text-base text-center leading-normal ">
    Boston, MA 02118
    </p>

    <p className="text-black text-base text-center leading-normal ">
    Shapiro Center
    </p>

    <p className="text-black text-base text-center leading-normal ">
    3rd Floor, Suite 3B
    </p>



    <p className="text-grey-dark  text-sm italic text-center leading-normal mb-3">
      Click for directions
    </p>

      </div>
      </div>


  </div>



</div>





<div className="bg-white pt-20 pb-10 " >
    <h2>        
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">Frequently Asked Questions</span>
    </h2>
  </div>
<div className="flex flex-col md:flex-row items-top bg-white pb-20">



<div className="lg:w-1/2 md:w-1/2 sm:w-1/1 leading-normal px-4 ">
    


{/* FAQ Accordion */}
<div className="accordion flex flex-col items-center  ">
 
 <div className="w-full ">
   <input type="checkbox" name="panel" id="panel-1" className="hidden" />
   <label for="panel-1" className="relative block bg-blue-dark text-white p-4 shadow border-b border-grey rounded-sm">What's the appointment like?</label>
   <div className="accordion__content overflow-hidden bg-grey-lighter">
     {/* <h2 className="accordion__header pt-4 pl-4">Header</h2> */}
     <p className="accordion__body p-4" id="panel1">Every appointment begins with getting to know the patient. We'll talk for a bit and depending on what you're in for, we might schedule a follow-up. Any tests or procedures will be scheduled as follow-ups.</p>
   </div>
 </div>

 <div className="w-full">
   <input type="checkbox" name="panel" id="panel-2" className="hidden" />
   <label for="panel-2" className="relative block bg-blue text-white p-4 shadow border-b border-grey rounded-sm">Should I bring my wife?</label>
   <div className="accordion__content overflow-hidden bg-grey-lighter">
     <p className="accordion__body p-4">Many patients do attend appointments with their spouses. While it's possible to attend the appointment alone, infertility is often experienced as a couple and in many cases the treatment will involve both spouses. </p>
   </div>
 </div>

 <div className="w-full">
   <input type="checkbox" name="panel" id="panel-3" className="hidden" />
   <label for="panel-3" className="relative block bg-blue-dark text-white p-4 shadow border-b border-grey rounded-sm">Do I need to bring anything?</label>
   <div className="accordion__content overflow-hidden bg-grey-lighter">

     <p className="accordion__body p-4">We ask that patients bring their medical records and a list of any medications they are on. Our care coordinator will review this when you book your appointment and after you've booked, you will receive a letter in the mail specifying what you need and how to obtain your medical records. If you have any trouble doing so, please call us and we'll try to help you sort it out.</p>
   </div>
 </div>
</div>
{/* End of Accordion */}
   
  </div>





  <div className="lg:w-1/2 md:w-1/2 sm:w-1/1 leading-normal px-4 ">
    


{/* FAQ Accordion */}
<div className="accordion flex flex-col items-center ">
 
 <div className="w-full">
   <input type="checkbox" name="panel" id="panel-4" className="hidden" />
   <label for="panel-4" className="relative block bg-blue text-white p-4 shadow border-b border-grey rounded-sm">I already know I want a reversal. Why can't I just book it now? </label>
   <div className="accordion__content overflow-hidden bg-grey-lighter">
     <p className="accordion__body p-4" id="panel4">While we appreciate that many patients are coming to us with a specific procedure in mind, we will need to schedule a consultation before doing any procedures or surgeries. We cannot just schedule a vasectomy reversal without seeing you in an appointment first.</p>
   </div>
 </div>

 <div className="w-full">
   <input type="checkbox" name="panel" id="panel-5" className="hidden" />
   <label for="panel-5" className="relative block bg-blue-dark text-white p-4 shadow border-b border-grey rounded-sm">How long is the recovery time for a vasectomy reversal?</label>
   <div className="accordion__content overflow-hidden bg-grey-lighter">
     <p className="accordion__body p-4">Vasectomy reversals are outpatient procedures, which means you will be in and out and back to being able to conceive in just a few short hours. We suggest that you plan to go easy for the next few days, but most patients are able to get back to normal by the next day. </p>
   </div>
 </div>

 <div className="w-full">
   <input type="checkbox" name="panel" id="panel-6" className="hidden" />
   <label for="panel-6" className="relative block bg-blue text-white p-4 shadow border-b border-grey rounded-sm">Panel 3</label>
   <div className="accordion__content overflow-hidden bg-grey-lighter">
     <p className="accordion__body p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
       adipisicing elit. Lorem ipsum dolor sit amet.</p>
   </div>
 </div>
</div>
{/* End of Accordion */}
   
  </div>

</div>



<div className="bg-blue pt-20 pb-10" >
    <h2>        
      <span className="rounded-sm font-bold text-2xl text-center bg-blue-darker px-20 py-4 text-white ">Get in Touch</span>
    </h2>
  </div>
<div className="flex flex-col md:flex-row items-top bg-blue py-5">

  <div className="lg:w-2/3 md:w-2/3 sm:w-1/1 leading-normal mx-auto px-10">
  <div className="mx-auto py-10 ">
<ContactSide />
  </div>
   
  </div>

</div>



  </Layout>
)

export default IndexPage
