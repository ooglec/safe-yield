interface SecondarButtonProps {
    buttonText: string;
    width: string;
  }
  
  const SecondaryButton = ({buttonText,width}:SecondarButtonProps) => {
    return (
      <div
        style={{ width: `${width} ` }}
        className="flex items-center justify-center cursor-pointer h-10 rounded-[46px] bg-black/10 hover:bg-[#4CFAC7]/10 border border-[#4CFAC7] text-white" 
      >
        {buttonText}
      </div>
    );
  };
  
  export default SecondaryButton;
  