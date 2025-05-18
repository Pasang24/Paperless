import { FormInputSchema } from "@/types/form";
import FormTextInputPreview from "./FormTextInputPreview";
import FormOptionsPreview from "./FormOptionsPreview";

interface FormInputFieldPreviewProps {
  schema: FormInputSchema;
}

function FormInputFieldPreview({ schema }: FormInputFieldPreviewProps) {
  switch (schema.type) {
    case "input":
    case "textarea":
      return <FormTextInputPreview schema={schema} />;
    case "radio":
    case "checkbox":
      return <FormOptionsPreview schema={schema} />;
  }
}

export default FormInputFieldPreview;
