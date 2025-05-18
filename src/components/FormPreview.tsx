import { FormInputSchema } from "@/types/form";
import { Card, CardContent } from "./ui/card";
import FormInputFieldPreview from "./FormInputFieldPreview";

interface FormPreviewProps {
  formData: {
    title: string;
    description: string;
    formSchema: FormInputSchema[];
  };
}

function FormPreview({ formData }: FormPreviewProps) {
  return (
    <Card>
      <CardContent>
        {formData.title && (
          <h2 className="font-bold text-3xl mb-3">{formData.title}</h2>
        )}
        {formData.description && <p className="my-3">{formData.description}</p>}
        <div className="space-y-2">
          {formData.formSchema.map((schema) => (
            <FormInputFieldPreview key={schema.id} schema={schema} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default FormPreview;
