interface FormButtonProps {
  loading: boolean;
  text: string;
}

function FormButton({ text, loading }: FormButtonProps) {
  return (
    <button
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      disabled={loading}
    >
      {loading ? "로딩 중..." : text}
    </button>
  );
}

export default FormButton;
