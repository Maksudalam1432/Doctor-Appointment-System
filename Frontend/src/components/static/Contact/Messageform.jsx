import React from "react";

function Messageform() {
  return (
    <section className="w-full">
      <div className=" mx-auto ">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Send Us Message
        </h1>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="border text-black border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="border  text-black border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
          />

          <textarea
            rows="5"
            placeholder="Enter your message"
            className="border  text-black border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 "
          ></textarea>

          <button
            type="submit"
            className="bg-gray-500 text-white py-3 rounded-md hover:bg-gray-700 transition font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Messageform;
