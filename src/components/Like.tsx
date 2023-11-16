import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  handleLike: (liked: boolean) => void;
  filled: boolean;
}

const defaultColor = "#acacac";

const Like = ({ handleLike, filled }: Props) => {
  const [isLiked, setLike] = useState(filled);

  const onLikeClick = () => {
    handleLike(!isLiked);
    setLike(!isLiked);
  };

  return (
    <AiFillHeart
      size={32}
      color={isLiked ? "red" : defaultColor}
      onClick={onLikeClick}
    />
  );
};

export default Like;
