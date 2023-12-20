import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="flex items-center justify-center gap-2 bg-blue-500 disabled:bg-blue-300 text-white disabled:text-gray-200 py-2 px-4 mx-auto w-full"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
