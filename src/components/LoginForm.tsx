"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error) setError("");
    setIsLogging(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError("Invalid Email or Password!");
        setIsLogging(false);
        return;
      }
      const user: User = await response.json();
      console.log(user);

      router.replace("/forms");
    } catch (error) {
      console.log(error);
      setError("Something went wrong.");
    } finally {
      setIsLogging(false);
    }
  };
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          disabled={isLogging}
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
          disabled={isLogging}
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
      <Button disabled={isLogging} type="submit" className="w-full">
        {isLogging ? "Logging In..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
