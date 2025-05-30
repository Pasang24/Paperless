import { redirect } from "next/navigation";

interface Params {
  formId: string;
}

async function FormResponseRedirectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { formId } = await params;

  return redirect(`/view-form/${formId}`);
}

export default FormResponseRedirectPage;
