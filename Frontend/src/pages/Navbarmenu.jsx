import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="w-full flex items-center justify-between px-6 py-2">

        <div className="flex items-center gap-3">
          <img
            src="https://imgs.search.brave.com/tulGan4RBFSfXro6Mj9NMnatT2bM5lSE9E4Fp1IOa_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vOTI0OTFi/ZDYtOWNhMy00ZjA1/LThmNjgtMmE3OTBm/YTRiOGNkL2xvZ28t/c2VhcmNoLWdyaWQt/Mng_bG9nb1RlbXBs/YXRlVmVyc2lvbj0y/JnY9NjM5MDA4ODYy/NjYwMzAwMDAwJmxh/eW91dD1hdXRvLTEt/MQ"
            alt="logo"
            className="w-14 h-14 object-contain rounded-xl"
          />
          <div className="border-l-2 border-gray-300 pl-3">
            <h1 className="text-lg font-bold text-gray-900">
              Techinfo YT
            </h1>
            <span className="inline-block mt-0.5 bg-[#6b3f1d] text-white text-[10px] px-2 py-0.5">
              A Super Speciality Hospital
            </span>
          </div>
        </div>

        <ul className="hidden lg:flex gap-8 text-gray-800 text-sm font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/doctors">Doctors</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <NavLink to="/appointment">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
            Book Appointment
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default NavbarMenu;
