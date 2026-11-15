import type { Metadata } from "next";
import { media } from "../../content";

export const metadata: Metadata = {
  title: `${media.heading} - Mikel Mangold`,
  description: media.text,
};

// Placeholder page for /media. Edit the wording in content.ts.
export default function MediaPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {media.heading}
      </p>
      <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
        {media.title}
      </h1>
      <p className="mt-5 max-w-md text-lg text-ink/70 leading-relaxed">
        {media.text}
      </p>
      <a
        href="/"
        className="mt-10 inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
      >
        ← Back to home
      </a>
    </main>
  );
}
