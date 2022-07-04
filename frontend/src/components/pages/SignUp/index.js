import SignUpContentArea from "./SignUpContentArea";
import SignUpSidebar from "./SignUpSidebar";

const SignUp = () => {
  return (
    <section className="flex w-full">
      <SignUpSidebar />
      <SignUpContentArea />
    </section>
  );
};

export default SignUp;
