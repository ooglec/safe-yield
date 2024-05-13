import HoldingsCard from "../components/cards/HoldingsCard";
import TierCard from "../components/cards/TierCard";
import { Line } from "react-chartjs-2";
import { graph_data1, graph_data2 } from "../data/chartData";
import { options } from "../data/chartData";
import { TierInfo } from "../data/TierInformation";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import PrimaryButton from "../components/buttons/PrimaryButton";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);





const Dashboard = () => {

  
  return (
    <div className="mt-16 w-[72vw] h-[80vh]  flex flex-col space-y-6 justify-start pt-6 items-center  ">
      <section className="flex space-x-6 ">
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

      <section className="flex flex-col space-y-2 justify-center items-center ">
        <div className="flex space-x-4">
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

        <span className="text-neutral-100 text-[13px] font-light pt-2">
          Total Protocol Ownership: 3.34%
        </span>
      </section>

      <section className="flex items-center space-x-6  ">
        <div className=" p-3  w-[423px] h-[265px] bg-gradient-to-b from-stone-200/35 to-stone-200/20 rounded-[21px] flex flex-col  items-center">
          <Line data={graph_data1} options={options} />
          <button className="">
            <PrimaryButton buttonText="Buy SAFE" width="120px" />{" "}
          </button>
        </div>
        <div className="p-3  w-[423px] h-[265px] bg-gradient-to-b from-stone-200/35 to-stone-200/20 rounded-[21px] flex flex-col  items-center ">
          <Line data={graph_data2} options={options} />
          <button className="">
            <PrimaryButton buttonText="Buy NFT" width="120px" />{" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
