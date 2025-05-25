import { Metadata } from "next";
import LoginContainer from "@/components/auth/LoginContainer";

export const metadata: Metadata = {
  title: "Login",
};

function LoginPage() {
  return (
    <div>
      <LoginContainer />
    </div>
  );
}

export default LoginPage;
