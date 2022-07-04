import SignInSidebar from "./SignInSidebar";
import SignInContentArea from "./SignInContentArea";
const SignIn = () => {
  return (
    <section className="flex w-full">
      <SignInSidebar />
      <SignInContentArea />
    </section>
  );
};

export default SignIn;
