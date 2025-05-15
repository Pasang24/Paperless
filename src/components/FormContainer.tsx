"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { FormInputSchema } from "@/types/form";
import FormTitleDescription from "./FormTitleDescription";
import FormInput from "./FormInput";

function FormContainer() {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formSchema, setFormSchema] = useState<FormInputSchema[]>([
    { id: "1", label: "Question", type: "input", required: false },
  ]);
  return (
    <div className="space-y-2">
      <FormTitleDescription
        title={formTitle}
        setTitle={setFormTitle}
        description={formDescription}
        setDescription={setFormDescription}
      />
      {formSchema.map((schema) => (
        <FormInput
          formInput={schema}
          changeFormInput={setFormSchema}
          key={schema.id}
        />
      ))}
      <Button>+ Add Question</Button>
    </div>
  );
}

export default FormContainer;
