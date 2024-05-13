import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav/SideNav";
import TopNav from "../components/TopNav/TopNav"


const MainContainer = () => {
  return (
    <div className="">
      <SideNav />

      <main className="p-4 md:ml-[22rem] ">
        <TopNav  />

        {/* LOAD PAGES */}
        <Outlet />
      </main>

    </div>
  );
}

export default MainContainer
