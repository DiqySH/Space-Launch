import { cn } from "@/lib/utils";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva("", {
  variants: {
    variant: {
      green: "bg-green-500/20 text-green-400 border border-green-500/40",
      yellow: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40",
      red: "bg-red-500/20 text-red-400 border border-red-500/40",
      gray: "bg-zinc-700 text-zinc-300 border border-zinc-600",
    },
  },
});

const StatusBadge = ({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) => {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
};

export default StatusBadge;
