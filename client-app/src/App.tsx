import "./App.css"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"

import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { arbitrum, flowMainnet } from "wagmi/chains"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const config = getDefaultConfig({
    appName: "SafeYields",
    projectId: import.meta.env.VITE_PROJECT_ID,
    chains: [arbitrum, flowMainnet],
    ssr: false, // If your dApp uses server side rendering (SSR)
})
const queryClient = new QueryClient()

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default App
