import React, { useState } from 'react';
import { CONTACT } from '../constants';  
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import contactImg from '../assets/GIT.png';  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Title Section */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get In Touch
      </motion.h1>

      {/* Contact Form and Image Layout */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4">
        {/* Image on the Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img
            src={contactImg}
            alt="Contact Us"
            className="rounded-2xl"
          />
        </motion.div>

        {/* Form on the Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-5"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Send us <span className='font-semibold text-neutral-500'>a Message</span>
          </h2>

          {formSubmitted ? (
            <div className="text-center mt-5 text-xl text-green-500">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              <motion.input
                name="name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
                className="p-3 rounded-md w-80 border-2 border-neutral-700 focus:outline-none"
                type="text"
                placeholder="Your Name"
                required
              />

              <motion.input
                name="email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
                className="p-3 rounded-md w-80 border-2 border-neutral-700 focus:outline-none"
                type="email"
                placeholder="Your Email"
                required
              />

              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.05 }}
                className="p-3 rounded-md w-80 border-2 border-neutral-700 focus:outline-none"
                rows="5"
                placeholder="Your Message"
                required
              ></motion.textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                           text-white p-3 rounded-md mt-4 w-80"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Contact Information and Social Links Section */}
      <div className="text-center mt-10 tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-xl"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-xl"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b text-xl"
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* Social Media Links */}
      <div className="p-5 flex gap-8 justify-center text-3xl mt-6">
        <motion.a
          href="https://www.linkedin.com/in/sushant-mukhedkar-b1812a25b/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="text-blue-600"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/sushantmukhedkar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="text-white"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="text-blue-400"
        >
          <FaTwitter />
        </motion.a>

        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="text-pink-600"
        >
          <FaInstagram />
        </motion.a>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-neutral-500 mt-10 py-4 border-t border-neutral-700">
        © 2024 Sushant Mukhedkar | All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
