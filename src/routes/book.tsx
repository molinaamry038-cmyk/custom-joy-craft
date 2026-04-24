import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Ride — RideAccess" },
      {
        name: "description",
        content: "Schedule an accessible ride in minutes. Choose your date, time, pickup, and drop-off.",
      },
      { property: "og:title", content: "Book a Ride — RideAccess" },
      { property: "og:description", content: "Schedule an accessible ride in minutes." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    notes: "",
  });

  if (submitted) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">Ride confirmed!</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We've scheduled your pickup on <strong className="text-foreground">{form.date}</strong> at{" "}
          <strong className="text-foreground">{form.time}</strong>. You'll receive a reminder before your
          driver arrives.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Back to home
          </Link>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ date: "", time: "", pickup: "", dropoff: "", notes: "" });
            }}
            className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-card px-6 py-3 text-base font-semibold text-foreground hover:bg-secondary"
          >
            Book another ride
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Book your ride</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Just a few quick steps. No account required.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="mt-10 space-y-6 rounded-2xl border-2 border-border bg-card p-6 shadow-soft sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="Date"
            icon={<Calendar className="h-5 w-5 text-muted-foreground" aria-hidden />}
          >
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none"
            />
          </Field>
          <Field
            label="Time"
            icon={<Clock className="h-5 w-5 text-muted-foreground" aria-hidden />}
          >
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none"
            />
          </Field>
        </div>

        <Field
          label="Pickup location"
          icon={<MapPin className="h-5 w-5 text-muted-foreground" aria-hidden />}
        >
          <input
            type="text"
            required
            placeholder="123 Main St, Apt 4B"
            value={form.pickup}
            onChange={(e) => setForm({ ...form, pickup: e.target.value })}
            className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none"
          />
        </Field>

        <Field
          label="Drop-off location"
          icon={<MapPin className="h-5 w-5 text-muted-foreground" aria-hidden />}
        >
          <input
            type="text"
            required
            placeholder="St. Mary's Hospital"
            value={form.dropoff}
            onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
            className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none"
          />
        </Field>

        <div>
          <label className="block text-base font-semibold text-foreground">
            Anything we should know? <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="e.g. need help with stairs, oxygen tank, etc."
            className="mt-2 w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="submit"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01]"
          >
            Confirm ride
          </button>
          <Link
            to="/preferences"
            className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-card px-6 py-4 text-lg font-semibold text-foreground hover:bg-secondary"
          >
            Set preferences
          </Link>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-base font-semibold text-foreground">
        {icon} {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
