import React from "react";
import Link from "gatsby-link";
import phone from '../images/phone-light.svg'
import envelope from '../images/envelope-light.svg'

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success! Your message has been sent and we will get back to you in 3-5 days."))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (

<div>

   <div className=" flex flex-wrap">


   <div className="w-full">
  {/* <div className="h-2 bg-blue"></div> */}
    <div className="flex items-center justify-center mt-20">
      <div className="container mx-24 bg-white rounded shadow-lg">

      <section className="mt-8 container mx-auto flex items-center justify-around">

<div className="flex rounded border-right-rounded border-grey-dark overflow-hidden">
  <div className="bg-blue-light shadow-border p-3">
    <div className="w-4 h-4">
    <img src={phone} alt="a phone icon" />
    </div>
  </div>
  <button className="block text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-4 font-sans tracking-wide uppercase font-bold">
    Call Now | 617-638-8485
  </button>

</div>

</section>



        <div className="px-12 py-6">
          <div className="text-center">
          <h1 className="font-normal text-xl text-grey-darkest  my-1 w-full">or</h1>
            <h1 className="font-normal text-xl text-grey-darkest my-1 w-full">Request a Call</h1>
            <div className="w-full text-center">


            <form className="w-full" name="one" data-netlify="true">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      {/* <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label> */}
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
      {/* <p className="text-blue text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/4 px-3">
      {/* <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label> */}
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="text" placeholder="Last Name" />
    </div>

    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      {/* <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-phone">
        Phone
      </label> */}
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-phone" type="text" placeholder="Phone #" />
    </div>

    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">

    <p>
        <button 
        className="w-full appearance-none bg-blue text-white text-base font-semibold tracking-wide uppercase p-3  rounded shadow hover:bg-blue-light"
        type="submit">Submit</button>
      </p>

    </div>

  </div>

  <div className="flex flex-wrap -mx-3 mb-2">
    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-email" type="text" placeholder="tim.smith@gmail.com" />
    </div> */}

  
{/* 

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Reason for Visit
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-reason">
          <option>Vasectomy Reversal</option>
          <option>Spinal Cord Injury</option>
          <option>Male Infertility - General</option>
          <option>Transgender Care</option>
          <option>Other</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}

  </div>
  
  {/* <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-message" type="text" placeholder="Hi, I'm looking to book an appointment about infertility..." />
      <p className="text-grey-dark text-xs italic">Be sure to let us know if you're being referred by another practitioner.</p>

   
    </div>
  </div> */}
  {/* <p>
        <button 
        className="w-full appearance-none bg-blue text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-blue-light"
        type="submit">Submit</button>
      </p> */}
  
</form>


            </div>
          </div>
        </div>
      </div>
    </div>
</div>




</div>
</div>


    );
  }
}

