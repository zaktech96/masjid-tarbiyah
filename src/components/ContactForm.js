import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnyplb");

  if (state.succeeded) {
    return <p className="text-center mt-8 text-green-600">Thanks for joining!</p>;
  }

  return (
    <section className="flex justify-center items-center h-auto py-10">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-center font-semibold">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input id="name" type="text" name="name" placeholder="Name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input id="email" type="email" name="email" placeholder="Emaill" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" placeholder="Get in touch" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {state.submitting ? 'Sending...' : 'Send'}
          </button>
        </div>
        {state.errors && (
          <div className="text-red-500 text-xs mt-2">
            <ValidationError 
              prefix="Error:" 
              field="email"
              errors={state.errors}
            />
            <ValidationError 
              prefix="Error:" 
              field="message"
              errors={state.errors}
            />
          </div>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
