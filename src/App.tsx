import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ShoppingList from "./components/ShoppingList";

const categories = ["Grocery", "Cake", "Juice"];

export class ShoppingItem {
  price: number;
  name: string;
  category: string;

  constructor(
    name: string,
    price: number,
    category: "Grocery" | "Cake" | "Juice"
  ) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getCategory(): string {
    return this.category;
  }
}

const groceries = [
  new ShoppingItem("Lollipop", 3.5, "Grocery"),
  new ShoppingItem("Mambo", 25, "Grocery"),
  new ShoppingItem("Camar", 10.99, "Cake"),
  new ShoppingItem("Coke", 30, "Juice"),
];

function App() {
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
          <ShoppingList categories={categories} shoppingItems={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
