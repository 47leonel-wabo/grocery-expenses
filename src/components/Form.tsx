import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

type FormData = {
  name: string;
  email: string;
  age: number;
};

const schema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be on at least 4 characters" }),
  email: z.string({
    required_error: "Please provide an email address",
    invalid_type_error: "Require valid email address",
  }),
  age: z
    .number({
      invalid_type_error: "Provide an age number",
    })
    .min(18, { message: "Must be at least 18 years old" }),
});

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form className="col-3 p-3" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          {...register("email")}
          type="email"
          className="form-control"
          id="email"
          placeholder="domain@host.com"
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="age"
        />
        {errors.age && (
          <span className="text-danger">{errors.age.message}</span>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
