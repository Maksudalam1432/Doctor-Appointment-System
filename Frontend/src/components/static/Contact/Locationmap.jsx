import React from "react";

function Locationmap() {
  return (
    <div className="w-full flex justify-center py-10">
      <iframe
        className="rounded-md w-full max-w-md h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26536.367359205215!2d75.81768532748005!3d26.79896047209141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768800607104!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Locationmap;
    