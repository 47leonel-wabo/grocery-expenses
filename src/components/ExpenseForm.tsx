import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import CategorySelector from "./CategorySelector";

interface Props {
  categories: string[];
  saveExpense: (item: Expense) => void;
}

interface Expense {
  name: string;
  price: number;
  category: "Grocery" | "Cake" | "Juice";
}

const formSchema = z.object({
  name: z
    .string({ required_error: "(Required) Provide item's name" })
    .min(4, { message: "At least 4 characters for item's name" })
    .max(20, { message: "Not more than 20 character for item's name" }),
  price: z.number({ required_error: "(Required) item's price" }),
  category: z
    .string()
    .refine((val) => ["Grocery", "Cake", "Juice"].includes(val)),
});

const ExpenseForm = ({ categories, saveExpense }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">
            Item name
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-control"
            id="itemName"
            aria-describedby="itemNameMessage"
          />
          {errors.name && (
            <p id="itemNameMessage" className="form-text text-danger">
              Name error
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="itemPrice" className="form-label">
            Price
          </label>
          <input
            {...register("price")}
            type="number"
            className="form-control"
            id="itemPrice"
            aria-describedby="itemPriceMessage"
          />
          {errors.price && (
            <div id="itemPriceMessage" className="form-text text-danger">
              Price error
            </div>
          )}
        </div>

        <CategorySelector
          utility="registering"
          items={categories}
          handleChange={(category) => {
            console.log("selected category", category);
          }}
        />

        {errors.category && (
          <p id="itemCategoryMessage" className="form-text text-danger">
            Category error
          </p>
        )}
        <button type="submit" className="btn btn-info">
          Save to List
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
