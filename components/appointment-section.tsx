'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  })

  const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1x8mU40Jn2qk5Gd1LX0sKDxMR63ajW2PJXoEbbWAhZmMg4S3bkprq818xF86hkC64La9uRQGAz"
  const formspreeUrl = "https://formspree.io/f/meoqkjkw"

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
        window.location.href = calendarUrl
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-[#FE6D0E] text-white">
              <h2 className="font-serif text-3xl mb-6">Agenda tu Consulta Gratuita</h2>
              <p className="mb-8 text-white/80">Descubre cómo podemos ayudarte a proteger lo que más valoras</p>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>Asesoría personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>Sin costo ni compromiso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>Respuesta en 24 horas</span>
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
                  Agendar Cita
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
