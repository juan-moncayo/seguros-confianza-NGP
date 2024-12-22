'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Star } from 'lucide-react'

interface Testimonio {
  id: string;
  nombre: string;
  ubicacion: string;
  comentario: string;
  calificacion: number;
  email: string;
}

export default function TestimonialsSection() {
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollPositionRef = useRef(0)
  const [testimonios, setTestimonios] = useState<Testimonio[]>([
    {
      id: '1',
      nombre: "María González",
      ubicacion: "Ciudad de México",
      comentario: "Excelente servicio y atención personalizada. El agente fue muy profesional y me ayudó a encontrar el seguro perfecto para mis necesidades.",
      calificacion: 5,
      email: "maria.gonzalez@example.com"
    },
    {
      id: '2',
      nombre: "Carlos Rodríguez",
      ubicacion: "Guadalajara",
      comentario: "Muy satisfecho con el servicio. El proceso fue rápido y eficiente. Recomiendo ampliamente sus servicios.",
      calificacion: 5,
      email: "carlos.rodriguez@example.com"
    },
    {
      id: '3',
      nombre: "Ana Martínez",
      ubicacion: "Monterrey",
      comentario: "La mejor experiencia que he tenido con una aseguradora. El personal es muy amable y siempre están dispuestos a ayudar.",
      calificacion: 5,
      email: "ana.martinez@example.com"
    },
  ])

  const [nuevoTestimonio, setNuevoTestimonio] = useState({
    nombre: '',
    ubicacion: '',
    comentario: '',
    calificacion: 5,
    email: ''
  })

  const [testimonioAEditar, setTestimonioAEditar] = useState<Testimonio | null>(null)
  const [showTestimonioModal, setShowTestimonioModal] = useState(false)
  const [showEditarModal, setShowEditarModal] = useState(false)
  const [email, setEmail] = useState('')
  const [showCodigoModal, setShowCodigoModal] = useState(false)
  const [accion, setAccion] = useState<'editar' | 'eliminar' | null>(null)

  useEffect(() => {
    const testimonialContainer = testimonialRef.current;
    if (!testimonialContainer) return;

    let animationFrameId: number;
    let lastTimestamp: number = 0;

    const scroll = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        scrollPositionRef.current += deltaTime * 0.05;
        if (scrollPositionRef.current >= testimonialContainer.scrollHeight) {
          scrollPositionRef.current = 0;
        }
        testimonialContainer.scrollTop = scrollPositionRef.current;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const handleSubmitTestimonio = (e: React.FormEvent) => {
    e.preventDefault()
    const nuevoTestimonioConId = {
      ...nuevoTestimonio,
      id: Date.now().toString(),
      email: nuevoTestimonio.email,
    }
    setTestimonios([...testimonios, nuevoTestimonioConId])
    setNuevoTestimonio({ nombre: '', ubicacion: '', comentario: '', calificacion: 5, email: '' })
    setShowTestimonioModal(false)
    alert(`Tu testimonio ha sido agregado. Gracias por tu opinión.`)
  }

  const handleEditarTestimonio = () => {
    if (testimonioAEditar) {
      const testimoniosActualizados = testimonios.map(t => 
        t.id === testimonioAEditar.id ? testimonioAEditar : t
      )
      setTestimonios(testimoniosActualizados)
      setTestimonioAEditar(null)
      setShowEditarModal(false)
      setEmail('')
    }
  }

  const handleEliminarTestimonio = () => {
    const testimoniosActualizados = testimonios.filter(t => t.email !== email)
    setTestimonios(testimoniosActualizados)
    setEmail('')
    setShowCodigoModal(false)
    alert('Tu testimonio ha sido eliminado.')
  }

  const verificarEmail = (accionActual: 'editar' | 'eliminar') => {
    const testimonio = testimonios.find(t => t.email === email)
    if (testimonio) {
      if (accionActual === 'editar') {
        setTestimonioAEditar(testimonio)
        setShowEditarModal(true)
      } else if (accionActual === 'eliminar') {
        handleEliminarTestimonio()
      }
      setShowCodigoModal(false)
    } else {
      alert('Email no encontrado. Por favor, intenta de nuevo.')
    }
  }

  const abrirModalEditar = () => {
    setEmail('')
    setAccion('editar')
    setShowCodigoModal(true)
  }

  const abrirModalEliminar = () => {
    setEmail('')
    setAccion('eliminar')
    setShowCodigoModal(true)
  }

  const StarRating = ({ rating, onRatingChange }: { rating: number, onRatingChange?: (rating: number) => void }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} ${onRatingChange ? 'cursor-pointer' : ''}`}
            onClick={() => onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl mb-4 text-[#363636]">Lo que dicen nuestros clientes</h2>
          <p className="text-[#363636] text-xl">Experiencias reales de personas como tú</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={testimonialRef}
            className="h-[300px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonios.concat(testimonios).map((testimonio, index) => (
              <Card key={`${testimonio.id}-${index}`} className="mb-6 bg-white shadow-lg border-2 border-[#FE6D0E]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-[#FE6D0E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {testimonio.nombre.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonio.nombre}</h3>
                      <p className="text-gray-600">{testimonio.ubicacion}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonio.comentario}</p>
                  <StarRating rating={testimonio.calificacion} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="bg-[#FE6D0E] hover:bg-[#363636] text-white">Agregar Testimonio</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Agregar Testimonio</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmitTestimonio}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="nombre" className="text-right">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      value={nuevoTestimonio.nombre}
                      onChange={(e) => setNuevoTestimonio({...nuevoTestimonio, nombre: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="ubicacion" className="text-right">
                      Ubicación
                    </Label>
                    <Input
                      id="ubicacion"
                      value={nuevoTestimonio.ubicacion}
                      onChange={(e) => setNuevoTestimonio({...nuevoTestimonio, ubicacion: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="comentario" className="text-right">
                      Comentario
                    </Label>
                    <Textarea
                      id="comentario"
                      value={nuevoTestimonio.comentario}
                      onChange={(e) => setNuevoTestimonio({...nuevoTestimonio, comentario: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="calificacion" className="text-right">
                      Calificación
                    </Label>
                    <div className="col-span-3">
                      <StarRating
                        rating={nuevoTestimonio.calificacion}
                        onRatingChange={(rating) => setNuevoTestimonio({...nuevoTestimonio, calificacion: rating})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={nuevoTestimonio.email}
                      onChange={(e) => setNuevoTestimonio({...nuevoTestimonio, email: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Enviar Testimonio</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="ml-4 bg-[#FE6D0E] hover:bg-[#363636] text-white" onClick={abrirModalEditar}>
            Editar Testimonio
          </Button>
          <Button variant="outline" className="ml-4 bg-[#FE6D0E] hover:bg-[#363636] text-white" onClick={abrirModalEliminar}>
            Eliminar Testimonio
          </Button>
        </div>
      </div>

      <Dialog open={showCodigoModal} onOpenChange={setShowCodigoModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ingresa tu email</DialogTitle>
          </DialogHeader>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <DialogFooter>
            <Button onClick={() => verificarEmail(accion!)}>Verificar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showEditarModal} onOpenChange={setShowEditarModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Testimonio</DialogTitle>
          </DialogHeader>
          {testimonioAEditar && (
            <form onSubmit={(e) => { e.preventDefault(); handleEditarTestimonio(); }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-nombre" className="text-right">
                    Nombre
                  </Label>
                  <Input
                    id="edit-nombre"
                    value={testimonioAEditar.nombre}
                    onChange={(e) => setTestimonioAEditar({...testimonioAEditar, nombre: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-ubicacion" className="text-right">
                    Ubicación
                  </Label>
                  <Input
                    id="edit-ubicacion"
                    value={testimonioAEditar.ubicacion}
                    onChange={(e) => setTestimonioAEditar({...testimonioAEditar, ubicacion: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-comentario" className="text-right">
                    Comentario
                  </Label>
                  <Textarea
                    id="edit-comentario"
                    value={testimonioAEditar.comentario}
                    onChange={(e) => setTestimonioAEditar({...testimonioAEditar, comentario: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-calificacion" className="text-right">
                    Calificación
                  </Label>
                  <div className="col-span-3">
                    <StarRating
                      rating={testimonioAEditar.calificacion}
                      onRatingChange={(rating) =>
                        setTestimonioAEditar({...testimonioAEditar, calificacion: rating})
                      }
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Guardar Cambios</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}