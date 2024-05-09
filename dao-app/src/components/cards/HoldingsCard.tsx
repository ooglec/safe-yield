import  { ReactNode } from "react";
interface HoldingsCardProps {
  cardTitle: string;
  children: ReactNode;
  amount: number;
}

const HoldingsCard = ({cardTitle,children,amount}:HoldingsCardProps) => {
  return (
    <article className="flex flex-col items-center justify-center   space-y-1 w-[230px] h-[100px] bg-gradient-to-b from-[#466869] to-[#053234] rounded-[21px] custom-box-shadow">
      <div className="text-neutral-100 text-base font-normal ">
        {cardTitle}
      </div>
    <div>
        {children}
      </div>
      <div className="w-[78px] text-neutral-100 text-[13px] font-light">
        {amount} $USDC
      </div>
    </article>
  );
}

export default HoldingsCard
