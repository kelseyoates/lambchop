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


{/* based on https://tailwindcomponents.com/component/stripe-partner-form */}
   <div className="w-full">

    <div className="flex items-center justify-center ">
      <div className=" bg-white rounded shadow-lg">

      <section className="mt-8 container mx-auto flex items-center justify-around">

<div className="flex rounded border-right-rounded border-grey-dark overflow-hidden">
  <div className="bg-blue-light shadow-border p-3">
    <div className="w-4 h-4">
    <img src={phone} alt="a phone icon" />
    </div>
  </div>
  <button className="block text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-2 font-sans uppercase font-bold">
    Call Now | 617-638-8485
  </button>

</div>

</section>



        <div>
          <div className="text-center">
          <h1 className="font-normal text-xl text-grey-darkest my-3 w-full">or</h1>
            <h1 className="font-normal text-xl text-grey-darkest my-3 w-full">Request a Call</h1>
            <div className="w-full px-3">


            <form name="side" data-netlify="true">
  <div className="flex flex-wrap  ">
    <div className="w-full px-3 mb-4">

      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />

    </div>
    <div className="w-full mb-4 px-3">

      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="text" placeholder="Last Name" />
    </div>

    <div className="w-full px-3 mb-4">

      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-phone" type="text" placeholder="Phone #" />
    </div>

    <div className="w-full  px-3 mb-4">

    <p>
        <button 
        className="w-full appearance-none bg-blue text-white text-base font-semibold tracking-wide uppercase p-3  rounded shadow hover:bg-blue-light"
        type="submit">Submit</button>
      </p>

    </div>

  </div>
  
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

