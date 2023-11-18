import { useEffect, useState } from "react";
import { ShoppingItem } from "../App";
import CategorySelector from "./CategorySelector";
import ItemRow from "./ItemRow";

interface Props {
  shoppingItems: ShoppingItem[];
  categories: string[];
  handleRemove: (item: ShoppingItem) => void;
}

const ShoppingList = ({ shoppingItems, categories, handleRemove }: Props) => {
  const [categoryList, setCategoryList] = useState<string[]>(categories);
  const [shoppingList, setShoppingList] =
    useState<ShoppingItem[]>(shoppingItems);

  useEffect(() => {
    // make sure that this component list is updated with the one received from his parent
    setShoppingList(shoppingItems);
    // filter and remove any duplicate category element (e.i: in case there are many items of the same category)
    setCategoryList([
      ...new Set(shoppingItems.map(({ category }) => category)),
    ]);
  }, [shoppingItems]);

  // re-assess expenses as soon as criteria change
  const accessExpenses = (items: ShoppingItem[]): string => {
    return items
      .reduce((accumulator, current) => accumulator + current.price, 0)
      .toFixed(2);
  };

  // filter the shopping list based on selected criteria
  function filter(criteria: string) {
    return shoppingItems.filter((item) => item.category === criteria);
  }

  // retrieved filtering criteria
  const getFilteringCriteria = (criteria: string) => {
    if (criteria === "all") {
      setShoppingList(shoppingItems);
    } else {
      const filteredList = filter(criteria);
      setShoppingList(filteredList);
    }
  };

  // if there is nothing to show
  if (shoppingList.length === 0)
    return (
      <div className="col p-4 m-3" style={{ backgroundColor: "#eeeeee78" }}>
        <h6 className="display-6">Empty list, nothing to show</h6>
      </div>
    );

  return (
    <div className="col p-4">
      <h4 className="display-6">Your Shopping List</h4>
      <CategorySelector
        utility="filtering"
        items={categoryList}
        handleChange={getFilteringCriteria}
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
          {shoppingList.map((item, index) => (
            <tr key={index}>
              <ItemRow
                item={item}
                index={index}
                handleBtnRemoveClick={handleRemove}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h6>
          Total expense:
          <mark>
            <b>${accessExpenses(shoppingList)}</b>
          </mark>
        </h6>
      </div>
    </div>
  );
};

export default ShoppingList;
