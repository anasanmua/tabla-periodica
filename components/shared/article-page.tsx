"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export interface ArticlePageProps {
  title: string;
  date: string;
  category?: string;
  source?: string;
  image?: string;
  imageAlt?: string;
  cloudinaryPublicId?: string;
  backHref?: string;
  children: React.ReactNode;
  link?: string;
}

const recentPosts = [
  {
    title: "Carta a los Elementos de la Tabla Periódica",
    date: "29 mayo, 2019",
    href: "/dossier-de-prensa/carta-a-los-elementos-de-la-tabla-periodica",
  },
  {
    title:
      "Estudiantes de Química de la US celebran un 'Desfile de los Elementos'",
    date: "24 mayo, 2019",
    href: "/dossier-de-prensa",
  },
  {
    title:
      "Estudiantes de la US celebran un 'Desfile de los Elementos' en la Casa de la Ciencia",
    date: "24 mayo, 2019",
    href: "/dossier-de-prensa",
  },
  {
    title: "'Desfile de los Elementos' de los estudiantes de Química",
    date: "23 mayo, 2019",
    href: "/dossier-de-prensa",
  },
];

const archives = [{ label: "Mayo 2019", href: "/dossier-de-prensa" }];

const categories = [
  { label: "Prensa", count: 4, href: "/dossier-de-prensa" },
  { label: "Sin categoría", count: 1, href: "/dossier-de-prensa" },
];

const bottomRecentPosts = recentPosts;

function SidebarWidget({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-white bg-primary px-3 py-2 mb-3 uppercase tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      {/* Search */}
      <SidebarWidget title="Buscar">
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Buscar…"
            className="flex-1 px-3 py-1.5 text-sm outline-none"
          />
          <button className="bg-primary text-white px-3 hover:bg-primary/90 transition-colors cursor-pointer">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </SidebarWidget>

      {/* Recent posts */}
      <SidebarWidget title="Entradas recientes">
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li
              key={post.href + post.title}
              className="border-b border-gray-100 pb-2 last:border-0"
            >
              <Link
                href={post.href}
                className="text-sm text-primary hover:underline leading-snug block"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      {/* Archives */}
      <SidebarWidget title="Archivos">
        <ul className="space-y-1">
          {archives.map((a) => (
            <li key={a.label}>
              <Link
                href={a.href}
                className="text-sm text-primary hover:underline"
              >
                {a.label}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      {/* Categories */}
      <SidebarWidget title="Categorías">
        <ul className="space-y-1">
          {categories.map((c) => (
            <li key={c.label} className="flex justify-between text-sm">
              <Link href={c.href} className="text-primary hover:underline">
                {c.label}
              </Link>
              <span className="text-gray-400">({c.count})</span>
            </li>
          ))}
        </ul>
      </SidebarWidget>
    </aside>
  );
}

function BottomWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-gray-200">
      {/* Recent news */}
      <div>
        <h3 className="text-sm font-bold text-white bg-primary px-3 py-2 mb-3 uppercase tracking-wide">
          Noticias recientes
        </h3>
        <ul className="space-y-3">
          {bottomRecentPosts.map((post) => (
            <li
              key={post.title}
              className="flex gap-3 border-b border-gray-100 pb-3 last:border-0"
            >
              <div className="flex-1">
                <Link
                  href={post.href}
                  className="text-sm text-primary hover:underline leading-snug block font-medium"
                >
                  {post.title}
                </Link>
                <span className="text-xs text-gray-400 mt-0.5 block">
                  {post.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ArticlePage({
  title,
  date,
  category,
  source,
  image,
  imageAlt,
  cloudinaryPublicId,
  backHref = "/dossier-de-prensa",
  children,
  link,
}: ArticlePageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10">

          <article className="flex-1 min-w-0">

            <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 mb-4">
              {source && (
                <>
                  <span className="text-primary font-semibold">{source}</span>
                  <span>/</span>
                </>
              )}
              {category && (
                <>
                  <span>{category}</span>
                  <span>/</span>
                </>
              )}
              <span>{date}</span>
            </div>

            {/* Featured image */}
            {cloudinaryPublicId ? (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded mb-8">
                {!imageLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded" />
                )}
                <CldImage
                  src={cloudinaryPublicId}
                  alt={imageAlt ?? title}
                  width={900}
                  height={506}
                  crop="fill"
                  gravity="auto"
                  quality="auto"
                  format="auto"
                  className={`w-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            ) : image ? (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded mb-8">
                {!imageLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded" />
                )}
                <Image
                  src={image}
                  alt={imageAlt ?? title}
                  fill
                  className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            ) : null}

            <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-6">
              {title}
            </h1>

            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              {children}
            </div>


            <div className="mt-10 pt-6 border-t border-gray-200 flex gap-x-2.5">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
                asChild
              >
                <Link href={backHref}>
                  <ArrowLeft className="w-4 h-4" />
                  Volver
                </Link>
              </Button>
              {link && (
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
                  asChild
                >
                  <Link href={link} target="_blank">
                    Ver artículo original
                  </Link>
                </Button>
              )}
            </div>
          </article>

          <Sidebar />
        </div>

        <BottomWidgets />
      </div>
    </div>
  );
}
