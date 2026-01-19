import NavbarTop from "./Navbartop";
import NavbarMenu from "./Navbarmenu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow" >

      <NavbarTop />
      <NavbarMenu />
    
    </div>
  );
};

export default Navbar;
