import SignUpContentAreaHeader from "./SignUpContentAreaHeader";
import FormStepDescription from "../../general-components/FormStepDescription";
import NextStepButton from "./NextStepButton";
import FormFields from "./FormFields";

const SignUpFormStep1 = () => {
  return (
    <>
      <SignUpContentAreaHeader
        hidePrev="true"
        desc="Already a member?"
        link="signin"
        linkText="Sign In"
      />

      <div className="mt-20 px-4 md:px-20 mx-auto w-full xl:w-3/5">
        <FormStepDescription
          title="Create your account"
          subtitle=" A short description about your account types."
        />

        <FormFields />

        <NextStepButton />
      </div>
    </>
  );
};

export default SignUpFormStep1;
