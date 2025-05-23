import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-30">
        The simplest way to create forms
      </h2>
      <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground text-center max-w-[700px]">
        Say goodbye to boring forms. Meet Paperless — the free, intuitive form
        builder you've been looking for.
      </p>
      <Link
        href="/login"
        className={`${buttonVariants({
          variant: "default",
        })} mt-6 font-semibold`}
      >
        Create a free form
        <ArrowRight strokeWidth={3} />
      </Link>
      <Image
        src="/landing-images/landing.png"
        alt="landing-image"
        width={900}
        height={500}
        className="w-full mt-12 border-2 border-primary rounded-lg"
      />
    </div>
  );
}

export default HeroSection;
