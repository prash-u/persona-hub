import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "focus-ring min-h-36 w-full rounded-[24px] border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground shadow-sm transition placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
