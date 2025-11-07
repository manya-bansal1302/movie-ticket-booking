import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import bgImage from "../assets/backgroundImage.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col items-start justify-center gap-4 px-6 md:p-16 lg:px-36 bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>

      <div className="relative z-10 mt-20 md:mt-32">
        <img
          src={assets.marvelLogo}
          className="max-h-11 lg:h-11"
          alt="Marvel Logo"
        />
        <h1 className="text-5xl md:text-[70px] md:leading-[1.2] font-semibold max-w-2xl mt-4">
          Guardians <br /> of the Galaxy
        </h1>

        <div className="flex items-center gap-4 text-gray-300 mt-2">
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4.5 h-4.5" /> 2018
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4.5 h-4.5" /> 2h 8m
          </div>
        </div>

        <p className="max-w-md text-gray-300 mt-4">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop a
          conspiracy.
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="flex items-center gap-2 px-6 py-3 mt-6 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
