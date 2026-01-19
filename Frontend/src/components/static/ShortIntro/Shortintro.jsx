import React from "react";
import hos from "../../../image/hospital/hos.jpg";
import { NavLink } from "react-router-dom";

function Shortintro() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        
        <div className="flex justify-start -ml-25">
          <img
            src={hos}
            alt="Hospital Interior"
            className="w-full h-[420px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
            TECHINFO YT
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            A Super Speciality Hospital
          </p>

          <p className="mt-8 text-gray-700 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            dolorem dolorum dicta, ipsam earum repellendus unde omnis tenetur.
            Laudantium dolorum obcaecati suscipit velit.
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            dolorem dolorum dicta, ipsam earum repellendus unde omnis tenetur.
            Laudantium dolorum obcaecati suscipit velit.
          </p>





          <button
            className="mt-10 px-7 py-3 bg-gray-600 text-white rounded-md
            hover:bg-gray-800 transition shadow-md"
          >
             
             <NavLink to="/Appointment">Book A Appointment Now</NavLink>

          </button>
        </div>

      </div>
    </section>
  );
}

export default Shortintro;
