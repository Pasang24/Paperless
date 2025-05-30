"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

interface FormURLCopyButtonProps {
  formId: string;
}

function FormURLCopyButton({ formId }: FormURLCopyButtonProps) {
  const handleClick = () => {
    const formURL = `${window.location.origin}/view-form/${formId}`;

    navigator.clipboard.writeText(formURL);
    toast.success("Form URL copied to clipboard");
  };

  return (
    <Button
      onClick={handleClick}
      variant="secondary"
      size="icon"
      className="ml-auto rounded-full text-muted-foreground"
    >
      <Copy />
    </Button>
  );
}

export default FormURLCopyButton;
