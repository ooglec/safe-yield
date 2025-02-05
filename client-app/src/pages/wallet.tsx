import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

import { ethers } from "ethers"
import { useSafeYieldsContract } from "@/services/blockchain/safeyields.contracts"
import useEthersSigner from "@/services/blockchain/hooks/useEthersSigner"
import { useAccount } from "wagmi"
import { getAllowance, approveSpending } from "@/services/blockchain/common"
import { trimDecimalPlaces } from "@/utils/helpers"

export default function Wallet() {
    const { address } = useAccount()
    const signer = useEthersSigner()!

    const { usdc, emmaVault } = useSafeYieldsContract(signer)

    const [amounts, setAmounts] = useState({
        amountFormatted: "0",
        amountBigint: 0n,
    })

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value

        if (isNaN(+input)) return

        input = trimDecimalPlaces(input, 3)

        const amountFormatted = input
        const amountBigint = ethers.parseUnits(input, 6)

        setAmounts({ amountFormatted, amountBigint })
    }

    const handleApproval = async () => {
        //@M3g4m1nd3r screen loading, if used, can be turned on here
        if (!address || !signer) {
            //@M3g4m1nd3r add error message to user to connect wallet
            return
        }
        if (amounts.amountBigint === 0n) {
            //@M3g4m1nd3r add error message to user to enter amount
            return
        }
        const allowance = await getAllowance(usdc, address, await emmaVault.getAddress())

        if (allowance < amounts.amountBigint) {
            try {
                const txHash = await approveSpending(usdc, await emmaVault.getAddress(), amounts.amountBigint)
                console.log("approval hash: ", txHash)
                //@M3g4m1nd3r add toast message to user
            } catch (error) {
                console.error("error approving spending: ", error)
            } finally {
                setAmounts({
                    amountFormatted: "0",
                    amountBigint: 0n,
                })

                //@M3g4m1nd3r screen loading, if used, can be turned off here
            }
        }
    }

    const handleEmmaVaultDeposit = async () => {
        //@M3g4m1nd3r screen loading, if used, can be turned on here
        if (!address) {
            //@M3g4m1nd3r add error message to user to connect wallet
            return
        }
        if (amounts.amountBigint === 0n) {
            //@M3g4m1nd3r add error message to user to enter amount
            return
        }

        try {
            const tx = await emmaVault.deposit(amounts.amountBigint, address)
            const txResponse = await tx.wait()
            const txHash = txResponse!.hash

            //@M3g4m1nd3r add toast message to user with txHash to view on explorer
        } catch (error) {
            console.error("error depositing into emma vault: ", error)
        } finally {
            setAmounts({
                amountFormatted: "0",
                amountBigint: 0n,
            })

            //@M3g4m1nd3r screen loading, if used, can be turned off here
        }
    }

    const handleEmmaVaultWithdraw = async () => {
        if (!address) {
            //@M3g4m1nd3r add error message to user to connect wallet
            return
        }
        if (amounts.amountBigint === 0n) {
            //@M3g4m1nd3r add error message to user to enter amount
            return
        }

        const userVaultShares = await emmaVault.balanceOf(address)
        const sharesPreviewed = await emmaVault.previewWithdraw(amounts.amountBigint)

        if (userVaultShares < sharesPreviewed) {
            //@M3g4m1nd3r add error message to user that they don't have enough shares for the amount they want to withdraw
            return
        }

        try {
            const tx = await emmaVault.withdraw(amounts.amountBigint, address, address)
            const txResponse = await tx.wait()
            const txHash = txResponse!.hash

            console.log("withdraw hash: ", txHash)
            //@M3g4m1nd3r add toast message to user with txHash to view on explorer
        } catch (error) {
            console.error("error withdrawing from emma vault: ", error)
        }
    }

    //@M3g4m1nd3r this another option for withdrawal, not a must to use it, we can remove it if no need.
    const handleEmmaVaultRedeem = async () => {
        if (!address) {
            //@M3g4m1nd3r add error message to user to connect wallet
            return
        }
        if (amounts.amountBigint === 0n) {
            //@M3g4m1nd3r add error message to user to enter amount
            return
        }

        const userVaultShares = await emmaVault.balanceOf(address)
        if (userVaultShares < amounts.amountBigint) {
            //@M3g4m1nd3r add error message to user that they don't have enough shares  to redeem
            return
        }

        try {
            const tx = await emmaVault.redeem(amounts.amountBigint, address, address)
            const txResponse = await tx.wait()
            const txHash = txResponse!.hash

            console.log("redeem hash: ", txHash)
            //@M3g4m1nd3r add toast message to user with txHash to view on explorer
        } catch (error) {
            console.error("error redeeming from emma vault: ", error)
        } finally {
            setAmounts({
                amountFormatted: "0",
                amountBigint: 0n,
            })

            //@M3g4m1nd3r screen loading, if used, can be turned off here
        }
    }

    return (
        <div className="flex items-center justify-center flex-grow">
            <Tabs defaultValue="withdraw" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                    <TabsTrigger value="deposit">Deposit</TabsTrigger>
                </TabsList>
                <TabsContent value="withdraw">
                    <Card>
                        <CardContent className="pt-8 space-y-2">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input className="peer pe-12 ps-6" type="number" onChange={handleAmountChange} />
                                    <span className="absolute inset-y-0 flex items-center justify-center text-sm pointer-events-none end-0 pe-3 text-muted-foreground peer-disabled:opacity-50">
                                        USDC
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleApproval} className="w-full">
                                Approve
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="deposit">
                    <Card>
                        <CardContent className="pt-8 space-y-2">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input className="peer pe-12 ps-6" type="text" />
                                    <span className="absolute inset-y-0 flex items-center justify-center text-sm pointer-events-none end-0 pe-3 text-muted-foreground peer-disabled:opacity-50">
                                        USDC
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleEmmaVaultDeposit} className="w-full">
                                Deposit
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
