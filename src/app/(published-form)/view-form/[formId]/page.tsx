import Container from "@/components/custom/Container";
import FormPreview from "@/components/form-preview/FormPreview";
import { FormInputSchema } from "@/types/form";

interface Params {
  formId: string;
}

async function FormPage({ params }: { params: Promise<Params> }) {
  const { formId } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/form/view-form/${formId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    return <div>There was a problem while loading the form</div>;
  }

  const form: {
    title: string;
    description: string;
    formSchema: FormInputSchema[];
  } = await response.json();

  return (
    <Container className="mt-6">
      <FormPreview formData={form} />
    </Container>
  );
}

export default FormPage;
