"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a form data object to send
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    // Send the form data to your email using the formsubmit.co service
    // Replace YOUR_EMAIL with your actual email address
    fetch("https://formsubmit.co/rhlkr7474@gmail.com", {
      method: "POST",
      body: formDataToSend,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitting(false);
          setSubmitMessage(
            "Thank you for your message! I'll get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" });

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
        setSubmitMessage(
          "There was an error sending your message. Please try again later."
        );

        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitMessage("");
        }, 5000);
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-10 md:px-20"
      id="contact"
    >
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
        Get In Touch
      </h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          <h2 className="text-2xl font-semibold text-white">
            Contact Information
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#2A0E61] rounded-full">
                <EnvelopeIcon className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">rhlkr7474@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#2A0E61] rounded-full">
                <PhoneIcon className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+81 80-7629-0286</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#2A0E61] rounded-full">
                <MapPinIcon className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Tokyo, Japan</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium text-white mb-4">
              Connect with me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/RedKarim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#2A0E61] rounded-full hover:bg-purple-500/30 transition-all duration-300"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mahdyar-karimi-vesal-88841b200/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#2A0E61] rounded-full hover:bg-purple-500/30 transition-all duration-300"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="w-full md:w-1/2"
        >
          <form
            action="https://formsubmit.co/rhlkr7474@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-[#0A0A1B] p-8 rounded-xl border border-[#2A0E61] relative z-[50]"
          >
            {/* FormSubmit.co configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://redkarim.vercel.app/#contact"
            />
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1A1A2E] border border-[#2A0E61] rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1A1A2E] border border-[#2A0E61] rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1A1A2E] border border-[#2A0E61] rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 button-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 flex justify-center items-center"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>

            {submitMessage && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                {submitMessage}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
