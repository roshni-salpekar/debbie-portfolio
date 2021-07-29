import React from "react";
import Social from "./Social";

function Contact() {
return (
  <div className="container mx-auto">
    <div className="container mx-auto mb-16 px-6 lg:px-0  lg:w-9/12">
      <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 lg:mb-8 text-center text-teal-600">
        Contact me
      </h2>
      <p className="text-xl mb-6 text-teal-800">I’d love to hear from you. </p>
      <p className="text-xl mb-6 text-teal-800">
        If you have a project you would like to discuss, a general enquiry or
        would just like to have a chat please email me at d3bbie.dann@gmail.com.
      </p>
      <p className="text-xl mb-6 text-teal-800">Email: d3bbie.dann@gmail.com</p>

      <p className="text-xl mb-6 text-teal-800">
        You can also find me on Twitter for a chat or LinkedIn for something a bit
        more professional. Come say hello.
      </p>
      <Social />
    </div>
  </div>
);

}

export default Contact;