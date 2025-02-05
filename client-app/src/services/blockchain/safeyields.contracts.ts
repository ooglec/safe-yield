import { useMemo } from "react"
import { BrowserProvider, ContractRunner } from "ethers"
import { addresses, SupportedChain, supportedChains } from "./constants/addresses"
import { useWeb3ModalProvider, useWeb3ModalAccount } from "@web3modal/ethers/react"
import { EmmaVaultAbi__factory, Erc20Abi__factory } from "./types"

export const useSafeYieldsContract = (optionalRunner?: ContractRunner) => {
    const { chainId } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()

    const runner = optionalRunner ?? (walletProvider ? new BrowserProvider(walletProvider) : undefined)

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
