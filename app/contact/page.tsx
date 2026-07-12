import { Clock3, MapPinned, Phone } from "lucide-react";

const phones = [
  { name: "Robert", number: "123 456 789", href: "tel:+48123456789" },
  { name: "Mieczysław", number: "123 456 789", href: "tel:+48123456789" },
  { name: "Rafał", number: "123 456 789", href: "tel:+48123456789" },
];

const openingHours = [
  { day: "Poniedziałek - Piątek", hours: "8:00 - 16:00" },
  { day: "Sobota", hours: "9:00 - 14:00" },
  { day: "Niedziela", hours: "Zamknięte" },
];

export default function Contact() {
  return (
    <main className="overflow-x-hidden bg-zinc-950 text-neutral-100">
      <section className="relative isolate border-b border-white/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(138,138,138,0.24),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            
         
             <div className="rounded-3xl border border-white/10 bg-black/10 backdrop-blur-md p-6 shadow-xl shadow-black/20">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-red-500" />
              <h2 className="text-2xl font-semibold text-white">Godziny otwarcia</h2>
            </div>
            <div className="mt-6 space-y-4">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <span className="text-neutral-300">{item.day}</span>
                  <span className="font-semibold text-white">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/10 backdrop-blur-md p-3 shadow-xl shadow-black/20">
            <p className="text-2xl text-white font-extrabold p-3">Zadzwoń do nas!</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {phones.map((phone) => (
                <a
                  key={phone.name}
                  href={phone.href}
                  className="group text-center rounded-2xl border border-white/10 bg-linear-to-br from-neutral-500/20 to-neutral-950 p-4 transition duration-300  hover:border-red-500/80 hover:bg-white/10"
                >

                  <p className="mt-2 text-lg font-semibold text-white">{phone.name}</p>
                  <p className="mt-1 text-red-500 min-w-[11ch] transition group-hover:text-red-500">
                    {phone.number}
                  </p>
                </a>
              ))}
            </div>
          </div>
            
          </div>



        <div className="rounded-3xl border border-white/10 bg-black/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">

            <div className="flex flex-col items-start gap-3 border-b border-white/10 pb-4">
            <div className={`flex gap-3 items-center`}>
                <MapPinned className="h-5 w-5 text-red-500" />
                <p className="text-2xl text-white font-bold">Adres</p>
            </div>

            <p className="font-medium text-white">21-400 Łuków, ul. Radzyńska 4</p>

            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <iframe
                title="Domańscy Serwis mapa dojazdu"
                src="https://www.google.com/maps?q=21-400%20%C5%81uk%C3%B3w%2C%20ul.%20Radzy%C5%84ska%204&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}