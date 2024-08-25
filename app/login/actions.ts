"use server";

import { redirect } from "next/navigation";

export const onSubmit = async (prevData: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  redirect("/");
  return {
    errors: ["wrong password", "password too short"],
  };
};
