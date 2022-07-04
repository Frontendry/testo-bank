import SignUpForm from "./SignUpForm";
import { SignUpContextProvider } from "../../../context/signup.context";

const SignUpContentArea = () => {
  return (
    <main className="w-full xl:w-3/4 min-h-screen relative pb-14">
      <SignUpContextProvider>
        <SignUpForm />
      </SignUpContextProvider>
    </main>
  );
};

export default SignUpContentArea;
