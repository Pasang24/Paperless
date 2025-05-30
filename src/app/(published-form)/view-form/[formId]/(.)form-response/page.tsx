import Container from "@/components/custom/Container";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Params {
  formId: string;
}

async function InterceptedFormResponsePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { formId } = await params;

  return (
    <Container>
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Form Submitted Successfully!
          </h2>
          <p>Your response has been recorded</p>
          <Link
            href={`/view-form/${formId}`}
            replace
            className="text-primary underline"
          >
            Submit another response
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}

export default InterceptedFormResponsePage;
