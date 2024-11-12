'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function InsuranceQuoteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  })

  const formspreeUrl = "https://formspree.io/f/xanyjqjl"
  const whatsappNumber = "+52TUNUMERO" // Replace with your actual WhatsApp number

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        const whatsappMessage = `Hola, me gustaría solicitar una cotización. Mis datos son:\nNombre: ${formData.nombre} ${formData.apellido}\nCorreo: ${formData.correo}\nTeléfono: ${formData.telefono}`
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
        window.location.href = whatsappUrl
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-8 bg-[#FE6D0E] text-white">
          <h2 className="font-serif text-3xl mb-6">Déjanos tus datos para cotizar tu Seguro</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <span>Cotización personalizada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <span>Sin costo ni compromiso</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <span>Respuesta rápida</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="apellido">Apellido</Label>
              <Input
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="correo">Correo</Label>
              <Input
                id="correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-white hover:bg-[#363636] text-[#FE6D0E] hover:text-white text-lg py-6"
            >
              Solicitar Cotización
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}