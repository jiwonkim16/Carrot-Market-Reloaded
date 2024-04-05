import FormInput from "../../components/form-input";
import FormButton from "../../components/form-btn";
import SocialLogin from "@/components/social-login";

function Login() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput required type="email" placeholder="Email" errors={[]} />
        <FormInput
          required
          type="password"
          placeholder="Password"
          errors={[]}
        />
        <FormButton text="Login" loading={false} />
      </form>
      <SocialLogin />
    </div>
  );
}

export default Login;
