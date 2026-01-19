import React from "react";
import Locationmap from "./Locationmap";
import Messageform from "./Messageform";

function Contactmessage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Locationmap />
        <Messageform />
      </div>
    </section>
  );
}

export default Contactmessage;
