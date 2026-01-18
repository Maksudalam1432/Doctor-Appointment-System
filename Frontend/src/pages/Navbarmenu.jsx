import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";

const NavbarMenu = () => {
  return (
    <div className="bg-white shadow-md" >
      <div className="w-full flex items-start justify-between px-6 py-2">

        <div className="flex items-start gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-54 object-contain rounded-xl self-start -mt-9"
          />
        </div>

        <ul className="hidden lg:flex gap-8 text-gray-800 text-sm font-medium mt-2">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/doctors">Doctors</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <NavLink to="/appointment" className="mt-2">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
            Book Appointment
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default NavbarMenu;
