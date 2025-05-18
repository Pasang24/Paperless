import { FormText } from "@/types/form";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";

interface FormInputPreviewProps {
  schema: FormText;
}

function FormTextInputPreview({ schema }: FormInputPreviewProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={schema.id}>
        {schema.label}
        {schema.required && "*"}
      </Label>
      {schema.type === "input" && (
        <Input type="text" id={schema.id} required={schema.required} />
      )}
      {schema.type === "textarea" && (
        <Textarea id={schema.id} required={schema.required} />
      )}
    </div>
  );
}

export default FormTextInputPreview;
