"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  downloadKey?: string;
  filePath?: string;
  label?: string;
  className?: string;
  countClassName?: string;
  showIcon?: boolean;
}

export function DownloadButton({
  downloadKey = "book:downloads",
  filePath = "/pdf/libro_de_los_elementos.pdf",
  label = "DESCARGAR LIBRO",
  className = "",
  countClassName = "text-gray-400",
  showIcon = false,
}: DownloadButtonProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/downloads?key=${downloadKey}`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, [downloadKey]);

  const handleDownload = async () => {
    const res = await fetch(`/api/downloads?key=${downloadKey}`, { method: "POST" });
    const data = await res.json();
    setCount(data.count);

    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop() ?? "download";
    link.click();
  };

  return (
    <div className="text-center">
      <Button
        onClick={handleDownload}
        className={cn(
          "cursor-pointer font-semibold px-6 py-2 transition-colors",
          className,
        )}
      >
        {showIcon && <Download className="w-4 h-4 mr-2" />}
        {label}
      </Button>
      <p className={cn("text-sm mt-2", countClassName)}>
        {count !== null ? `${count} descargas` : "Cargando..."}
      </p>
    </div>
  );
}

