import ServicesComponent from "../components/Services";
import services from "../../data/services.json";

export default function Services() {
  return (
    <div className="relative flex min-h-screen">
      <div className="absolute -left-1/2 top-0 inset-0 bg-radial from-neutral-800/50 to-80%  to-transparent" />

      <ServicesComponent services={services} />
    </div>
  );
}
