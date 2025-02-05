import "./App.css"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"
//import { BrowserProvider } from 'ethers'

const projectId = import.meta.env.VITE_PROJECT_ID

// const arbitrum_sepolia = {
//     chainId: 421614,
//     name: 'Arbitrum Sepolia',
//     currency: 'ETH',
//     explorerUrl: "https://sepolia.arbiscan.io/",
//     rpcUrl : "https://endpoints.omniatech.io/v1/arbitrum/sepolia/public	"
// }

const arbitrum = {
    chainId: 42161,
    name: "Arbitrum",
    currency: "ETH",
    explorerUrl: "https://arbiscan.io",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
}

const flowEvm = {
    chainId: 747,
    name: "EVM on Flow",
    currency: "FLOW",
    explorerUrl: "https://evm.flowscan.io/",
    rpcUrl: "https://mainnet.evm.nodes.onflow.org",
}

const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
}

const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    // enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: "...", // used for the Coinbase SDK
    defaultChainId: 1, // used for the Coinbase SDK
})

createWeb3Modal({
    ethersConfig,
    chains: [arbitrum, flowEvm],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
})

function App() {
    return (
        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </>
    )
}

export default App
