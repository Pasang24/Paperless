import { Card, CardContent } from "./ui/card";
import OAuthLogin from "./OAuthLogin";
import Link from "next/link";
import SignupForm from "./SignupForm";

function SignupContainer() {
  return (
    <Card className="w-[90%] max-w-[400px] mx-auto my-10">
      <CardContent className="text-center">
        <h2 className="font-semibold">Create your account</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Welcome! Please fill in the details to get started
        </p>
        <OAuthLogin />
        <div className="relative my-6">
          <hr />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2">
            or
          </span>
        </div>
        <SignupForm />
        <p className="text-sm mt-3">
          Already have an account?{" "}
          <Link href="/login" className="text-muted-foreground hover:underline">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default SignupContainer;
