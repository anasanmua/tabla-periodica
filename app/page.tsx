import Image from "next/image";
import { SponsorsSection } from "@/components/home/sponsors-section";
import { DownloadSection } from "@/components/home/download-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7]">
          <div className="absolute inset-0 bg-black/22" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src="/images/comic/tabla_header.jpg"
                alt="Una Tabla Periodica con mucha vida - Los elementos dan la cara"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/90 backdrop-blur-sm py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          ¡Noche de los Investigadores!
        </h2>
        <p className="text-gray-600">Fecha: 27 de Noviembre</p>
      </section>

      <section className="bg-white/90 backdrop-blur-sm py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            ¡Bienvenidos!
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Los elementos de la Tabla Periodica son los bloques de
                construccion de los que esta hecho nuestro mundo. Aprovechando
                que el ano 2019 se celebro el Ano Internacional de la Tabla
                Periodica con motivo del 150 aniversario de su creacion, algunos
                de los elementos de esta Tabla salieron a pasear por Sevilla
                para acercar la quimica, una ciencia esencial para el progreso
                de la humanidad, a los mas jovenes.
              </p>

            </div>

            <div className="aspect-video bg-gray-100 rounded overflow-hidden">
              <iframe
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/promocion_desfile_sxqpaj.mp4`}
                className="w-full h-full"
                allow=" fullscreen; picture-in-picture"
                allowFullScreen
                title="Un desfile con mucha quimica"
              />
            </div>
          </div>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Con este objetivo, 25 alumnas y alumnos de la Facultad de
            Quimica en la Universidad de Sevilla se disfrazaron de elementos
            quimicos y desfilaron frente a alumnado de secundaria en la Casa
            de la Ciencia del CSIC en Sevilla.
          </p>
          <p>
            A lo largo de este proyecto hemos ido desarrollando materiales
            didacticos que pueden encontrarse en esta web. En ella puedes
            encontrar un video-resumen del desfile y seis videos monograficos
            dedicados a otros tantos elementos, realizados por la cineasta
            Remedios Malvarez; un Book con fotos de los elementos protagonistas
            disenado por Jose Antonio Sencianes, de la Casa de la Ciencia y un
            comic realizado por la artista grafica Raquel Garcia Ulldemolins,
            RaquelGU, que ha dado una nueva vida a los elementos de la Tabla
            Periodica y esta teniendo una gran repercusion. Esperemos que los
            elementos del comic lleguen muy lejos en la version inglesa de Tim
            Gutteridge.
          </p>
          </div>
        </div>
      </section>

      {/* Download Book Section */}
      <DownloadSection />

      {/* Sponsors Section */}
      <SponsorsSection />
    </div>
  );
}
