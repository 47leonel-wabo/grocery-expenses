import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onItemSelected: (item: string) => void;
}
function ListGroup({ items, heading, onItemSelected }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickEvent = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="col-3">
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleClickEvent(index);
              onItemSelected(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
