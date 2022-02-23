// import React, { useState } from "react";
// import './Contact.css';

// const FORM_ENDPOINT = ""; // TODO - fill on the later step

// const ContactForm = () => {
  
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = () => {
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };

//   if (submitted) {
//     return (
//       <>
//         <div className="text-2xl">Thank you!</div>
//         <div className="text-md">We'll be in touch soon.</div>
//       </>
//     );
//   }

//   return (
//     <form
//       action={FORM_ENDPOINT}
//       onSubmit={handleSubmit}
//       method="POST"
//       target="_blank"
//       className="app-contact"
//     >
//       <div className="mb-3 pt-0">
//         <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <textarea
//           placeholder="Your message"
//           name="message"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <button
//           className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="submit"
//         >
//           Send a message
//         </button>
//       </div>
//     </form>
//   );
  
// };

// export default ContactForm;

import React, { useState } from 'react'
import emailjs from 'emailjs-com';

import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_xdqfnhg';
            const templateId = 'template_frq29l3';
            const userId = 'user_6YEq0vIbwiZN7nnIRiz69';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form" className='app-contact'>
          <h1 className='app-contact-header'>Contact Me</h1>
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send Message</button>

            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default Contact;