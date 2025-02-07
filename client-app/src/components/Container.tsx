import { Outlet } from "react-router-dom"
import SideNav from "./SideNav"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
// import ConnectButton from "./buttons/ConnectButton";
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Button } from "./ui/button"
import { useAccount } from "wagmi"
import { useGetTokenBalances } from "@/hooks/useGetTokenBalances"
// import PrimaryButton from "./buttons/PrimaryButton"

function MyCustomConnectButton() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openConnectModal,
                mounted,
            }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                if (!connected) {
                    return (
                        <button
                            onClick={openConnectModal}
                            className="bg-[#4CFAC7] text-black font-bold text-base py-2 px-12 pr-20 rounded-full transform transition-transform duration-200 hover:scale-105"
                        >
                            Connect Wallet
                        </button>
                    );
                }

                // If connected, show the chain name, avatar, or address, etc.
                return (
                    <div className="flex items-center space-x-2">

                        <button
                            onClick={openAccountModal}
                            type="button"
                            className="bg-[#4CFAC7] text-black font-bold text-base py-2 px-12 mr-20 rounded-full transform transition-transform duration-200 hover:scale-105"
                        >
                            {account.displayName}
                        </button>
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}

const Container = () => {
    const { address } = useAccount()
    const { usdcBalance } = useGetTokenBalances(address!, 1)

    return (
        <SidebarProvider>
            <SideNav />
            <SidebarInset>
                <header className="flex items-center h-28 gap-2 shrink-0">
                    <div className="flex items-center w-full gap-2 px-4">
                        <SidebarTrigger onlyShowWhen="closed" />
                        <div className="flex flex-row items-start gap-14 mt-10 ml-auto md:flex-row">
                            <Button className=" text-white text-base font-bold bg-transparent hover:bg-transparent hover:text-[#4CFAC7]">
                                <span>Whitepaper</span>
                            </Button>
                            <Button className=" text-white text-base font-bold bg-transparent hover:bg-transparent hover:text-[#4CFAC7]">
                                <span>Buy $SAY</span>
                            </Button>

                            <div className="flex flex-col gap-2">
                                <MyCustomConnectButton />
                                <span className="text-white/70 text-sm font-normal font-['Space Grotesk']">
                                    Your balance: {usdcBalance} USDC
                                </span>
                            </div>
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
