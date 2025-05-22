"use client";

import { useContext } from "react";
import { UserContext } from "@/app/context/UserProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Skeleton } from "./ui/skeleton";
import { ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function NavProfile() {
  const { loading, user } = useContext(UserContext);

  const router = useRouter();

  const handleLogout = () => {
    toast.promise(
      fetch("/api/auth/logout").then(() => {
        router.replace("/login");
      }),
      {
        loading: "Logging out...",
        success: () => {
          return "Logged out successfully";
        },
        error: "Error Logging Out",
        duration: 3500,
      }
    );
  };

  if (loading) {
    return <Skeleton className="w-20 h-4" />;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-2 py-1 text-sm">
        {user?.name ?? "N/A"}
        <ChevronDown size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavProfile;
