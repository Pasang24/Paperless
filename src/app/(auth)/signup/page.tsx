import SignupContainer from "@/components/auth/SignupContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

function SignupPage() {
  return (
    <div>
      <SignupContainer />
    </div>
  );
}

export default SignupPage;
