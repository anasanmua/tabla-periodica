"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    consentimiento: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-white">
      {/* Header Image */}
      <div className="relative h-48 md:h-64">
        <Image
          src="/images/contacto-header.jpg"
          alt="Contacto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
            CONTACTO
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm text-gray-600 mb-1">
                Tu nombre (requerido)
              </label>
              <Input
                id="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Tu correo electronico (requerido)
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm text-gray-600 mb-1">
                Asunto
              </label>
              <Input
                id="asunto"
                type="text"
                value={formData.asunto}
                onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                className="border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm text-gray-600 mb-1">
                Tu mensaje
              </label>
              <Textarea
                id="mensaje"
                rows={6}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="border-primary focus:ring-primary"
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="consentimiento"
                checked={formData.consentimiento}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, consentimiento: checked as boolean })
                }
              />
              <label htmlFor="consentimiento" className="text-xs text-gray-600 leading-relaxed">
                Doy mi consentimiento al almacenamiento y gestion de mis datos para envio de este sitio.
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-3"
            >
              ENVIAR
            </Button>
          </form>

          {/* Legal Information */}
          <div className="mt-8 text-xs text-gray-500 space-y-4">
            <p>
              La UNIVERSIDAD DE SEVILLA, con la politica de privacidad en C/ S. Fernando, s/n 41004 SEVILLA, es responsable del tratamiento de los datos de manera licita, leal, transparente, adecuada, pertinente, limitada, exacta y actualizada, limitada, de aplicacion que declara el contenido que ha decidido recogerse conforme las bases de necesidad de la informacion que ha declarado presentados.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responsable: UNIVERSIDAD DE SEVILLA</li>
              <li>Legitimacion: Consentimiento del interesado</li>
              <li>Finalidad: Tramitar su solicitud o queja</li>
              <li>Derechos: De acceso, rectificacion, supresion e oposicion. Derivados de decisiones individualizadas, a ser informado de la existencia de un tratamiento e impugnacion de los mismos.</li>
              <li>Informacion adicional: Consulte nuestra Politica de Privacidad.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
