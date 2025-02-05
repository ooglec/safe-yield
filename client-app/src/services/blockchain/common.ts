import { Erc20Abi } from "./types"

export const getAllowance = async (contract: Erc20Abi, owner: string, spender: string) => {
    try {
        return await contract.allowance(owner, spender)
    } catch (_) {
        return 0n
    }
}

export const approveSpending = async (contract: Erc20Abi, spender: string, amount: bigint) => {
    try {
        const tx = await contract.approve(spender, amount)
        const txResponse = await tx.wait()
        return txResponse!.hash
    } catch (_) {
        console.error("error approving spending: ", _)
        return ""
    }
}
