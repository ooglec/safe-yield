
import { useEffect, useState } from 'react';
import { useWeb3ModalProvider } from '@web3modal/ethers/react';
import { USDC_CONTRACT } from '../constants/contracts/contracts';
import { BrowserProvider, ethers } from 'ethers';
import { Contract } from 'ethers';

const useGetTokenBalances = (address: string, txUpdate: number) => {
    const { walletProvider } = useWeb3ModalProvider();

    const [usdcBalance, setUsdcBalance] = useState(0);
    const [safeBalance, setSafeBalance] = useState(0);
    const [stakedSafe, setStakedSafe] = useState(0);

    

    useEffect(() => {
        if (!walletProvider || !address) return;
    
        const getBalances = async () => {
            try {
                 const provider = new BrowserProvider(walletProvider!);
                const USDC_CONTRACT_ = USDC_CONTRACT.connect(provider) as Contract;
                // const SAFE_CONTRACT_ = SAFE_CONTRACT.connect(provider) as Contract;

                const usdcBalance_ = await USDC_CONTRACT_.balanceOf(address);
                console.log(usdcBalance_);
                setUsdcBalance(Number(ethers.formatUnits(usdcBalance_, 6)));
            } catch (err) {
            }
        };

        getBalances();
    }, [walletProvider, address, txUpdate]);

    return { usdcBalance, safeBalance, stakedSafe };
};

export { useGetTokenBalances };