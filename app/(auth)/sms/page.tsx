"use client";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, trigger] = useFormState(smsLogIn, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            name="token"
            required
            type="number"
            min={100000}
            max={999999}
            placeholder="Verification code"
          />
        ) : (
          <Input
            name="phone"
            required
            type="text"
            placeholder="Phone number"
            errors={state.error?.formErrors}
          />
        )}

        <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}
