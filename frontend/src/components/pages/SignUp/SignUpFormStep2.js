import { useSignUpData } from "../../../context/signup.context";
import FormStepDescription from "../../general-components/FormStepDescription";
import AccordionRadioGroup from "./AccordionRadioGroup";

import SubmitForm from "./SubmitForm";
import SignUpContentAreaHeader from "./SignUpContentAreaHeader";

const SignUpFormStep2 = () => {
  const { error } = useSignUpData();
  return (
    <>
      <SignUpContentAreaHeader
        desc="Already a member?"
        link="/signin"
        linkText="Sign In"
      />

      <div className="mt-20 px-4 md:px-20 mx-auto w-full xl:w-3/5">
        <FormStepDescription
          title="Open a new business account"
          subtitle="A short description about your account types."
        />

        <AccordionRadioGroup />

        {error ? (
          <div
            className="bg-red-100 rounded-lg py-5 px-6 mb-8 text-base text-red-700"
            role="alert"
          >
            {error}
          </div>
        ) : (
          ""
        )}

        <SubmitForm />
      </div>
    </>
  );
};

export default SignUpFormStep2;
