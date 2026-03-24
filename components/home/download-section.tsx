import { DownloadButton } from "@/components/shared/download-button";

export function DownloadSection() {
  return (
    <section className="bg-primary py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-1">
            El baile de los elementos
          </h3>
          <p className="text-gray-300">¡Descárgate nuestro libro!</p>
        </div>
        <DownloadButton
          className="bg-white text-primary hover:bg-primary-hover hover:text-white"
          countClassName="text-gray-400"
        />
      </div>
    </section>
  );
}

