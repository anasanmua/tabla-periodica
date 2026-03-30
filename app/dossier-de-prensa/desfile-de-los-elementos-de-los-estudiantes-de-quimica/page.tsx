import { ArticlePage } from "@/components/shared/article-page";

export default function ArticleForth() {
  return (
    <ArticlePage
      title="'DESFILE DE LOS ELEMENTOS' DE LOS ESTUDIANTES DE QUIMICA"
      date="29 mayo, 2019"
      category="Prensa"
      source="US Química"
      image="/images/prensa/prensa-1.jpg"
      imageAlt="Carta a los Elementos de la Tabla Periódica"
      cloudinaryPublicId="mg_9669-scaled_t2utur"
      backHref="/dossier-de-prensa"
      link="https://www.europapress.es/andalucia/sevilla-00357/noticia-estudiantes-quimica-us-celebran-desfile-elementos-casa-ciencia-sevilla-20190524141800.html"
    >
      <p>
        La Universidad de Sevilla (US) y la Casa de la Ciencia de Sevilla,
        centro de divulgación del Consejo Superior de Investigaciones
        Científicas (CSIC), conmemoran el 150 aniversario de la creación de la
        Tabla Periódica por el químico Ruso Mendeléyev, con un desfile y baile
        de los elementos químicos preparado por el alumnado de la Facultad de
        Química e interpretado para alumnos y alumnas de Educación Secundaria.
      </p>
      <p>
        El evento tiene como objetivo la divulgación de la ciencia haciendo
        hincapié en la creación de vocaciones científicas y la defensa de la
        igualdad de género…
      </p>
    </ArticlePage>
  );
}
