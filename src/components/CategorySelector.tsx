interface Props {
  items: string[];
  utility: "filtering" | "registering";
  handleChange: (category: string) => void;
}

const CategorySelector = ({
  items,
  utility = "registering",
  handleChange,
}: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(elt) => handleChange(elt.target.value)}
      >
        <option disabled defaultValue="all">
          Open to select category
        </option>
        {utility === "filtering" && <option value="all">All</option>}
        {items.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
