import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Building2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RideAccess — Our Mission" },
      {
        name: "description",
        content:
          "RideAccess removes transportation barriers for elderly riders and people with disabilities, partnering with hospitals and assisted living facilities.",
      },
      { property: "og:title", content: "About RideAccess — Our Mission" },
      {
        property: "og:description",
        content: "Removing transportation barriers for elderly riders and people with disabilities.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
          <Heart className="h-4 w-4 text-primary" aria-hidden /> Our mission
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Transportation should never be a barrier.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
          We're improving access to transportation for underserved communities — delivering a simple,
          inclusive solution for individuals with physical limitations so they can stay independent and
          connected.
        </p>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Who we serve</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Riders",
                points: [
                  "Elderly individuals",
                  "People with physical disabilities",
                  "Individuals with limited transportation access",
                ],
              },
              {
                icon: Building2,
                title: "Partners",
                points: [
                  "Caregivers and family members",
                  "Assisted living staff",
                  "Hospital and clinic coordinators",
                ],
              },
            ].map(({ icon: Icon, title, points }) => (
              <div key={title} className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-base text-muted-foreground">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our impact</h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            Reliable, accessible transportation increases independence and opens doors to healthcare,
            jobs, and community.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "1,200+", label: "Rides completed monthly" },
              { stat: "98%", label: "On-time arrival rate" },
              { stat: "25+", label: "Healthcare partners" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="rounded-2xl border-2 border-border bg-card p-6 text-center shadow-soft"
              >
                <p className="bg-[image:var(--gradient-hero)] bg-clip-text text-4xl font-bold text-transparent">
                  {stat}
                </p>
                <p className="mt-2 text-base text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[image:var(--gradient-warm)] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-primary" aria-hidden />
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ready to ride with us?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Book your first accessible ride in under a minute.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
          >
            Book a ride
          </Link>
        </div>
      </section>
    </>
  );
}
