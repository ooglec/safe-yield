interface PrimaryButtonProps {
  buttonText: string;
  width: string;
}

const PrimaryButton = ({ buttonText, width }: PrimaryButtonProps) => {
  return (
    <button
      style={{ width: `${width} ` }}
      className=" bg-gradient-to-r from-lime-400 to-amber-500 rounded-[46px] hover:opacity-60 py-2"
    >
      <span className="text-white text-base font-medium">
        {buttonText}
      </span>
    </button>
  );
};

export default PrimaryButton;
