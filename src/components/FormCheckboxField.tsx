import React from "react";
import { FormCheckBox, FormInputSchema } from "@/types/form";
import { Input } from "./ui/input";
import { Square, X } from "lucide-react";
import { Button } from "./ui/button";

interface FormCheckboxFieldProps {
  formInput: FormCheckBox;
  changeFormInput: React.Dispatch<React.SetStateAction<FormInputSchema[]>>;
}

function FormCheckboxField({
  formInput,
  changeFormInput,
}: FormCheckboxFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {formInput.options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <Square stroke="gray" />
          <Input value={option.option} />
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
            <X />
          </Button>
        </div>
      ))}
      <Button variant={"ghost"} className="self-end">
        + Add Option
      </Button>
    </div>
  );
}

export default FormCheckboxField;
