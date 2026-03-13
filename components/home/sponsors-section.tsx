import Image from "next/image"
import Link from "next/link"

const mainSponsors = [
  {
    name: "Universidad de Sevilla",
    logo: "/images/logos/us_logo.jpeg",
    url: "https://www.us.es"
  },
  {
    name: "Gobierno de Espana",
    logo: "/images/logos/gob_esp.png",
    url: "https://www.ciencia.gob.es"
  },
  {
    name: "Casa de la Ciencia",
    logo: "/images/logos/casa_ciencia.png",
    url: "https://www.casadelaciencia.csic.es"
  },
  {
    name: "Junta de Andalucia",
    logo: "/images/logos/junta_andalucia.png",
    url: "https://www.juntadeandalucia.es"
  },
]

const secondarySponsors = [
  {
    name: "CSIC",
    logo: "/images/logos/logo_footer.jpg",
    url: "https://www.csic.es"
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
              // className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
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
              // className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
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
