import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Accessibility, HeartHandshake, Car, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/preferences")({
  head: () => ({
    meta: [
      { title: "Vehicle Preferences — RideAccess" },
      {
        name: "description",
        content:
          "Set your accessibility needs and vehicle preferences once — we'll match you with the right ride every time.",
      },
      { property: "og:title", content: "Vehicle Preferences — RideAccess" },
      {
        property: "og:description",
        content: "Tell us your accessibility needs once — we'll handle the rest.",
      },
    ],
  }),
  component: PreferencesPage,
});

const vehicleTypes = ["Standard Sedan", "Wheelchair Van", "Assisted Care SUV"] as const;

function PreferencesPage() {
  const [wheelchair, setWheelchair] = useState(false);
  const [assistance, setAssistance] = useState(false);
  const [serviceAnimal, setServiceAnimal] = useState(false);
  const [vehicle, setVehicle] = useState<(typeof vehicleTypes)[number]>("Standard Sedan");
  const [saved, setSaved] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Your ride preferences
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Tell us once — we'll apply your preferences to every booking.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSaved(true);
          setTimeout(() => setSaved(false), 3000);
        }}
        className="mt-10 space-y-8"
      >
        <fieldset className="rounded-2xl border-2 border-border bg-card p-6 shadow-soft sm:p-8">
          <legend className="flex items-center gap-2 px-2 text-xl font-semibold text-foreground">
            <Accessibility className="h-5 w-5 text-primary" aria-hidden /> Accessibility needs
          </legend>
          <div className="mt-4 space-y-3">
            <ToggleRow
              checked={wheelchair}
              onChange={setWheelchair}
              label="Wheelchair accessibility"
              desc="Vehicle with a lift or ramp"
            />
            <ToggleRow
              checked={assistance}
              onChange={setAssistance}
              label="Extra assistance from driver"
              desc="Help to and from the door"
            />
            <ToggleRow
              checked={serviceAnimal}
              onChange={setServiceAnimal}
              label="Service animal"
              desc="Traveling with a service animal"
            />
          </div>
        </fieldset>

        <fieldset className="rounded-2xl border-2 border-border bg-card p-6 shadow-soft sm:p-8">
          <legend className="flex items-center gap-2 px-2 text-xl font-semibold text-foreground">
            <Car className="h-5 w-5 text-primary" aria-hidden /> Preferred vehicle
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {vehicleTypes.map((type) => (
              <label
                key={type}
                className={`flex cursor-pointer flex-col items-start rounded-xl border-2 p-4 transition-colors ${
                  vehicle === type
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <input
                  type="radio"
                  name="vehicle"
                  value={type}
                  checked={vehicle === type}
                  onChange={() => setVehicle(type)}
                  className="sr-only"
                />
                <span className="text-base font-semibold text-foreground">{type}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01]"
          >
            <HeartHandshake className="h-5 w-5" aria-hidden /> Save preferences
          </button>
          {saved && (
            <span className="inline-flex items-center gap-2 text-base font-medium text-success">
              <CheckCircle2 className="h-5 w-5" aria-hidden /> Saved!
            </span>
          )}
        </div>
      </form>
    </section>
  );
}

function ToggleRow({
  checked,
  onChange,
  label,
  desc,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  desc: string;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border-2 border-border bg-background p-4 hover:border-primary/40">
      <span>
        <span className="block text-base font-semibold text-foreground">{label}</span>
        <span className="mt-0.5 block text-sm text-muted-foreground">{desc}</span>
      </span>
      <span
        className={`relative mt-1 inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-input"
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-card shadow transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </span>
    </label>
  );
}
