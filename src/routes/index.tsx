import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, ShieldCheck, Accessibility, Clock, PhoneCall } from "lucide-react";
import heroImage from "@/assets/hero-accessible-ride.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RideAccess — Accessible Rides for Everyone" },
      {
        name: "description",
        content:
          "Book accessible, reliable transportation for elderly riders and people with disabilities. Wheelchair-friendly vehicles and trained drivers.",
      },
      { property: "og:title", content: "RideAccess — Accessible Rides for Everyone" },
      {
        property: "og:description",
        content: "Wheelchair-friendly vehicles, trained drivers, simple booking.",
      },
    ],
  }),
  component: HomePage,
});

const availableSlots = [
  { date: "Today", time: "2:30 PM", vehicle: "Wheelchair Van", seats: 2 },
  { date: "Today", time: "4:15 PM", vehicle: "Standard Sedan", seats: 3 },
  { date: "Tomorrow", time: "9:00 AM", vehicle: "Wheelchair Van", seats: 1 },
  { date: "Tomorrow", time: "11:30 AM", vehicle: "Assisted Care SUV", seats: 2 },
  { date: "Tomorrow", time: "2:00 PM", vehicle: "Standard Sedan", seats: 4 },
  { date: "Wed, Apr 30", time: "10:00 AM", vehicle: "Wheelchair Van", seats: 2 },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <Accessibility className="h-4 w-4" aria-hidden /> Accessibility-first transportation
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Rides built for{" "}
              <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
                independence
              </span>
              .
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              Safe, reliable transportation for elderly riders and people with disabilities. Trained
              drivers, accessible vehicles, and a booking process anyone can use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
              >
                <Calendar className="h-5 w-5" aria-hidden /> Book a ride
              </Link>
              <a
                href="tel:18005551234"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-6 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <PhoneCall className="h-5 w-5" aria-hidden /> Call to book
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Need help? Our team answers in under 60 seconds, 7 days a week.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-warm)] blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt="A smiling elderly woman being helped into an accessible van by a kind caregiver"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Accessibility,
                title: "Truly accessible",
                desc: "Wheelchair lifts, low-step entry, and drivers trained to assist.",
              },
              {
                icon: ShieldCheck,
                title: "Safety you can trust",
                desc: "Background-checked drivers and inspected, well-maintained vehicles.",
              },
              {
                icon: Clock,
                title: "On time, every time",
                desc: "Reliable scheduling for medical appointments and daily life.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                <p className="mt-2 text-base text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available rides */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Available rides</h2>
              <p className="mt-2 text-base text-muted-foreground">
                Pick a time that works for you — booking takes less than a minute.
              </p>
            </div>
            <Link
              to="/book"
              className="text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              See all options →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {availableSlots.map((slot, i) => (
              <article
                key={i}
                className="group rounded-2xl border-2 border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                    <Calendar className="h-4 w-4" aria-hidden /> {slot.date}
                  </span>
                  <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
                    {slot.seats} seat{slot.seats > 1 ? "s" : ""} open
                  </span>
                </div>
                <p className="mt-3 text-2xl font-bold text-foreground">{slot.time}</p>
                <p className="mt-1 flex items-center gap-1.5 text-base text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden /> {slot.vehicle}
                </p>
                <Link
                  to="/book"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Reserve this ride
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
