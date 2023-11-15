interface Props {
  children: string;
  color?: string;
  handleClick: () => void;
}

const AppButton = ({ children, color = "primary", handleClick }: Props) => {
  return (
    <button className={"btn btn-".concat(color)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default AppButton;
