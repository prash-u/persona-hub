import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
  {
    variants: {
      variant: {
        default:
          "border-border/70 bg-background/80 text-muted-foreground backdrop-blur",
        accent:
          "border-accent/20 bg-accent/10 text-accent-foreground dark:text-accent",
        featured:
          "border-primary/20 bg-primary/10 text-primary",
        outline:
          "border-border/70 bg-background/70 text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
