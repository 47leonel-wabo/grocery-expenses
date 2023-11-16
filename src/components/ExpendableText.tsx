import { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}
const ExpendableText = ({ children, maxChars }: Props) => {
  const [isToggle, setToggle] = useState(false);

  const handleButtonClick = () => {
    setToggle(!isToggle);
  };

  const shrinkText = (text: string): string => {
    return isToggle ? `${text.substring(0, maxChars)}...` : text;
  };

  const renderButton = (status: boolean): ReactNode => (
    <button onClick={handleButtonClick}>{status ? "More" : "Less"}</button>
  );

  if (children.length < maxChars) return <p>{children}</p>;

  return (
    <div>
      {shrinkText(children)} {renderButton(isToggle)}
    </div>
  );
};

export default ExpendableText;
