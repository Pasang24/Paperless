import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function LoginForm() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          required
          placeholder="Enter your email"
          type="email"
          name="email"
          id="email"
          className="text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Password</Label>
        <Input
          required
          placeholder="Enter your password"
          type="email"
          name="email"
          id="email"
          className="text-sm"
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
