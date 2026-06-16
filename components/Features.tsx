const features = [
  "Visual Builder",
  "Backtesting",
  "Monitoring",
  "AI Optimization",
  "Analytics",
  "Alerts"
];

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div
          key={feature}
          className="border rounded-xl p-6"
        >
          {feature}
        </div>
      ))}
    </section>
  );
}
