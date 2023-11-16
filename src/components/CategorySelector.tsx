interface Props {
  items: string[];
  handleChange: (category: string) => void;
}

const CategorySelector = ({ items, handleChange }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(elt) => handleChange(elt.target.value)}
      >
        <option defaultValue={"nothing"}>Open to select category</option>
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
