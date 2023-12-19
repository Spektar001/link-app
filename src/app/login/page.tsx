import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

const LoginPage = () => {
  return (
    <div>
      <div className="bg-white border p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>
        <LoginWithGoogle />
      </div>
    </div>
  );
};

export default LoginPage;
