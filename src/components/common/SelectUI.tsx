import { Select, SelectItem } from "@nextui-org/select";

const SelectUI = ({ options, selectedKey, onChange }) => {
  return (
    <>
      <Select
        label="Choose category"
        placeholder="Select options"
        size="sm"
        className="w-full"
        onChange={onChange}
        selectedKeys={[selectedKey]}
      >
        {options?.map((items) => (
          <SelectItem key={items.value} value={items.value}>
            {items.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default SelectUI;
