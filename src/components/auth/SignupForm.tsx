"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigning, setIsSigning] = useState(false);

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error) setError("");
    setIsSigning(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        setError("Email already used!");
        setIsSigning(false);
        return;
      }

      router.replace("/forms");
    } catch (error) {
      console.log(error);
      setError("Something went wrong.");
      setIsSigning(false);
    }
  };
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          disabled={isSigning}
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          type="text"
          name="name"
          id="name"
          className="text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          disabled={isSigning}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          type="email"
          name="email"
          id="email"
          className="text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          disabled={isSigning}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
          className="text-sm"
        />
      </div>
      {error && <p className="-mt-2 text-xs text-left text-red-400">{error}</p>}
      <Button disabled={isSigning} type="submit" className="w-full">
        {isSigning ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
}

export default SignupForm;
