import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("xzbowvpk");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className='h-screen'>
            <h1 className='text-4xl text-center my-8'>Contact Me</h1>
            <form
                action="https://formspree.io/f/xzbowvpk"
                method="POST"
            >
                <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-white relative bg-gray-900  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80 ml-[26.48rem]"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-white relative  bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ml-[26.48rem] w-80"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-white relative bg-gray-900  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ml-[26.48rem] w-80"
          required
        />
      </div>
      <div className="mb-3 pt-0 text-center">
        <button
          className="neon-button"
          type="submit"
        >
          Send a message
        </button>
      </div>
            </form>
        </div>
    );
};

export default ContactMe;