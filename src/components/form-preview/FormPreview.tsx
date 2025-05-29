"use client";

import { FormInputSchema } from "@/types/form";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import FormInputFieldPreview from "./FormInputFieldPreview";

interface ViewMode {
  mode: "view";
  formId: string;
}

interface PreviewMode {
  mode: "preview";
}

type FormMode = ViewMode | PreviewMode;

type FormPreviewProps = FormMode & {
  formData: {
    title: string;
    description: string;
    formSchema: FormInputSchema[];
  };
};

function FormPreview(props: FormPreviewProps) {
  const { mode, formData } = props;
  const [submittingForm, setSubmittingForm] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === "preview" || !formRef.current || submittingForm) return;

    const data = new FormData(formRef.current);

    const formResponse = formData.formSchema.map((schema) => ({
      ...schema,
      value: data.get(schema.label),
    }));

    try {
      setSubmittingForm(true);
      await fetch("/api/response/add-response", {
        method: "POST",
        body: JSON.stringify({ formId: props.formId, formResponse }),
      });

      formRef.current.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmittingForm(false);
    }
  };

  const handleClearForm = () => {
    if (!formRef.current || submittingForm) return;

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
        <Button type="submit" disabled={mode === "preview" || submittingForm}>
          {submittingForm ? "Submiting..." : "Submit"}
        </Button>
        <Button
          type="button"
          onClick={handleClearForm}
          variant={"ghost"}
          disabled={submittingForm}
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
}

export default FormPreview;
