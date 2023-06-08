import {
  faLinkedinIn,
  faGithub,
  faCode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between px-4 items-center font-manrope font-light">
      <div className="text-[#7d7d7d] cursor-pointer">Get in touch</div>
      <div>
        <div className="sm:hidden md:hidden lg:flex lg:gap-4 text-[#7d7d7d]">
          <div className="cursor-pointer sm:hidden md:hidden ">LinkedIn</div>
          <div>/</div>
          <div className="cursor-pointer sm:hidden md:hidden ">GitHub</div>
          <div>/</div>
          <div className="cursor-pointer sm:hidden md:hidden ">LeetCode</div>
        </div>
        <div className="lg:hidden sm:flex sm:gap-2 md:flex md:gap-2 text-[#7d7d7d]">
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} size="xs" />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} size="xs" />
          </div>
          <div>
            <FontAwesomeIcon icon={faCode} size="xs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
