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

function NavProfile() {
  const { loading, user } = useContext(UserContext);

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
        <DropdownMenuItem>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavProfile;
