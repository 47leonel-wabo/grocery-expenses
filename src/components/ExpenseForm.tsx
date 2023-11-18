import { useForm } from "react-hook-form";
import CategorySelector from "./CategorySelector";

interface Props {
  categories: string[];
}

const ExpenseForm = ({ categories }: Props) => {
  const {} = useForm();
  return (
    <div className="p-3">
      <form>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">
            Item name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            aria-describedby="itemNameMessage"
          />
          <div id="itemNameMessage" className="form-text">
            Error messages about item's name will go here!
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="itemPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="itemPrice"
            aria-describedby="itemPriceMessage"
          />
          <div id="itemPriceMessage" className="form-text">
            Error messages item's price will go here!
          </div>
        </div>
        {
          <CategorySelector
            utility="registering"
            items={categories}
            handleChange={(category) => {
              console.log("selected category", category);
            }}
          />
        }
        <button type="submit" className="btn btn-primary">
          Commit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
