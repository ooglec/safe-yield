// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { FallbackProvider, JsonRpcProvider, BrowserProvider, JsonRpcSigner } from "ethers"
import type { Chain, Client, Transport, Account } from "viem"

export function clientToProvider(client: Client<Transport, Chain>) {
    const { chain, transport } = client
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    }
    if (transport.type === "fallback") {
        const providers = (transport.transports as ReturnType<Transport>[]).map(
            ({ value }) => new JsonRpcProvider(value?.url, network)
        )
        if (providers.length === 1) return providers[0]
        return new FallbackProvider(providers)
    }
    return new JsonRpcProvider(transport.url, network)
}

export function clientToSigner(client: Client<Transport, Chain, Account>) {
    const { account, chain, transport } = client
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    }
    const provider = new BrowserProvider(transport, network)
    const signer = new JsonRpcSigner(provider, account.address)
    return signer
}
