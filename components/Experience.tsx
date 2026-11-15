import { experience } from "../content";

export function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8">{experience.heading}</h2>
      <ol className="space-y-8">
        {experience.roles.map((role, i) => (
          <li key={i} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8">
            <div>
              <p className="text-sm text-ink/60 font-medium pt-1">{role.period}</p>
              {role.stage && (
                <div className="mt-3 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent leading-snug">
                    {role.stage.label}
                  </p>
                  <p className="mt-1 text-xs text-ink/65 leading-snug">
                    {role.stage.detail}
                  </p>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-lg">
                {role.title} <span className="text-ink/60">· {role.company}</span>
              </h3>
              <p className="mt-2 text-ink/75 leading-relaxed">{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
