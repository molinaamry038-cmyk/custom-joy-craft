export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="text-base font-medium text-foreground">RideAccess</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Accessible transportation for everyone. Need help booking? Call{" "}
          <a href="tel:18005551234" className="font-semibold text-primary underline-offset-4 hover:underline">
            1-800-555-1234
          </a>
          .
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} RideAccess. Designed with accessibility first.
        </p>
      </div>
    </footer>
  );
}
