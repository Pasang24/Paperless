import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ClipboardList, Plus } from "lucide-react";
import Container from "@/components/custom/Container";
import FormList from "@/components/form-list/FormList";
import FormListSkeleton from "@/components/loaders/FormListSkeleton";
import { Suspense } from "react";

function FormsPage() {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-0.5 text-xl font-semibold text-secondary-foreground">
          <ClipboardList />
          My Forms
        </h2>
        <Link
          href="/create-form"
          className={buttonVariants({ variant: "default" })}
        >
          <Plus />
          New Form
        </Link>
      </div>
      <Suspense fallback={<FormListSkeleton />}>
        <FormList />
      </Suspense>
    </Container>
  );
}

export default FormsPage;
