interface SecondarButtonProps {
  buttonText: string;
  width: string;
}

const SecondaryButton = ({buttonText,width}:SecondarButtonProps) => {
  return (
    <button
      style={{ width: `${width} ` }}
      className="h-10 rounded-[46px] bg-none border border-lime-300"
    >
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
