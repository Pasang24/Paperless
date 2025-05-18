import { FormInputSchema } from "@/types/form";
import FormTextInputPreview from "./FormTextInputPreview";

interface FormInputFieldPreviewProps {
  schema: FormInputSchema;
}

function FormInputFieldPreview({ schema }: FormInputFieldPreviewProps) {
  switch (schema.type) {
    case "input":
    case "textarea":
      return <FormTextInputPreview schema={schema} />;
    case "radio":
      return "This is radio button";
    case "checkbox":
      return "This is checkbox";
  }
}

export default FormInputFieldPreview;
