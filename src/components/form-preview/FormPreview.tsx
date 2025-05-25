"use client";

import { FormInputSchema } from "@/types/form";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useRef } from "react";
import FormInputFieldPreview from "./FormInputFieldPreview";

interface FormPreviewProps {
  formData: {
    title: string;
    description: string;
    formSchema: FormInputSchema[];
  };
  mode?: "view" | "preview";
}

function FormPreview({ formData, mode = "preview" }: FormPreviewProps) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === "preview" || !formRef.current) return;

    const data = new FormData(formRef.current);

    const formResponse = formData.formSchema.map((schema) => ({
      ...schema,
      value: data.get(schema.label),
    }));

    console.log(formResponse);
  };

  const handleClearForm = () => {
    if (!formRef.current) return;

    formRef.current.reset();
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {formData.title || formData.description ? (
        <Card>
          <CardContent className="space-y-6">
            {formData.title && (
              <h2 className="font-bold text-3xl">{formData.title}</h2>
            )}
            {formData.description && <p>{formData.description}</p>}
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {formData.formSchema.map((schema) => (
        <FormInputFieldPreview key={schema.id} schema={schema} />
      ))}
      <div className="flex justify-between my-4">
        <Button type="submit" disabled={mode === "preview"}>
          Submit
        </Button>
        <Button type="button" onClick={handleClearForm} variant={"ghost"}>
          Clear Form
        </Button>
      </div>
    </form>
  );
}

export default FormPreview;
