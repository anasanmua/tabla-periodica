import { ImageGallery } from "@/components/shared/image-gallery"

const alumnadoImages = [
  { src: "/images/quienes/alumnado-1.jpg", alt: "Estudiante disfrazado de elemento quimico Au" },
  { src: "/images/quienes/alumnado-2.jpg", alt: "Estudiantes en el evento" },
  { src: "/images/quienes/alumnado-3.jpg", alt: "Desfile de elementos quimicos" },
  { src: "/images/quienes/alumnado-4.jpg", alt: "Estudiante representando un elemento" },
  { src: "/images/quienes/alumnado-5.jpg", alt: "Grupo de estudiantes disfrazados" },
  { src: "/images/quienes/alumnado-6.jpg", alt: "Presentacion de elementos" },
  { src: "/images/quienes/alumnado-7.jpg", alt: "Estudiantes en la pasarela" },
  { src: "/images/quienes/alumnado-8.jpg", alt: "Desfile de la Tabla Periodica" },
  { src: "/images/quienes/alumnado-9.jpg", alt: "Estudiantes representando quimica" },
  { src: "/images/quienes/alumnado-10.jpg", alt: "Evento del desfile de elementos" },
  { src: "/images/quienes/alumnado-11.jpg", alt: "Participantes del proyecto" },
  { src: "/images/quienes/alumnado-12.jpg", alt: "Estudiantes disfrazados" },
  { src: "/images/quienes/alumnado-13.jpg", alt: "Presentacion en Casa de la Ciencia" },
  { src: "/images/quienes/alumnado-14.jpg", alt: "Alumnos de la Facultad de Quimica" },
  { src: "/images/quienes/alumnado-15.jpg", alt: "Desfile elementos tabla periodica" },
  { src: "/images/quienes/alumnado-16.jpg", alt: "Evento 150 aniversario" },
  { src: "/images/quienes/alumnado-17.jpg", alt: "Estudiantes en el escenario" },
  { src: "/images/quienes/alumnado-18.jpg", alt: "Presentacion creativa de elementos" },
  { src: "/images/quienes/alumnado-19.jpg", alt: "Participantes en la celebracion" },
  { src: "/images/quienes/alumnado-20.jpg", alt: "Grupo de alumnos disfrazados" },
  { src: "/images/quienes/alumnado-21.jpg", alt: "Evento universitario" },
  { src: "/images/quienes/alumnado-22.jpg", alt: "Desfile final" },
  { src: "/images/quienes/alumnado-23.jpg", alt: "Celebracion tabla periodica" },
  { src: "/images/quienes/alumnado-24.jpg", alt: "Estudiantes participantes" },
]

export default function AlumnadoPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Alumnado Facultad de Quimica
        </h1>
        
        <ImageGallery images={alumnadoImages} columns={3} />
      </div>
    </div>
  )
}
