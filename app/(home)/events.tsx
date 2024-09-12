"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = ["/anniversary.jpg", "/anni2.jpg", "/anni3.jpg"];

const AnniversaryEvent: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Event</h2>
      </div>
      <div className="container mx-auto px-4 mb-8">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[700px]">
              <Image
                src={src}
                alt={`Anniversary Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="shadow-xl rounded-lg p-8 border border-gray-200">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800 text-center">
            Join Us for Telu FC&apos;s Spectacular 5th Anniversary Celebration!
          </h2>
          <h3 className="text-3xl mb-6 text-gray-800">Event Details</h3>
          <p className="text-lg text-gray-700 mb-3">
            <span className="font-semibold text-yellow-500 text-lg">Date:</span>{" "}
            September 28, 2024
          </p>
          <p className="text-lg text-gray-700 mb-3">
            <span className="font-semibold text-yellow-500 text-lg">
              Location:
            </span>{" "}
            Alamu Anfield Stadium, Quarters, Oke Afo, Iwo, Osun State, Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnniversaryEvent;
