import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useGetTokenBalances } from "@/hooks/useGetTokenBalances";
import SecondaryButton from "./buttons/SecondaryButton";
import ConnectButton from "./buttons/ConnectButton";
import PrimaryButton from "./buttons/PrimaryButton";



const Container = () => {
  const { isConnected, address } = useWeb3ModalAccount();
  const { usdcBalance } = useGetTokenBalances(address!, 1)

  return (
    <SidebarProvider>
      <SideNav />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="  text-white/70 text-[15px] font-normal font-['Space Grotesk'] pr-2">
              Your balance: {usdcBalance} USDC
            </span>          
            <div className="flex flex-col md:flex-row items-center gap-6 ml-auto">
              <SecondaryButton buttonText="Get referral link" width="211.11px" />
              {!isConnected ? <ConnectButton /> :
                <PrimaryButton buttonText={address?.slice(0, 12) + "...."} width="211.11px" />
              }
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>          
    </SidebarProvider>
  );
}

export default Container
