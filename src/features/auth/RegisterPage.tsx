"use client";

import Image from "next/image";
import heroImage from "@/features/homepage/assets/images/main-hero.webp";
import RoundedSquare from "@/components/RoundedSquare";
import HBtn from "@/components/ui-kit/HBtn";
import HInput from "@/components/ui-kit/form/HInput";
import HPhoneNumberInput from "@/components/ui-kit/form/HPhoneNumberInput";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const getSchema = (isPhoneNumber: boolean) => {
  return z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phoneNumber: isPhoneNumber
      ? z
          .string()
          .min(1, "Phone number is required")
          .regex(/^\+\d{12}$/, "Invalid international phone number format")
      : z.string().optional(),
    email: !isPhoneNumber
      ? z
          .string()
          .email("Invalid email address")
          .min(1, "Email is required")
      : z.string().optional(),
  });
};

const RegisterPage = () => {
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(true);

  const router = useRouter();

  const { control, handleSubmit, resetField } = useForm({
    resolver: zodResolver(getSchema(isPhoneNumber)),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
  });

  const toggleIsPhoneNumber = () => {
    if (isPhoneNumber) {
      resetField("phoneNumber", { defaultValue: "" });
      setIsPhoneNumber(false);
    } else {
      resetField("email", { defaultValue: "" });
      setIsPhoneNumber(true);
    }
  };

  const onSubmit = async (data: any) => {
    const result = await signIn("credentials", {
      redirect: false,
      ...(data.phoneNumber
        ? { phone_number: data.phoneNumber }
        : { email: data.email }),
      first_name: data.firstName,
      last_name: data.lastName,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      console.error("Login failed:", result?.error);
    }
  };

  return (
    <section className="container relative mx-auto px-container">
      <div className="flex justify-end">
        <div className="relative">
          <Image
            src={heroImage}
            alt="home decoration"
            width={832}
            priority={true}
            height={616}
          />
          <RoundedSquare
            borderRadius={[20, 0, 0, 0]}
            variant="outline"
            width={120}
            height={120}
            className="absolute -right-[42px] -top-[38px]"
          />
          <RoundedSquare
            borderRadius={[0, 0, 0, 20]}
            variant="outline"
            width={120}
            height={120}
            className="absolute -bottom-8 -left-10 -z-10"
          />
        </div>
        <div className="absolute -left-[50px] top-4.5 flex w-full items-center">
          <div className="flex max-w-[682px] flex-col gap-9 rounded-br-[40px] bg-primary px-[109px] py-12 drop-shadow-[0px_4px_8px_rgb(112,112,112,0.42)]">
            <h1 className="text-center text-[2rem]/[63px] font-medium text-white">
              Welcome to My Home Spec. At the end of this form you will receive
              the Estimation Cost and Material List needed for your project.
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto w-full max-w-[442px] rounded-[2.5rem] border border-white/50 bg-white bg-opacity-0 p-10 backdrop-blur-[23px] backdrop-brightness-[1.15]"
          >
            <h1 className="mb-8 text-lg font-medium text-white">
              Please Enter Your Name and Phone Number.
            </h1>
            <div className="flex flex-col gap-y-12">
              <div className="flex flex-col gap-5">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <HInput
                      {...field}
                      label="First Name"
                      placeholder="Enter your first name"
                      error={fieldState.error}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <HInput
                      {...field}
                      label="Last Name"
                      placeholder="Enter your last name"
                      error={fieldState.error}
                    />
                  )}
                />
                {isPhoneNumber ? (
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field, fieldState }) => (
                      <HPhoneNumberInput
                        label="Phone Number"
                        value={field.value || ""}
                        onChange={field.onChange}
                        error={fieldState.error}
                      />
                    )}
                  />
                ) : (
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                      <HInput
                        {...field}
                        label="Email Address"
                        placeholder="Enter your email address"
                        error={fieldState.error}
                      />
                    )}
                  />
                )}
              </div>
              <div>
                <HBtn
                  label="Start your Project"
                  variant="secondary"
                  size="large"
                  className="w-full"
                  type="submit"
                />
                <HBtn
                  className="mt-4 w-full bg-white"
                  variant="secondary"
                  styleType="outline"
                  label={`Register By ${isPhoneNumber ? "Email" : "phone"}`}
                  onClick={toggleIsPhoneNumber}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
