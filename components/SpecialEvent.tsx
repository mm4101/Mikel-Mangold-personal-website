import Script from "next/script";
import { specialEvent } from "../content";

export function SpecialEvent() {
  if (!specialEvent.show) return null;
  const href = `https://luma.com/event/${specialEvent.lumaEventId}`;

  return (
    <section id="event" className="py-10">
      <div className="rounded-2xl border border-accent/40 bg-accent/5 p-6 md:p-8">
        <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          {specialEvent.badge}
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
          {specialEvent.title}
        </h2>
        <p className="mt-2 text-ink/60">{specialEvent.date}</p>
        <p className="mt-4 text-ink/75 leading-relaxed">{specialEvent.description}</p>
        <a
          href={href}
          className="luma-checkout--button mt-6 inline-block px-6 py-3 bg-accent text-paper rounded-full font-medium hover:opacity-90 transition"
          data-luma-action="checkout"
          data-luma-event-id={specialEvent.lumaEventId}
        >
          {specialEvent.ctaLabel}
        </a>
      </div>
      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
