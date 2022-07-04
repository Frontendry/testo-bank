import Copyright from "../../general-components/Copyright";
import Logo from "../../general-components/Logo";
import SideFeatures from "../../general-components/SideFeatures";

const SignInSidebar = () => {
  return (
    <aside className="w-1/4 hidden xl:flex flex-col items-start shadow-xl relative z-10 bg-purple-500 p-6">
      <Logo />
      <SideFeatures />
      <Copyright />
    </aside>
  );
};

export default SignInSidebar;
