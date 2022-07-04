import FormStepDescription from "../../general-components/FormStepDescription";
import AccordionRadioGroup from "./AccordionRadioGroup";

import SubmitForm from "./SubmitForm";
import SignUpContentAreaHeader from "./SignUpContentAreaHeader";

const SignUpFormStep2 = () => {
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

        <SubmitForm />
      </div>
    </>
  );
};

export default SignUpFormStep2;
