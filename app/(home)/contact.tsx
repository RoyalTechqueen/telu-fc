"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    // Construct the custom message
    const fullName = `${firstName} ${lastName}`;
    const customMessage = `Hi, my name is ${fullName}. ${message}`;

    // Encode the message and phone number for the WhatsApp API URL
    const encodedMessage = encodeURIComponent(customMessage);
    const whatsappUrl = `https://wa.me/447950967561?text=${encodedMessage}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSending(false);
      toast.success("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setPhone("");
      setMessage("");
    }, 2000);
  };

  return (
    <div
      className="scroll-mt-24 min-h-screen flex flex-col items-center justify-center mb-4"
      id="contact"
    >
      <ToastContainer />
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden md:flex">
        <div className="md:w-1/2 p-8 flex flex-col items-center justify-center bg-yellow-50">
          <div className="mb-4">
            <Image
              src="/telu.png"
              alt="logo"
              className="rounded-xl"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            GET IN <span className="text-yellow-500">TOUCH</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-600 text-sm mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Mohammad"
                  className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-600 text-sm mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Adebayo"
                  className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+2341234567890"
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="message"
              >
                Enter your message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here"
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`mt-6 w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
