import { Input, type InputProps } from "@nextui-org/input";
import { FieldErrors } from "react-hook-form";

interface IFieldProps extends InputProps {
  // register: UseFormRegister<ContactFormProps>;
  register: any;
  errors?: FieldErrors;
}

const InputUI = ({
  name,
  label,
  placeholder,
  variant,
  color,
  size,
  startContent,
  endContent,
  register,
  required,
  errors,
  className,
}: IFieldProps) => {
  if (!name) {
    return null;
  }
  return (
    <>
      <Input
        label={label ?? ""}
        placeholder={placeholder ?? "Enter placeholder"}
        size={size ?? "md"}
        variant={variant ?? "faded"}
        color={errors?.[name] ? "danger" : color ? color : "primary"}
        startContent={startContent}
        endContent={endContent}
        className={`w-full ${className ?? ""}`}
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
