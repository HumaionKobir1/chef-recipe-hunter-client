import React, { useState } from 'react';

const MessageForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form className="bg-white rounded-lg shadow-lg p-6 w-full md:w-5/6 mx-auto px-3 md:mt-14 mt-8 mb-12" onSubmit={handleSubmit}>
            <h3 className='text-2xl text-orange-400 font-serif text-center'>Get in Touch Now</h3>
            <h1 className='text-center text-5xl font-bold'>Write a Message</h1>

          <div className='md:flex justify-center gap-5 mb-3 md:mt-16 mt-10'>
          <div className="mb-4">
            <label className="text-gray-600 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          </div>
          <div className='md:flex justify-center gap-5 mb-3'>
          <div className="mb-4">
            <label className="text-gray-600 font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the subject of your message"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 font-bold mb-2" htmlFor="phoneNum">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNum"
              type="tel"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-600 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-8 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      );
};

export default MessageForm;