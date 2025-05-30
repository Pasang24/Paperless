import EmptyIllustration from "../illustrations/EmptyIllustration";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

function EmptyFormList() {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="w-[90%] max-w-[300px]">
        <EmptyIllustration />
      </div>
      <p className="font-semibold text-lg sm:text-xl text-center">
        You don&apos;t have any forms!
      </p>
      <Link
        href="/create-form"
        className={buttonVariants({ variant: "default" })}
      >
        Create new form
      </Link>
    </div>
  );
}

export default EmptyFormList;
