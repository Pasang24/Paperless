"use client";

import Container from "@/components/custom/Container";
import ErrorIllustration from "@/components/illustrations/ErrorIllustration";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <Container className="flex flex-col items-center gap-4 mt-6">
      <div className="w-full max-w-[300px]">
        <ErrorIllustration />
      </div>
      <p className="font-semibold text-lg sm:text-xl text-center">
        {error.message}
      </p>
      <Button onClick={handleRetry} className="font-semibold">
        Retry
        <RotateCcw />
      </Button>
    </Container>
  );
}

export default ErrorBoundary;
