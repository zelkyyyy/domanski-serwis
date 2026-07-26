import { notFound } from "next/navigation";
import services from "@/data/services.json";


export default async function UslugaTemplate({
  params
}: {

  params: Promise<{ name: string }>; 
}) {

  const resolvedParams = await params;
  

  const slugFromUrl = decodeURIComponent(resolvedParams.name);


  const service = services.find((s) => s.slug === slugFromUrl);


  if (!service) {
    notFound(); 
  }


  return (
    <main className={`flex p-12  gap-4 min-h-screen flex-col items-center bg-zinc-950 overflow-x-hidden`}>
      <h1 className="text-3xl font-bold text-white"> {service.name} </h1>
      <p>{service.description}</p>
    </main>
  );
}
