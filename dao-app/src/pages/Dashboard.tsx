import HoldingsCard from "../components/cards/HoldingsCard";
import { tierbg1, tierbg2 } from "../assets";
import TierCard from "../components/cards/TierCard";




const TierInfo = [
  {
    tierNo: 1,
    percentageOwnership: 0.00625,
    nftCount: 2,
    bgImage: tierbg1,
  },
  {
    tierNo: 2,
    percentageOwnership: 0.0125,
    nftCount: 0,
    bgImage: tierbg2,
  },
  {
    tierNo: 3,
    percentageOwnership: 0.025,
    nftCount: 1,
    bgImage: tierbg1,
  },
  {
    tierNo: 4,
    percentageOwnership: 0.05,
    nftCount: 0,
    bgImage: tierbg2,
  },
];

const Dashboard = () => {
  return (
    <div className="mt-16 w-[75vw] h-[80vh]  flex flex-col space-y-8 justify-start pt-6 items-center ">
      <section className="flex space-x-4 ">
        <HoldingsCard cardTitle="SAFE Holdings" amount={36.81}>
          <div className="text-yellow-400 text-2xl font-bold ">
            <span>36.20 SAFE</span>
          </div>
        </HoldingsCard>
        <HoldingsCard cardTitle="SAFE+ Holdings" amount={36.81}>
          <div className="text-yellow-400 text-2xl font-bold ">
            <span>36.20 SAFE +</span>
          </div>
        </HoldingsCard>
        <HoldingsCard cardTitle="NFT Rewards" amount={36.81}>
          <div className="flex    text-yellow-400 text-2xl font-bold items-center space-x-6">
            <span>2.72$</span>
            <span>
              <button className=" bg-gradient-to-r from-lime-400 to-amber-500 rounded-[46px] hover:opacity-60 w-[75px]">
                <span className="text-white text-base font-medium">Claim</span>
              </button>
            </span>
          </div>
        </HoldingsCard>
      </section>

      <section className="flex flex-col space-y-4 justify-center items-center ">
        <div className="flex space-x-2">
          {TierInfo.map((item, index) => (
            <TierCard
              key={index}
              tierNo={item.tierNo}
              nftCount={item.nftCount}
              bgImage={item.bgImage}
              percentageOwnership={item.percentageOwnership}
            />
          ))}
        </div>

        <span className="text-neutral-100 text-[13px] font-light">
          Total Protocol Ownership: 3.34%
        </span>
      </section>

      <section className="flex items-center">
        <div>
       
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Dashboard;
