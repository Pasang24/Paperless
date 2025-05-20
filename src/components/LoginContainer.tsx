"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import GoogleIcon from "@/icons/Google";
import GitHubIcon from "@/icons/GitHub";
import LoginForm from "./LoginForm";
import Link from "next/link";

function LoginContainer() {
  const handleGoogleLogin = () => {};

  const handleGitHubLogin = () => {};
  return (
    <Card className="w-[90%] max-w-[400px] mx-auto my-10">
      <CardContent className="text-center">
        <h2 className="font-semibold">Log in to Paperless</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Welcome back! Please sign in to continue
        </p>
        <div className="flex flex-col gap-2">
          <Button onClick={handleGoogleLogin} variant={"outline"}>
            <GoogleIcon /> Continue with Google
          </Button>
          <Button onClick={handleGitHubLogin} variant={"outline"}>
            <GitHubIcon />
            Continue with GitHub
          </Button>
        </div>
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
