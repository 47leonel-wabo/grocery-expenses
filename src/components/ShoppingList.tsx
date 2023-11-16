import { ShoppingItem } from "../App";
import CategorySelector from "./CategorySelector";

interface Props {
  shoppingItems: ShoppingItem[];
  categories: string[];
}

const ShoppingList = ({ shoppingItems, categories }: Props) => {
  const accessExpenses = (items: ShoppingItem[]): string => {
    return items
      .reduce((accumulator, current) => accumulator + current.price, 0)
      .toFixed(2);
  };

  if (shoppingItems.length === 0)
    return (
      <div className="col p-4 m-3" style={{ backgroundColor: "#eeeeee78" }}>
        <h6 className="display-6">Empty list, nothing to show</h6>
      </div>
    );

  return (
    <div className="col p-4">
      <h4 className="display-6">Your Shopping List</h4>
      <CategorySelector
        items={categories}
        handleChange={(category) => {
          console.log("selected category", category);
        }}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shoppingItems.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>@action</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h6>
          Total expense:
          <mark>
            <b>${accessExpenses(shoppingItems)}</b>
          </mark>
        </h6>
      </div>
    </div>
  );
};

export default ShoppingList;
