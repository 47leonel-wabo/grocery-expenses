import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import CategorySelector from "./CategorySelector";

interface Props {
  categories: string[];
  saveExpense: (item: Expense) => void;
}

export interface Expense {
  name: string;
  price: number;
  category: string;
}

const formSchema = z.object({
  name: z
    .string({ required_error: "(Required) Provide item's name" })
    .min(4, { message: "At least 4 characters for item's name" })
    .max(20, { message: "Not more than 20 character for item's name" }),
  price: z.number({ required_error: "(Required) item's price" }),
});

type formObject = z.infer<typeof formSchema>;

const ExpenseForm = ({ categories, saveExpense }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formObject>({
    resolver: zodResolver(formSchema),
  });

  let cat: string = "";

  const handleSelect = (value: string) => {
    cat = value;
  };

  const onSubmit = (data: FieldValues) => {
    if (cat.length === 0) {
      cat = "Grocery";
    }
    saveExpense({ name: data.name, price: data.price, category: cat });
    reset({ name: "", price: 0 });
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
            {...register("price", { valueAsNumber: true })}
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
          handleChange={handleSelect}
        />

        <button type="submit" className="btn btn-info">
          Save to List
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
