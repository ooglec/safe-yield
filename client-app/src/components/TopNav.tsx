import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

const TopNav = () => {
  return (
    <nav className=" px-4 py-4 mt-8  fixed md:ml-[22rem] h-auto left-0 right-0 top-0 z-20 ">
      <div className=" flex flex-col items-end justify-end space-x-6 pr-20 space-y-2">
        <div className="flex space-x-6">
          <SecondaryButton buttonText="Get referral link" width="211.11px" />
          <PrimaryButton  buttonText="0x8a086A2872875..." width="211.11px" />
        </div>
        <span className="  text-white/70 text-[15px] font-normal font-['Space Grotesk'] pr-2">
          Your balance: 1234.56 USDC
        </span>
      </div>
    </nav>
  );
};

export default TopNav;
