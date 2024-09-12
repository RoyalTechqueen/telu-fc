"use client";

import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_w2y3aee",
        "template_00vcadm",
        formData,
        "oTnHA69EAwtBl8aHI"
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent Succesfully!");
        setFormData({ name: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send the message, please try again later.");
      });
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.name}
                  onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`mt-6 w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
