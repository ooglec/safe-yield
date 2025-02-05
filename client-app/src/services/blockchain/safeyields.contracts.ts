import { useMemo } from "react"
import { ContractRunner } from "ethers"
import { addresses, SupportedChain, supportedChains } from "./constants/addresses"
import { useAccount } from "wagmi"
import { EmmaVaultAbi__factory, Erc20Abi__factory } from "./types"
import useEthersProvider from "./hooks/useEthersProvider"

export const useSafeYieldsContract = (optionalRunner?: ContractRunner) => {
    const { chainId } = useAccount()
    const provider = useEthersProvider()

    const runner = optionalRunner ?? provider

    const validChainId = supportedChains.has(chainId ?? 0) ? (chainId as SupportedChain) : SupportedChain.Arbitrum

    const { emmaVault, usdc } = addresses[validChainId]

    return useMemo(
        () => ({
            emmaVault: EmmaVaultAbi__factory.connect(emmaVault, runner),
            usdc: Erc20Abi__factory.connect(usdc, runner),
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [chainId, runner]
    )
}
