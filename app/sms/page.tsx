"use client";
import Input from "../../components/input";
import Button from "../../components/button";
import { useFormState } from "react-dom";
import { smsVerification } from "./actions";

function SMSLogin() {
  const [state, trigger] = useFormState(smsVerification, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <Input name="phone" required type="number" placeholder="Phone number" />
        <Input
          name="token"
          required
          type="number"
          placeholder="Verification code"
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}

export default SMSLogin;
