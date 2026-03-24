"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function DownloadSection() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/downloads")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  const handleDownload = async () => {
    const res = await fetch("/api/downloads", { method: "POST" });
    const data = await res.json();
    setCount(data.count);

    // Trigger the actual file download
    const link = document.createElement("a");
    link.href = "/pdf/libro_de_los_elementos.pdf";
    link.download = "libro_de_los_elementos.pdf";
    link.click();
  };

  return (
    <section className="bg-primary py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-1">
            El baile de los elementos
          </h3>
          <p className="text-gray-300">¡Descárgate nuestro libro!</p>
        </div>
        <div className="text-center">
          <Button
            onClick={handleDownload}
            className="bg-white text-primary hover:bg-primary-hover hover:text-white cursor-pointer font-semibold px-6 py-2 transition-colors"
          >
            DESCARGAR LIBRO
          </Button>
          <p className="text-gray-400 text-sm mt-2">
            {count !== null ? `${count} descargas` : "Cargando..."}
          </p>
        </div>
      </div>
    </section>
  );
}

