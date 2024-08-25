import { InputHTMLAttributes } from "react";

interface FormInputProps {
  errors?: string[];
}

function Input({
  name,
  errors = [],
  // name과 error를 제외한 나머지 props를 한꺼번에 받기위해 rest 라는 변수에 담음
  ...rest
}: // FormInputProps 뿐만 아니라 input 태그의 모든 속성을 props로 받는다는 의미
FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition-all ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span className="text-red-500 font-medium" key={index}>
          {error}
        </span>
      ))}
    </div>
  );
}

export default Input;
