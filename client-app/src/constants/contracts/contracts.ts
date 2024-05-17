import { Contract } from "ethers";

export const USDC_ADDRESS = "0x7E0a8A4622F067336c4F9c550ffD00C70c0F2f2F";
export const SAFE_PRESALE_ADDRESS =
  "0xf5835664ee25Bc394800Ca1d04D424CeEC1Eb571";

const USDC_ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function transfer(address to, uint256 amount) external returns (bool)",
  "function balanceOf(address account) external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)",
];

const SAFE_ABI = [
  "function deposit(address investor, uint128 usdcAmount, bytes32 referrerId) external",
  "function investorAllocations(address) external view returns (uint128)",
  "function totalSold() external view returns (uint128)",
  "function tokenPrice() external view returns (uint128)",
];

export const USDC_DECIMALS = 6;

export const USDC_CONTRACT = new Contract(USDC_ADDRESS, USDC_ABI);
export const SAFE_CONTRACT = new Contract(SAFE_PRESALE_ADDRESS, SAFE_ABI);
