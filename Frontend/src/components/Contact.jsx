import React from "react";
import Contactmessage from "./static/Contact/Contactmessage";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  return (
    <div className="bg-white">
      
      <div className="flex justify-center py-6 px-4">
        <div className="w-full max-w-5xl rounded-md border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-3 text-sm text-gray-800">
            
            <div className="flex items-center gap-2">
              📞 <span>Emergency Call : 1234567890</span>
            </div>

            <div className="flex items-center gap-2">
              ⏰ <span>10:00am TO 10:00pm</span>
            </div>

            <div className="flex items-center gap-2">
              <BiLogoGmail className="text-lg" />
              <span>help@techinfoyt.com</span>
            </div>

          </div>
        </div>
      </div>

      <Contactmessage />
    </div>
  );
}

export default Contact;
