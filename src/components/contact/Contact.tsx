'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaLinkedin, FaInstagram } from 'react-icons/fa'
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const buttonBase =
  'text-sm px-6 py-2 rounded-lg flex items-center gap-2 transition-colors focus:outline-none'

const sharedMotionProps = {
  whileHover: {
    scale: 1.08,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
  whileTap: { scale: 0.95 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false);

  const fieldClassName = "w-full text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    emailjs.send(
        "service_fffef9i",
        "template_h6r3828",
        {
            from_name: form.name,
            to_name: "Peter Shin",
            from_email: form.email,
            to_email: "psshin.code@gmail.com",
            message: form.message,
        },
        "DWiwGdWs7jqmOh2lJ"
    ).then(() => {
        setForm({ name: "", email: "", message: ""});

        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 p-4`}
          >
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTV4bWI2MHV0aGx1dWNxY2VwNGpnenlud2trNGZ2OG41dXNwMnRjdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SggILpMXO7Xt6/giphy.gif"
              alt="celebrate"
              className="w-12 h-12 mr-4 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                message sent.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {"you have a great day :)."}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {"if i don't answer, i'm putting a lot of thought into it... or i might be taking a break."}
              </p>
            </div>
          </div>
        ));
    }).catch(error => {
      console.error(error);

      alert("Something went wrong while sending your email. Sorry!")
    }).finally(() => {
      setIsSending(false);
    })
};

  return (
    <section 
      id="contact"
      className="py-20 px-6 sm:px-12 text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        roast me or connect with me.
      </motion.h1>
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className={fieldClassName}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className={fieldClassName}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={fieldClassName}
              required
            />
          </div>

          <div className="flex gap-x-4 justify-center flex-wrap gap-y-4">
            <motion.button
              type="submit"
              disabled={isSending}
              className={`${buttonBase} text-white cursor-pointer`}
              style={{ backgroundColor: "#d97706" }}
              {...sharedMotionProps}
            >
              send
              <FaPaperPlane className="transform rotate-[15deg]" />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => window.open("https://linkedin.com/in/petershin23")}
              className={`${buttonBase} text-white cursor-pointer`}
              style={{ backgroundColor: '#0077B5' }}
              {...sharedMotionProps}
            >
              connect
              <FaLinkedin className="size-5" />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => window.open("https://instagram.com/peter.shin")}
              className={`${buttonBase} text-white cursor-pointer`}
              style={{ backgroundColor: '#E1306C' }}
              {...sharedMotionProps}
            >
              photos
              <FaInstagram className="size-5" />
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}
