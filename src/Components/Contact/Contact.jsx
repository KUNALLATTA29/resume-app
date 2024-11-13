import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mt-2" />
        <textarea placeholder="Your Message" className="border p-2 w-full mt-2"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Send</button>
      </form>
    </section>
  )
}
