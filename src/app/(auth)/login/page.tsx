"use client";

import { Card } from "@nextui-org/card";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthService from "@/config/api/auth.api";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/store";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import cookieUtils from "@/utils/cookieUtils";
import InputUI from "@/components/common/InputUI";
import ButtonUI from "@/components/common/ButtonUI";
import { errorToast, successToast } from "@/utils/toaster";

const formSchema = z.object({
  // email: z.string().email("Invalid email").min(1, "Email is required"),
  username: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(7, "Password must have 7 characters"),
});

type FormSchemaType = z.infer<typeof formSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const { setUser } = useStore();
  const { setStorageItem } = useLocalStorage();

  //* handle login functionality
  const handleLogin: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const response = await AuthService.login(data);
      cookieUtils.setCookie("token", response.token);
      setStorageItem("user", response);
      setUser(response);
      router.push("/admin");
      successToast("Login successfully!");
    } catch (error) {
      errorToast(error as any);
    }
  };
  return (
    <>
      <Card className="auth_container p-5 border" shadow="none">
        <h1 className="text-2xl font-semibold">Login</h1>
        <form className="space-y-5 mt-5" onSubmit={handleSubmit(handleLogin)}>
          <InputUI
            name="username"
            label="Username"
            placeholder="Enter username"
            register={register}
            errors={errors}
          />
          <InputUI
            name="password"
            label="Password"
            placeholder="Enter password"
            type="password"
            register={register}
            errors={errors}
          />
          <ButtonUI type="submit" fullWidth isLoading={isSubmitting}>
            Login
          </ButtonUI>
        </form>
      </Card>
    </>
  );
};

export default Login;
