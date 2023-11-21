import { Select, SelectItem } from "@nextui-org/select";

const SelectUI = ({ options }) => {
  return (
    <>
      <Select label="Choose category" size="sm" className="w-full">
        {options.map((items, index) => (
          <SelectItem key={index} value={items}>
            {items}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default SelectUI;
