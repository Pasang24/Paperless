import Link from "next/link";
import Container from "@/components/Container";
import FormContainer from "@/components/FormContainer";
import { ArrowLeft } from "lucide-react";

function CreateFormPage() {
  return (
    <Container>
      <div className="flex justify-between mb-2">
        <Link href="/forms" className="flex gap-1">
          <ArrowLeft />
          Back to Dashboard
        </Link>
        <p>Paperless | Create New Form</p>
      </div>
      <FormContainer />
    </Container>
  );
}

export default CreateFormPage;
