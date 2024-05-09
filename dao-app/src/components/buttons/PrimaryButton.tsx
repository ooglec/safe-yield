interface PrimaryButtonProps {
  buttonText: string;
  width: string;
}

const PrimaryButton = ({ buttonText, width }: PrimaryButtonProps) => {
  return (
    <button
      style={{ width: `${width} ` }}
      className=" bg-gradient-to-r from-lime-400 to-amber-500 rounded-[46px] hover:opacity-60"
    >
      <span className="text-white text-base font-medium font-['Space Grotesk']">
        {buttonText}
      </span>
    </button>
  );
};

export default PrimaryButton;
