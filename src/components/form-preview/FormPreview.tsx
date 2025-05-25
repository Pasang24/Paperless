import { FormInputSchema } from "@/types/form";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
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
    <div className="space-y-4">
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
        <Button disabled>Submit</Button>
        <Button variant={"ghost"} disabled>
          Clear Form
        </Button>
      </div>
    </div>
  );
}

export default FormPreview;
