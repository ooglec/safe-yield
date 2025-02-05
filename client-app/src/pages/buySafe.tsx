import React from "react"
import { safeCoin } from "../assets"
import ConnectButton from "../components/buttons/ConnectButton"
import { useAccount } from "wagmi"
import { USDC_DECIMALS, SAFE_CONTRACT, USDC_CONTRACT, SAFE_PRESALE_ADDRESS } from "../constants/contracts/contracts"
import { useGetTokenBalances } from "../hooks/useGetTokenBalances"
import { ethers } from "ethers"
import { useGetAvailableSafe } from "../hooks/useGetAvailableSafe"
import useEthersSigner from "@/services/blockchain/hooks/useEthersSigner"

const BuySafe = () => {
    const { address, isConnected } = useAccount()

    const signer = useEthersSigner()!
    // const { referer } = useParams()
    const [amount, setAmount] = React.useState(0)

    const [txUpdate, setTxUpdate] = React.useState(0)
    // const [usdcBalance, setUsdcBalance] = React.useState(0) // get from usdc contract
    // const [stakedSafe, setStakedSafe] = React.useState(0) // get from safe contract
    const { usdcBalance } = useGetTokenBalances(address!, txUpdate)
    const { tokenPrice, totalSold, stakedSafe } = useGetAvailableSafe(address!, txUpdate)

    const width = 30

    const sanitize = (amount_: number) => {
        if (amount < 0) return false
        if (amount_ > usdcBalance) return true
        return true
    }
    const buySafe = async (amount_: number) => {
        const valid = sanitize(amount_)
        if (!valid) return alert("Invalid amount")

        //@ts-ignore
        const allowance = await USDC_CONTRACT.connect(signer).allowance(address, SAFE_PRESALE_ADDRESS)
        const formattedAmount = ethers.parseUnits(amount_.toString(), USDC_DECIMALS)

        if (allowance < formattedAmount) {
            //@ts-ignore
            const tx = await USDC_CONTRACT.connect(signer).approve(SAFE_PRESALE_ADDRESS, formattedAmount)
            await tx.wait()
        }
        const referer = "0x0000000000000000000000000000000000000000000000000000000000000000"
        try {
            //@ts-ignore
            const tx1 = await SAFE_CONTRACT.connect(signer).deposit(address!, formattedAmount, referer)
            await tx1.wait()
            setTxUpdate(txUpdate + 1)
            alert("Transaction successful")
            return
        } catch (err) {
            console.log(err)
            alert("Transaction failed")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setAmount(parseInt(e.target.value))
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 text-poppins">
            <div className="flex flex-col gap-2">
                <span className="text-[#9999FF] font-bold text-2xl leading-7 [&:not(:first-child)]:mt-6">
                    $SAFE Pre-sale is live!
                </span>
                <span className="text-white/80 font-medium text-2xl leading-7 [&:not(:first-child)]:mt-6">
                    2M $SAFE at {tokenPrice || 0}$ for a 1.10$ launch price
                </span>
            </div>
            <div className="flex flex-col justify-center items-center px-24 gap-6 bg-gradient-to-b from-white/20 to-white/5 mb-10 text-white rounded-xl h-[20rem] w-[35vw]">
                <div className="flex flex-col items-center w-full ">
                    <p className="flex justify-start w-full pl-5 mb-3 text-xl">Amount</p>
                    <div className="flex items-center w-full h-16 text-white rounded-full bg-white/20">
                        <input
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            type="number"
                            className="px-6 no-focus-highlight bg-white/0 w-[80%] h-full rounded-full text-white"
                            placeholder="0"
                        />
                        <span>USDC</span>
                        {/* <span>Max.</span> */}
                    </div>
                </div>
                <div className="flex justify-center w-full gap-3">
                    <span className="text-white">You will get</span>
                    <span className="text-[#4CFAC7]">{amount * tokenPrice || 0} $SAFE</span>
                </div>
                <div className="flex justify-center w-full gap-3">
                    <span className="text-white">You currently have</span>
                    <span className="text-[#4CFAC7]">{stakedSafe || 0} $SAFE</span>
                </div>
                {isConnected ? (
                    <button
                        onClick={() => buySafe(amount)}
                        className="bg-[#9999FF] rounded-full text-white flex items-center justify-center w-[13rem]"
                    >
                        Buy $Safe
                    </button>
                ) : (
                    <ConnectButton />
                )}
            </div>
            <div className="flex  flex-col  items-center  gap-2 p-8 px-24 bg-gradient-to-b from-white/20 to-white/5 rounded-xl text-white h-[10rem] w-[35vw]">
                <p className="text-">Available $SAFE</p>
                <div className="flex items-center justify-between w-full h-6 text-white rounded-full bg-white/20">
                    <div
                        style={{ width: `${(totalSold / 2000000) * 100}%` }}
                        className={`w-[${width}%] h-full rounded-full bg-[#4CFAC7]`}
                    ></div>
                </div>
                <div className="flex justify-between w-full text-sm">
                    <span className="text-white">${totalSold} $SAFE</span>
                    <span className="text-[#4CFAC7]">2M $SAFE</span>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full mb-10">
                <div className="flex items-center justify-center">
                    <img src={safeCoin} className="w-[10rem] pl-5" />
                </div>
                <div className="flex flex-col items-center justify-center text-[#4CFAC7]">
                    <span>Stake $SAFE</span>
                    <span>and get</span>
                </div>
            </div>

            <div className="flex space-x-5 text-white">
                <div className="bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] flex items-start justify-center text-center p-10">
                    Governance power over SafeYields
                </div>
                <div className="bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] flex items-start justify-center text-center p-10">
                    Early access to Emma AI up until launch
                </div>
                <div className="bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] flex items-start justify-center text-center p-10">
                    Revenue share from protocol generates fees
                </div>
            </div>
        </div>
    )
}

export default BuySafe
