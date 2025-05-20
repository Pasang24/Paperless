"use client";

import { Button } from "./ui/button";
import GoogleIcon from "@/icons/Google";
import GitHubIcon from "@/icons/GitHub";

type Provider = "google" | "github";

function OAuthLogin() {
  const handleOAuthLogin = async (provider: Provider) => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/${provider}`;
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => handleOAuthLogin("google")} variant={"outline"}>
        <GoogleIcon /> Continue with Google
      </Button>
      <Button onClick={() => handleOAuthLogin("github")} variant={"outline"}>
        <GitHubIcon />
        Continue with GitHub
      </Button>
    </div>
  );
}

export default OAuthLogin;
