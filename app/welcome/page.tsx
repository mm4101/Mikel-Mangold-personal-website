import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome - Mikel Mangold",
  description: "Welcome.",
};

export default function WelcomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <img src="/logo-white.png" alt="Mikel Mangold" className="h-10 w-auto" />
        <a href="/" className="text-sm text-ink/60 hover:text-accent transition">
          ← Back to home
        </a>
      </div>

      {/* Welcome heading */}
      <header className="mt-14 md:mt-20 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Welcome
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          Nice to meet you
        </h1>
      </header>

      {/* Picture */}
      <div className="mt-12 md:mt-16">
        <img
          src="/_DSC6976.jpeg"
          alt="Mikel Mangold"
          className="w-full rounded-lg shadow-2xl shadow-black/60 ring-1 ring-ink/10"
        />
      </div>

      <footer className="mt-16 border-t border-ink/10 pt-8 text-sm text-ink/50 text-center">
        <a href="/" className="hover:text-accent transition">
          ← Back to Mikel Mangold
        </a>
      </footer>
    </main>
  );
}
