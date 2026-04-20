export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="focus-ring sr-only left-4 top-4 z-[60] rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute"
    >
      Skip to content
    </a>
  );
}
