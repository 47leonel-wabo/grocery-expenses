import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ShoppingList from "./components/ShoppingList";
import { number } from "zod";

const categories = ["Grocery", "Cake", "Juice"];

export class ShoppingItem {
  id: number;
  price: number;
  name: string;
  category: string;

  constructor(
    id: number,
    name: string,
    price: number,
    category: "Grocery" | "Cake" | "Juice"
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

const baseGroceries = [
  new ShoppingItem(1, "Lollipop", 3.5, "Grocery"),
  new ShoppingItem(2, "Mambo", 25, "Grocery"),
  new ShoppingItem(3, "Camar", 10.99, "Cake"),
  new ShoppingItem(4, "Coke", 30, "Juice"),
];

function App() {
  const [groceries, setGroceries] = useState(baseGroceries);

  const removeItemToList = (item: ShoppingItem) => {
    const newList = groceries.filter((grocery) => grocery.id !== item.id);
    setGroceries(newList);
  };

  return (
    <div className="container">
      <h1 className="display-2">
        Grocery Store | <mark className="display-4">Expense Tracker</mark>
      </h1>
      <div className="row">
        <div className="col-6">
          <ExpenseForm categories={categories} />
        </div>
        <div className="col-6">
          <ShoppingList
            categories={categories}
            shoppingItems={groceries}
            handleRemove={removeItemToList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
