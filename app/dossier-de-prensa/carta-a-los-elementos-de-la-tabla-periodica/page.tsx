import { ArticlePage } from "@/components/shared/article-page";

export default function ArticleOne() {
  return (
    <ArticlePage
      title="Carta a los Elementos de la Tabla Periódica"
      date="29 mayo, 2019"
      category="Prensa"
      source="US Química"
      cloudinaryPublicId="tabla_sentados_3_vzxebc"
      imageAlt="Carta a los Elementos de la Tabla Periódica"
      backHref="/dossier-de-prensa"
      link="https://elpais.com/elpais/2019/05/28/ciencia/1559036161_398835.html"
    >
      <p>
        ¿Qué tiene que ver el hierro con el lobo feroz? ¿Y el mercurio con un sombrero gigante, el lantano con el
        fantasma de la ópera y el lutecio con París? ¿La relación del indio con un piel roja y del californio con
        California? ¿Qué tienen en común el escandio con Escandinavia y el europio con Europa?
      </p>
      <p>
        Son algunas de las preguntas que responde <em>La Carta a los Elementos de la Tabla Periódica</em>, un proyecto
        artístico y educativo desarrollado por alumnos y profesores de la Facultad de Química de la Universidad de
        Sevilla con motivo del 150 aniversario de la Tabla Periódica de los Elementos.
      </p>
      <p>
        Cada elemento recibe una carta personalizada en la que se narra su historia, sus propiedades y sus curiosidades
        de una forma cercana y creativa, convirtiendo la química en una experiencia visual y literaria accesible para
        todos los públicos.
      </p>
      <p>
        El proyecto fue presentado en la Casa de la Ciencia de Sevilla, centro de divulgación del Consejo Superior de
        Investigaciones Científicas (CSIC), y ha sido reconocido como una de las iniciativas más originales en el marco
        del Año Internacional de la Tabla Periódica proclamado por la UNESCO.
      </p>
    </ArticlePage>
  );
}
