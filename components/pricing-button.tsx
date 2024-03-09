"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface PricingButtonProps {
  className?: string;
}

export const PricingButton = ({ className }: PricingButtonProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/pricing")}
      variant="ghost"
      className={cn("text-muted-foreground hover:text-primary", className)}
    >
      Pricing
    </Button>
  );
};
