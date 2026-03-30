import { ArticlePage } from "@/components/shared/article-page";

export default function ArticleTwo() {
  return (
    <ArticlePage
      title="Carta a los Elementos de la Tabla Periódica"
      date="29 mayo, 2019"
      category="Prensa"
      source="US Química"
      image="/images/prensa/prensa-1.jpg"
      cloudinaryPublicId="15_p3-scaled_d0x2on"
      imageAlt="Carta a los Elementos de la Tabla Periódica"
      backHref="/dossier-de-prensa"
      link="https://www.europapress.es/andalucia/sevilla-00357/noticia-estudiantes-quimica-us-celebran-desfile-elementos-casa-ciencia-sevilla-20190524141800.html"
    >
      <p>
        Estudiantes de la Facultad de Química de la Universidad de Sevilla han
        celebrado un ‘Desfile de los elementos’ en la Casa de la Ciencia de
        Sevilla –centro de divulgación del Consejo Superior de Investigaciones
        Científicas (CSIC)– para conmemorar el 150 aniversario de la creación de
        la Tabla Periódica por el químico ruso Dmitri Ivánovich Mendeléyev.
      </p>
      <p>
        Así, estudiantes de la Facultad de Química disfrazados como elementos
        químicos han realizado un desfile de moda en el que han aprovechado para
        hablar al alumnado de un centro de educación Secundaria sobre las
        propiedades de los elementos químicos de los que van disfrazados.
      </p>
      <p>
        El evento ha tenido una duración de casi dos horas y ha constado de tres
        partes: el desfile de los elementos-alumnos disfrazados a lo largo de
        una gran alfombra roja; la construcción posterior de una Tabla Periódica
        viviente en el patio central de la Casa de la Ciencia formada por el
        alumnado de secundaria y el universitario, en la que cada uno de ellos
        portaba un cartel con el símbolo químico y el número atómico del
        elemento; y, por último, un baile por afinidades químicas, en el que
        cada elemento escogió pareja con el que le resultaba más afín. De esta
        forma, todos los alumnos participaron activamente para impulsar la
        diversión y el conocimiento…
      </p>
    </ArticlePage>
  );
}
