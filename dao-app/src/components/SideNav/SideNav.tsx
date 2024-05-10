import {
  safeYieldsLogo,
  websiteIcon,
  dashboardIcon,
  dollarSign,
  robotIcon,
  trending,
  expenseIcon,
  commentIcon,
  doubleArrow,
  documentIcon,
} from "../../assets/index.ts";

import { Link, useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Menus = [
  {
    title: "Website",
    icon: websiteIcon,
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
    title: "Yield aggregator",
    icon: dollarSign,
    // iconActive: leaderboard_iconActive,
    path: "/yield-aggregator",
    comingSoon: true,
    disabled: false,
  },
  {
    title: "Emma the Trading Bot",
    icon: robotIcon,
    // iconActive: lab_iconActive,
    path: "/tradingbot",
    comingSoon: true,
    disabled: false,
  },
  {
    title: "Trade SAFE",
    icon: doubleArrow,
    // iconActive: referral_iconActive,
    path: "/trade-safe",
    comingSoon: false,
    disabled: false,
  },
  {
    title: "Buy an NFT",
    icon: documentIcon,
    // iconActive: leaderboard_iconActive,
    path: "/buy-an-nft",
    comingSoon: false,
    disabled: false,
  },
  {
    title: "DAO",
    icon: commentIcon,
    // iconActive: leaderboard_iconActive,
    path: "/dao",
    comingSoon: false,
    disabled: false,
  },
  {
    title: "Investment Pool Portfolio",
    icon: trending,
    // iconActive: leaderboard_iconActive,
    path: "/investment",
    comingSoon: true,
    disabled: false,
  },
  {
    title: "Expense Log",
    icon: expenseIcon,
    // iconActive: leaderboard_iconActive,
    path: "/expenselog",
    comingSoon: true,
    disabled: false,
  },
];

const isActive = (path: string) => location.pathname === path;

const SideNav = () => {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 z-40 w-[22rem] h-screen border-r border-zinc-300/30  flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center justify-around min-h-[75vh]  p-5 mx-6 space-y-6 ">
        <span>
          <img src={safeYieldsLogo} alt="" className="w-[180px] " />
        </span>

        <ul className="flex flex-col space-y-1">
          {Menus.map((Menu, index) => (
            <div className=" " key={index}>
              <Link to={`${Menu.path}`}>
                <li
                  key={index}
                  className={`flex justify-start p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 w-full 
                        ${
                          isActive(Menu.path)
                            ? "text-white font-bold bg-primary/10 border rounded-[40px] border-lime-300"
                            : "text-white/60"
                        } 
                        ${index === 0 && "bg-light-white"} ${
                    Menu.disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <img
                    src={`${
                      Menu.path === location.pathname ? Menu.icon : Menu.icon
                    }`}
                    className=" w-[30px] h-[30px] mr-1 ml-3 "
                  />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 w-full  `}
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

        <div className="w-[46px] h-[46px]  flex items-center justify-center rounded-full bg-[#D9E021] self-start ms-4 ">
          <span className="text-black">
            <FaArrowLeftLong size="1.5rem" />
          </span>
        </div>

        <div className="flex  ">
          <div className="w-[46px] h-[46px]  flex items-center justify-center rounded-full bg-[#F28705]  ms-4">
            <span className="text-white">
              <FaDiscord size="1.5rem" />
            </span>
          </div>
          <div className="w-[46px] h-[46px]  flex items-center justify-center rounded-full bg-[#F28705]  ms-4">
            <span className="text-white">
              <FaTwitter size="1.5rem" />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
