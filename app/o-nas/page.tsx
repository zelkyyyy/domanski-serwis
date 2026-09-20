import About from "../components/About";

export default function AboutUs() {
  return (
    <div className="relative flex min-h-screen">
        <div className="absolute -left-1/2 top-0 inset-0 bg-radial from-neutral-800/50 to-70%  to-transparent" />
      <About />
    </div>
  );
}
