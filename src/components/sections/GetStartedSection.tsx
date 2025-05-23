import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

function GetStartedSection() {
  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <h2 className="text-2xl sm:text-4xl md:text-5xl text-center font-bold">
        Get Started Today!!
      </h2>
      <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground text-center max-w-[700px]">
        Join us today and start making forms like nowhere before!
      </p>
      <Link
        href="/login"
        className={`${buttonVariants({
          variant: "default",
        })} mt-6 font-semibold`}
      >
        Get Started
        <ArrowRight strokeWidth={3} />
      </Link>
    </div>
  );
}

export default GetStartedSection;
