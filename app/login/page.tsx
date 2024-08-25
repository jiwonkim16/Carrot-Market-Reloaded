"use client";
import FormInput from "../../components/form-input";
import FormButton from "../../components/form-btn";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { onSubmit } from "./actions";

function Login() {
  const [state, action] = useFormState(onSubmit, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          required
          type="email"
          placeholder="Email"
          errors={[]}
        />
        <FormInput
          name="password"
          required
          type="password"
          placeholder="Password"
          errors={state?.errors ?? []}
        />
        <FormButton text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
}

export default Login;
