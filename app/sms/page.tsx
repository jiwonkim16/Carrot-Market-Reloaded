import FormInput from "../../components/form-input";
import FormButton from "../../components/form-btn";

function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          required
          type="number"
          placeholder="Phone number"
          errors={[]}
        />
        <FormInput
          required
          type="number"
          placeholder="Verification code"
          errors={[]}
        />
        <FormButton text="Verify" loading={false} />
      </form>
    </div>
  );
}

export default SMSLogin;
