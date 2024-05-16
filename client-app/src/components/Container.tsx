import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";



const Container = () => {
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

export default Container
