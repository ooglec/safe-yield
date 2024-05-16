

import { Link, useLocation } from "react-router-dom";
import { FaArrowLeftLong, FaGithub, FaX, FaYoutube } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { botIcon, dashboardIcon, documentIcon, homeIcon, logo } from "../assets";

const Menus = [
  {
    title: "Website",
    icon: homeIcon,
    // iconActive: dashboard_active,
    path: "/",
    disabled: false,
  },

  {
    title: "Dashboard",
    icon: dashboardIcon,
    // iconActive: earn_active,
    comingSoon: false,
    path: "/dashboard",
    disabled: false,
  },

  {
    title: "Emma AI",
    icon: botIcon,
    // iconActive: lab_iconActive,
    path: "/emma-ai",
    comingSoon: true,
    disabled: false,
  },
  {
    title: "Buy $Safe",
    icon: documentIcon,
    // iconActive: leaderboard_iconActive,
    path: "/buy-safe",
    comingSoon: false,
    disabled: false,
  },
 
];

const isActive = (path: string) => location.pathname === path;

const SideNav = () => {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 z-40 w-[22rem] h-screen border-r border-zinc-300/30  flex flex-col items-center justify-center">
      <div className="regular flex flex-col  space-y-[4rem] min-h-[95vh]  p-5 mx-6 w-full">
        <span>
          <img src={logo} alt="" className="w-[180px] pt-[5rem] ml-14" />
        </span>

        <ul className="flex flex-col space-y-1 w-full px-10 mb-[4rem]">
          {Menus.map((Menu, index) => (
            <div className=" " key={index}>
              <Link to={`${Menu.path}`}>
                <li
                  key={index}
                  className={`flex justify-start pl-2 my-2 py-[4px] cursor-pointer transition duration-300 ease-in hover:bg-light-white  text-sm items-center gap-x-4 w-full h-12
                        ${
                          isActive(Menu.path)
                            ? "text-white  bg-primary/10 border rounded-[40px] border-[#4CFAC7]"
                            : "text-white"
                        } 
                        ${index === 0 && "bg-light-white"} ${
                    Menu.disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <img
                    src={`${
                      Menu.path === location.pathname ? Menu.icon : Menu.icon
                    }`}
                    className=" w-[20px] h-[15px] mr-1 ml-3 "
                  />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 w-full text-left `}
                  >
                    {Menu.title}
                    <br />
                    {Menu.comingSoon && "(coming soon)"}
                  </span>
                </li>
              </Link>
            </div>
          ))}
        </ul>

        

        <div className="absolute bottom-0 pb-10 pl-8">
        <div className="w-[36px] h-[36px]  flex items-center justify-center rounded-full bg-[#4CFAC7] self-start ms-4 cursor-pointer ">
          <span className="text-black">
            <FaArrowLeftLong size="1.5rem" />
          </span>
        </div>
          <div className="flex mt-5">
        
        <div className="w-[36px] h-[36px]  flex items-center justify-center rounded-full bg-[#9999FF]  ms-4 cursor-pointer">
            <span className="text-white">
              <FaGithub size="1.3rem" />
            </span>
          </div>
          <div className="w-[36px] h-[36px]  flex items-center justify-center rounded-full bg-[#9999FF]  ms-4 cursor-pointer">
            <span className="text-white">
              <FaYoutube size="1.3rem" />
            </span>
          </div>
          <div className="w-[36px] h-[36px]  flex items-center justify-center rounded-full bg-[#9999FF]  ms-4 cursor-pointer">
            <span className="text-white">
              <FaDiscord size="1.3rem" />
            </span>
          </div>
          <div className="w-[36px] h-[36px]  flex items-center justify-center rounded-full bg-[#9999FF]  ms-4 cursor-pointer">
            <span className="text-white">
              <FaTwitter size="1.3rem" />
            </span>
          </div>
          </div>
         
          
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
