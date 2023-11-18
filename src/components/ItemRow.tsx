import { Key } from "react";
import { ShoppingItem } from "../App";

interface Props {
  item: ShoppingItem;
  index: number;
  handleBtnRemoveClick: (item: ShoppingItem) => void;
}

const ItemRow = ({ item, index, handleBtnRemoveClick }: Props) => {
  return (
    <>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.category}</td>
      <td>
        <div
          className="btn btn-danger"
          onClick={() => handleBtnRemoveClick(item)}
        >
          Remove
        </div>
      </td>
    </>
  );
};

export default ItemRow;
