import { FormText } from "@/types/form";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

interface FormInputPreviewProps {
  schema: FormText;
}

function FormTextInputPreview({ schema }: FormInputPreviewProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label htmlFor={schema.id} className="text-lg">
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
      </CardContent>
    </Card>
  );
}

export default FormTextInputPreview;
