import Image from "next/image"
import Link from "next/link"

const mainSponsors = [
  {
    name: "Universidad de Sevilla",
    logo: "/images/logos/universidad-sevilla.jpg",
    url: "https://www.us.es"
  },
  {
    name: "Gobierno de Espana",
    logo: "/images/logos/gobierno-espana.jpg",
    url: "https://www.ciencia.gob.es"
  },
  {
    name: "CSIC",
    logo: "/images/logos/csic.jpg",
    url: "https://www.csic.es"
  },
  {
    name: "Casa de la Ciencia",
    logo: "/images/logos/casa-ciencia.jpg",
    url: "https://www.casadelaciencia.csic.es"
  },
  {
    name: "Junta de Andalucia",
    logo: "/images/logos/junta-andalucia.jpg",
    url: "https://www.juntadeandalucia.es"
  },
]

const secondarySponsors = [
  {
    name: "Marsupi",
    logo: "/images/logos/marsupi.jpg",
    url: "#"
  },
  {
    name: "UCC+i",
    logo: "/images/logos/ucci.jpg",
    url: "#"
  },
  {
    name: "RSEQ",
    logo: "/images/logos/rseq.jpg",
    url: "#"
  },
  {
    name: "Desqbre",
    logo: "/images/logos/desqbre.jpg",
    url: "#"
  },
]

export function SponsorsSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main sponsors */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {mainSponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={100}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
          ))}
        </div>

        {/* Secondary sponsors */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {secondarySponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={80}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
