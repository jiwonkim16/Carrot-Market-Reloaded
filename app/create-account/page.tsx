"use client";
import Input from "../../components/input";
import Button from "../../components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

function CreateAccount() {
  const [state, trigger] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <Input
          name="username"
          required
          type="text"
          placeholder="Username"
          minLength={3}
          maxLength={10}
          errors={state?.fieldErrors.username}
        />
        <Input
          name="email"
          required
          type="email"
          placeholder="Email"
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          required
          type="password"
          placeholder="Password"
          minLength={4}
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirm_password"
          required
          type="password"
          placeholder="Confirm Password"
          minLength={4}
          errors={state?.fieldErrors.confirm_password}
        />
        <Button text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}

export default CreateAccount;
