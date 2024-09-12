"use client";

import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Application() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    phone: "",
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
        "template_9mf2gob",
        formData,
        "oTnHA69EAwtBl8aHI"
      )
      .then(() => {
        setLoading(false);
        toast.success("Application submitted sucessfully!");
        setFormData({
          name: "",
          email: "",
          position: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error(
          "Failed to send submit application, please try again later."
        );
      });
  };

  return (
    <section className="py-16 bg-yellow-100" id="application">
      <ToastContainer />
      <div className="flex items-center fixed top-4 left-0">
        <Link href="/">
          <Image
            src="/telu.png"
            alt="logo"
            className="rounded-xl"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-primary text-4xl font-bold uppercase mb-8 mt-12 lg:mt-2">
          Apply to Join Telu FC
        </h2>
        <p className="text-gray-700 mb-12">
          Fill out the form below to apply for a position with Telu FC Academy.
          We look forward to reviewing your application!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-left font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-left font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-left font-semibold text-gray-700"
              >
                Preferred Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-left font-semibold text-gray-700"
            >
              Why do you want to join Telu FC?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`mt-6 w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Application"}
          </button>
        </form>
        <div className="mt-8">
          <Link href="/" className="text-yellow-500 hover:text-yellow-600">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
