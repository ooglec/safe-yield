interface PrimaryButtonProps {
    buttonText: string;
    width: string;
  }
  
  const PrimaryButton = ({ buttonText, width }: PrimaryButtonProps) => {
    return (
      <div
        style={{ width: `${width} ` }}
        className=" bg-[#4CFAC7] rounded-full hover:opacity-80 py-2 cursor-pointer"
      >
        <span className="text-black text-base font-medium">
          {buttonText}
        </span>
      </div>
    );
  };
  
  export default PrimaryButton;
  