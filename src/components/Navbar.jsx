import { LinkedIn, GitHub } from "@mui/icons-material";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between px-4 items-center font-manrope font-light border-b border-[#72727279]">
      <div className="text-[#7d7d7d] flex gap-4 items-center">
        <div className="border border-gray-400 p-4 rounded-full cursor-pointer ">
          <Icon icon="ion:mail" width="18" height="18" />
        </div>
        <span>Get in touch</span>
      </div>
      <div>
        <div className="sm:hidden md:hidden lg:flex lg:gap-4 text-[#7d7d7d]">
          <div className="cursor-pointer hidden sm:block md:block">
            LinkedIn
          </div>
          <div className="hidden sm:block md:block">/</div>
          <div className="cursor-pointer hidden sm:block md:block">GitHub</div>
          <div className="hidden sm:block md:block">/</div>
          <div className="cursor-pointer hidden sm:block md:block">
            LeetCode
          </div>
        </div>
        <div className="lg:hidden flex gap-4 text-[#7d7d7d]">
          <div>
            <LinkedIn />
          </div>
          <div>
            <GitHub />
          </div>
          <div>
            <Icon icon="simple-icons:leetcode" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
