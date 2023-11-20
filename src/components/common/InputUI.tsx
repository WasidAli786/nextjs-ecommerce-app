import { Input, type InputProps } from "@nextui-org/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// interface FieldsProps extends InputProps {
//   register: UseFormRegister<ContactFormProps>;
//   errors?: FieldErrors;
// }

const InputUI = ({
  name,
  label,
  placeholder,
  variant,
  color,
  size,
  register,
  required,
  errors,
}: any) => {
  if (!name) {
    return null;
  }
  return (
    <>
      <Input
        label={label ?? "Label here"}
        placeholder={placeholder ?? "Enter placeholder"}
        size={size ?? "md"}
        variant={variant ?? "faded"}
        color={errors?.[name] ? "danger" : color ? color : "primary"}
        isInvalid={errors?.[name] ? true : false}
        errorMessage={errors?.[name] && String(errors[name]?.message)}
        {...register(name as never, {
          required: required === false ? false : "This field is required",
        })}
      />
    </>
  );
};

export default InputUI;
