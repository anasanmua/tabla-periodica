import { ImageGallery } from "@/components/shared/image-gallery"

const alumnadoImages = [
  { src: "/images/students/alumnado_1.jpg", alt: "Estudiante disfrazado de elemento quimico Au" },
  { src: "/images/students/alumnado_2.jpg", alt: "Estudiantes en el evento" },
  { src: "/images/students/alumnado_3.jpg", alt: "Desfile de elementos quimicos" },
  { src: "/images/students/alumnado_4.jpg", alt: "Estudiante representando un elemento" },
  { src: "/images/students/alumnado_5.jpg", alt: "Grupo de estudiantes disfrazados" },
  { src: "/images/students/alumnado_6.jpg", alt: "Presentacion de elementos" },
  { src: "/images/students/alumnado_7.jpg", alt: "Estudiantes en la pasarela" },
  { src: "/images/students/alumnado_8.jpg", alt: "Desfile de la Tabla Periodica" },
  { src: "/images/students/alumnado_9.jpg", alt: "Estudiantes representando quimica" },
  { src: "/images/students/alumnado_10.jpg", alt: "Evento del desfile de elementos" },
  { src: "/images/students/alumnado_11.jpg", alt: "Participantes del proyecto" },
  { src: "/images/students/alumnado_12.jpg", alt: "Estudiantes disfrazados" },
  { src: "/images/students/alumnado_13.jpg", alt: "Presentacion en Casa de la Ciencia" },
  { src: "/images/students/alumnado_14.jpg", alt: "Alumnos de la Facultad de Quimica" },
  { src: "/images/students/alumnado_15.jpg", alt: "Desfile elementos tabla periodica" },
  { src: "/images/students/alumnado_16.jpg", alt: "Evento 150 aniversario" },
  { src: "/images/students/alumnado_17.jpg", alt: "Estudiantes en el escenario" },
  { src: "/images/students/alumnado_18.jpg", alt: "Presentacion creativa de elementos" },
  { src: "/images/students/alumnado_19.jpg", alt: "Participantes en la celebracion" },
  { src: "/images/students/alumnado_20.jpg", alt: "Grupo de alumnos disfrazados" },
  { src: "/images/students/alumnado_21.jpg", alt: "Evento universitario" },
  { src: "/images/students/alumnado_22.jpg", alt: "Desfile final" },
  { src: "/images/students/alumnado_23.jpg", alt: "Celebracion tabla periodica" },
  { src: "/images/students/alumnado_24.jpg", alt: "Celebracion tabla periodica" },
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
