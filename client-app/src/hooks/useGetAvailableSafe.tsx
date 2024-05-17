
import { useEffect, useState } from 'react';
import { useWeb3ModalProvider } from '@web3modal/ethers/react';
import { SAFE_CONTRACT } from '../constants/contracts/contracts';
import { BrowserProvider, ethers } from 'ethers';
import { Contract } from 'ethers';

const useGetAvailableSafe = (address: string, txUpdate: number) => {
    const { walletProvider } = useWeb3ModalProvider();

    const [stakedSafe, setStakedSafe] = useState(0);
    const [totalSold, setTotalSold] = useState(0);
    const [tokenPrice, setTokenPrice] = useState(0);

    const provider = new BrowserProvider(walletProvider!);

    useEffect(() => {
        if (!walletProvider || !address) return;
    
        const getBalances = async () => {
            const SAFE_CONTRACT_ = SAFE_CONTRACT.connect(provider) as Contract;
            const safeBalance_ = await SAFE_CONTRACT_.investorAllocations(address);
            const totalSold_ = await SAFE_CONTRACT_.totalSold();
            const tokenPrice_ = await SAFE_CONTRACT_.tokenPrice();
           
            setStakedSafe(parseFloat(ethers.formatEther(safeBalance_)));
            setTotalSold(parseFloat(ethers.formatEther(totalSold_)));
            setTokenPrice(parseFloat(ethers.formatEther(tokenPrice_)));

            console.log(totalSold, tokenPrice, stakedSafe);
        };

        getBalances();
    }, [walletProvider, address, txUpdate]);

    

    return { stakedSafe, totalSold, tokenPrice };
};

export { useGetAvailableSafe };