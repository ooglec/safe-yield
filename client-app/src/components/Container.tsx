import { Outlet } from "react-router-dom"
import SideNav from "./SideNav"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import { useAccount } from "wagmi"
import { useGetTokenBalances } from "@/hooks/useGetTokenBalances"
import SecondaryButton from "./buttons/SecondaryButton"
// import ConnectButton from "./buttons/ConnectButton";
import { ConnectButton } from "@rainbow-me/rainbowkit"
// import PrimaryButton from "./buttons/PrimaryButton"

const Container = () => {
    const { address } = useAccount()
    const { usdcBalance } = useGetTokenBalances(address!, 1)

    return (
        <SidebarProvider>
            <SideNav />
            <SidebarInset>
                <header className="flex items-center h-16 gap-2 shrink-0">
                    <div className="flex items-center w-full gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="h-4 mr-2" />
                        <span className="  text-white/70 text-[15px] font-normal font-['Space Grotesk'] pr-2">
                            Your balance: {usdcBalance} USDC
                        </span>
                        <div className="flex flex-col items-center gap-6 ml-auto md:flex-row">
                            <SecondaryButton buttonText="Get referral link" width="211.11px" />

                            <ConnectButton />
                        </div>
                    </div>
                </header>
                <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Container
