import { Card, CardContent } from "../ui/card";
import LoginForm from "./LoginForm";
import OAuthLogin from "./OAuthLogin";
import Link from "next/link";

function LoginContainer() {
  return (
    <Card className="w-[90%] max-w-[400px] mx-auto my-10">
      <CardContent className="text-center">
        <h2 className="font-semibold">Log in to Paperless</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Welcome back! Please sign in to continue
        </p>
        <OAuthLogin />
        <div className="relative my-6">
          <hr />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2">
            or
          </span>
        </div>
        <LoginForm />
        <p className="text-sm mt-3">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-muted-foreground hover:underline"
          >
            Signup
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default LoginContainer;
