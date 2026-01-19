import React from "react";
import empower from "../../../image/hospital/empower.png";
import personalize from "../../../image/hospital/personalize.png";
import trust from "../../../image/hospital/trust.png";

function Whychoose() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

     
        <h2 className="text-4xl text-black font-semibold text-center mb-16">
          Why Choose Us?
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        
          <div className=" rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <img
              src={personalize}
              alt="Personalize Excellence"
              className="w-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4 text-black p-2">
              Personalize Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, error. Corporis, accusantium doloribus nihil
              repellendus debitis eveniet, a delectus architecto consequatur
              veritatis provident officiis soluta aut!
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <img
              src={trust}
              alt="Trusted Care"
              className="w-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Trusted Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, error. Corporis, accusantium doloribus nihil
              repellendus debitis eveniet, a delectus architecto consequatur
              veritatis provident officiis soluta aut!
            </p>
          </div>


          <div className="border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <img
              src={empower}
              alt="Empowering Wellness Journey"
              className="w-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Empowering Wellness Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, error. Corporis, accusantium doloribus nihil
              repellendus debitis eveniet, a delectus architecto consequatur
              veritatis provident officiis soluta aut!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Whychoose;
