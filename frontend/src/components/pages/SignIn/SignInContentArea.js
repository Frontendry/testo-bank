import SignInForm from "./SignInForm";
import { SignInContextProvider } from "../../../context/signin.context";

const SignInContentArea = () => {
  return (
    <main className="w-full xl:w-3/4 min-h-screen relative pb-14">
      <SignInContextProvider>
        <SignInForm />
      </SignInContextProvider>
    </main>
  );
};

export default SignInContentArea;
