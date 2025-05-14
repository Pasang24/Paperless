import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ClipboardList, Plus } from "lucide-react";
import Container from "@/components/Container";
import FormList from "@/components/FormList";

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
      <FormList />
    </Container>
  );
}

export default FormsPage;
