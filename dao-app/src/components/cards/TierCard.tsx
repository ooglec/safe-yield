
interface TierCardProps {
  tierNo: number
  percentageOwnership:number
  nftCount: number
  bgImage: string
}


const TierCard = ({tierNo,percentageOwnership,nftCount,bgImage}:TierCardProps) => {
  return (
    <div
      className=" w-[160.76px] h-[160.76px] rounded-[22px]  text-center flex flex-col justify-around "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div>
        <h2 className="text-lime-300 text-2xl font-bold ">Tier {tierNo}</h2>
        <p className="text-stone-200 text-[12px] font-normal">
          {percentageOwnership}% Ownership
        </p>
      </div>

      <p className=" text-white text-[15px] font-normal mt-12">Your NFTs: {nftCount}</p>
    </div>
  );
}

export default TierCard
