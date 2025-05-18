import { FormCheckBox, FormMultiChoice } from "@/types/form";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent } from "./ui/card";

interface FormOptionsPreviewProps {
  schema: FormMultiChoice | FormCheckBox;
}

function FormOptionsPreview({ schema }: FormOptionsPreviewProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label className="text-lg">
            {schema.label}
            {schema.required && "*"}
          </Label>
          {schema.type === "checkbox" && (
            <div className="space-y-2">
              {schema.options.map((option) => (
                <div className="flex items-center space-x-2" key={option.id}>
                  <Checkbox id={option.id} />
                  <Label htmlFor={option.id}>{option.option}</Label>
                </div>
              ))}
            </div>
          )}
          {schema.type === "radio" && (
            <RadioGroup required={schema.required}>
              {schema.options.map((option) => (
                <div className="flex items-center space-x-2" key={option.id}>
                  <RadioGroupItem value={option.option} id={option.id} />
                  <Label htmlFor={option.id}>{option.option}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default FormOptionsPreview;
