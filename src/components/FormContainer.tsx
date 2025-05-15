"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { FormInputSchema } from "@/types/form";
import { nanoid } from "nanoid";
import FormTitleDescription from "./FormTitleDescription";
import FormInput from "./FormInput";

function FormContainer() {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formSchema, setFormSchema] = useState<FormInputSchema[]>([
    { id: "placeholder_id", label: "Question", type: "input", required: false },
  ]);

  const handleAddQuestion = () => {
    setFormSchema((prevFormSchema) => [
      ...prevFormSchema,
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);
  };

  useEffect(() => {
    // replace the placeholder id with a random id
    setFormSchema([
      { id: nanoid(6), label: "Question", type: "input", required: false },
    ]);
  }, []);

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
      <Button onClick={handleAddQuestion}>+ Add Question</Button>
    </div>
  );
}

export default FormContainer;
