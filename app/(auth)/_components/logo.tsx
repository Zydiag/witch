import Image from "next/image";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export function Logo({ className }: { className?: string }) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className={cn("rounded-full", font.className)}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className={cn("text-xl font-semibold", font.className)}>
          WitchCraft
        </p>
        <p className={cn("text-sm text-muted-foreground", font.className)}>
          Let's Play
        </p>
      </div>
    </div>
  );
}
