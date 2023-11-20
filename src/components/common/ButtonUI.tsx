"use client";

import { Button, type ButtonProps } from "@nextui-org/button";

const ButtonUI = ({
  children,
  color,
  variant,
  startContent,
  endContent,
  isIconOnly,
  size,
  onClick,
  className,
  type,
  isLoading,
  fullWidth,
}: ButtonProps) => {
  return (
    <>
      <Button
        color={color ?? "primary"}
        variant={variant ?? "solid"}
        startContent={startContent}
        endContent={endContent}
        isIconOnly={isIconOnly ?? false}
        size={size ?? "md"}
        onClick={onClick}
        className={`${className} font-bold`}
        type={type ?? "button"}
        isLoading={isLoading}
        fullWidth={fullWidth}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonUI;
