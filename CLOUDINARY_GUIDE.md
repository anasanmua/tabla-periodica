# Guía de uso de ImageGallery con Cloudinary

## 1. Configuración inicial

1. **Crear cuenta en Cloudinary:**
   - Ve a https://cloudinary.com/users/register/free
   - Obtén tu Cloud Name, API Key y API Secret

2. **Actualizar .env.local:**
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

## 2. Subir imágenes a Cloudinary

### Opción A: Dashboard web
- Ve a https://cloudinary.com/console/media_library
- Arrastra y suelta tus imágenes
- Copia los Public IDs (ej: "sample-image", "my-gallery/photo1")

### Opción B: Upload programático (opcional)
```typescript
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// En un API route
const result = await cloudinary.uploader.upload(file, {
  folder: "tabla-periodica/gallery",
})
```

## 3. Usar el componente

### Solo imágenes de Cloudinary:
```typescript
import { ImageGallery } from "@/components/shared/image-gallery"

const cloudinaryImages = [
  {
    src: "tabla-periodica/hero-image",
    alt: "Imagen principal de la tabla periódica"
  },
  {
    src: "tabla-periodica/gallery/image-1",
    alt: "Primera imagen de la galería"
  },
  {
    src: "tabla-periodica/gallery/image-2", 
    alt: "Segunda imagen de la galería"
  }
]

export function MyGallery() {
  return (
    <ImageGallery 
      images={cloudinaryImages} 
      columns={3}
      useCloudinary={true}
    />
  )
}
```

### Mezcla de imágenes (Cloudinary + estáticas):
```typescript
const mixedImages = [
  {
    src: "cloudinary-image-id",
    alt: "Imagen de Cloudinary",
    isCloudinary: true
  },
  {
    src: "/images/static-image.jpg",
    alt: "Imagen estática",
    isCloudinary: false
  }
]

export function MixedGallery() {
  return <ImageGallery images={mixedImages} columns={2} />
}
```

### Solo imágenes estáticas (modo original):
```typescript
const staticImages = [
  {
    src: "/images/photo1.jpg",
    alt: "Foto 1"
  },
  {
    src: "/images/photo2.jpg", 
    alt: "Foto 2"
  }
]

export function StaticGallery() {
  return (
    <ImageGallery 
      images={staticImages} 
      columns={3}
      useCloudinary={false}
    />
  )
}
```

## 4. Ventajas de Cloudinary

✅ **Optimización automática:** WebP, AVIF según el navegador
✅ **Redimensionado automático:** Genera thumbnails perfectos
✅ **CDN global:** Carga rápida en todo el mundo
✅ **Compresión inteligente:** Reduce peso sin perder calidad
✅ **Transformaciones:** Crop, filtros, efectos on-the-fly

## 5. Transformaciones avanzadas (opcional)

```typescript
// El componente ya incluye las mejores configuraciones:
<CldImage
  src="mi-imagen"
  alt="..."
  fill
  crop="fill"        // Para thumbnails
  gravity="auto"     // Detección inteligente de contenido
  quality="auto"     // Calidad automática según conexión
  format="auto"      // WebP/AVIF automático
/>
```
