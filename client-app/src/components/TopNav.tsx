// import ConnectButton from "./buttons/ConnectButton";
import { ConnectButton } from "@rainbow-me/rainbowkit"
// import PrimaryButton from "./buttons/PrimaryButton"
import SecondaryButton from "./buttons/SecondaryButton"
import { Button } from "./ui/button"
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const TopNav = () => {
    // const { isConnected, address } = useWeb3ModalAccount();
    /* const { address } = useAccount()
    const { usdcBalance } = useGetTokenBalances(address!, 1) */
    return (
        <nav className=" px-4 py-4 mt-8  fixed md:ml-[22rem] h-auto left-0 right-0 top-0 z-20 ">
            <div className="flex flex-col items-end justify-end pr-20 space-x-6 space-y-2 ">
                <div className="flex space-x-6">
                    <Button className="mr-6 text-white text-base font-bold bg-transparent hover:bg-transparent hover:text-[#4CFAC7]">
                        <span>Whitepaper</span>
                    </Button>
                    <Button className="mr-6 text-white text-base font-bold bg-transparent hover:bg-transparent hover:text-[#4CFAC7]">
                        <span>Buy SAFE</span>
                    </Button>

                    <ConnectButton />
                </div>
                <span className="  text-white/70 text-[15px] font-normal font-['Space Grotesk'] pr-2">

                </span>
            </div>
        </nav>
    )
}

export default TopNav
