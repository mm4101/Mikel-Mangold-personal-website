import { nav } from "../content";

// Navigation bar shown at the top of every page. Edit the links in content.ts.
export function Nav() {
  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-ink/10 bg-paper/75 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6">
        <a
          href="/"
          className="hidden sm:block whitespace-nowrap text-sm font-semibold tracking-wide text-ink hover:text-accent transition"
        >
          {nav.brand}
        </a>
        <ul className="flex w-full items-center justify-between sm:w-auto sm:justify-start sm:gap-7">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap text-xs sm:text-sm font-medium text-ink/70 hover:text-accent transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
