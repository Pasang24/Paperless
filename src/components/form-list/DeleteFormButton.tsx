"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface DeleteFormButtonProps {
  formId: string;
}

function DeleteFormButton({ formId }: DeleteFormButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await fetch(`/api/form/remove-form?formId=${formId}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleDelete}
      variant={"secondary"}
      className="rounded-full"
    >
      <Trash2 />
      Delete
    </Button>
  );
}

export default DeleteFormButton;
