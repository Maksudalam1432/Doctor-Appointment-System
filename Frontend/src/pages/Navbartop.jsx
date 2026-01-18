
import { BiLogoGmail } from "react-icons/bi";

const NavbarTop = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-end">
        <div className="bg-teal-700 text-white text-sm w-[68%] rounded-l-md ">
          <div className="flex items-center justify-between px-8 py-2">
            <div className="flex items-center gap-2">
              📞 <span>Emergency Call : 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              ⏰ <span>10:00am TO 10:00pm</span>
            </div>
            <div className="flex items-center gap-2">
             <BiLogoGmail />
  <span>help@techinfoyt.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
