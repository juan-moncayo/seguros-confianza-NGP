'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Menu, X, Car } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import InsuranceQuoteForm from '@/components/InsuranceQuoteForm'
import FloatingWhatsAppButton from '@/components/floating-whatsapp-button'

const segurosAuto = [
    {
      title: 'Seguro de Auto y Camioneta',
      href: '/seguros/auto'
    },
    {
      title: 'Seguros de Auto Elite',
      href: '/seguros/auto-elite'
    },
    {
      title: 'Seguro Básico Estandarizado de Automóviles',
      href: '/seguros/auto-basico'
    },
    {
      title: 'Seguro de Responsabilidad Civil',
      href: '/seguros/responsabilidad-civil'
    },
    {
      title: 'Seguros de Chofer Privado',
      href: '/seguros/chofer'
    },
    {
      title: 'Seguro de Camiones, Tractocamiones y vehiculos de mensajeria y reparto',
      href: '/seguros/camiones'
    },
    {
      title: 'Seguro de Motos',
      href: '/seguros/motos'
    },
    {
      title: 'Beneficios',
      href: '/seguros/auto-beneficios'
    }
  ]


export default function BeneficiosSeguroAutoPage() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const beneficios = [
    {
      title: "Descuento por buena conducción",
      description: "Al contratar un nuevo Seguro de Auto, te brindamos 5% de descuento por buena conducción y la responsabilidad vial demostrada con las otras pólizas de auto que tengas contratadas con nosotros. Para determinar el descuento, asociaremos las otras Pólizas en las que apareces como contratante.",
      icon: "/placeholder.svg?height=64&width=64"
    },
    {
      title: "Cliente integral",
      description: "Reconocemos tu lealtad, por ello, al adquirir o renovar tu Seguro de Auto, te brindamos 10% de descuento por tener contratados con nosotros uno o varios seguros de los distintos ramos que manejamos (Vida, Gastos médicos mayores y Hogar).",
      icon: "/placeholder.svg?height=64&width=64"
    },
    {
      title: "Conductor ecológico",
      description: "Te beneficiamos por ser un Conductor ecológico si recorres menos de 7,000 kilómetros anuales con tu vehículo. Registra tu Póliza que aparece con el distintivo en la app Soy Cliente en los primeros 30 días de vigencia y podrás obtener una bonificación hasta del 30% en la renovación de tu Seguro.",
      icon: "/placeholder.svg?height=64&width=64"
    },
    {
      title: "Dispositivo de localización",
      description: "Si cuentas con el beneficio, puedes programar tu cita de instalación de inmediato con el proveedor que corresponde para tu vehículo y tu Deducible se reducirá en caso de robo.",
      icon: "/placeholder.svg?height=64&width=64"
    },
    {
      title: "Servicio de localización",
      description: "Para todos nuestros clientes con Seguro de Auto cuyo vehículo no se encuentra en el catálogo, cuentan con costo preferencial para adquirir el servicio con el proveedor LoJack.",
      icon: "/placeholder.svg?height=64&width=64"
    }
  ]

  const condiciones = [
    "Autos Motos y Pick Ups de todas las procedencias.",
    "Uso particular.",
    "Personas Físicas.",
    "Paquete amplia o superiores.",
    "Pólizas emitidas a través de un Agente o a través de nuestra línea directa."
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Static Navigation Bar */}
      <header className="bg-[#FE6D0E] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8" />
            <span className="font-serif text-2xl">Seguros Confianza</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#inicio" className="text-white hover:text-[#363636]">Inicio</Link>
            <Link href="/#servicios" className="text-white hover:text-[#363636]">Servicios</Link>
            <Link href="/#agente" className="text-white hover:text-[#363636]">Agente</Link>
            <Link href="/#testimonios" className="text-white hover:text-[#363636]">Testimonios</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Link href="/" className="md:hidden">
              <Button variant="ghost" className="text-white p-2">
                Inicio
              </Button>
            </Link>
            <Button 
              className="bg-white hover:bg-[#363636] text-[#FE6D0E] hover:text-white"
              onClick={() => window.open('https://wa.me/+52TUNUMERO', '_blank')}
            >
              Cotizar
            </Button>
          </div>
        </div>
      </header>

      {/* Add spacing to account for the fixed header */}
      <div className="h-16"></div>

      <div className="flex">
        {/* Fixed Sidebar for large screens */}
        <aside className="hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-md overflow-y-auto">
          <div className="p-5">
            <h2 className="text-2xl font-bold text-[#363636] mb-5">Seguros de Auto</h2>
            <nav>
              {segurosAuto.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className={`flex items-center space-x-2 p-2 rounded mb-2 ${pathname === link.href ? 'bg-[#FE6D0E] text-white' : 'text-[#363636] hover:bg-gray-100'}`}>
                    <span>{link.title}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Menu */}
        {isMobile && (
          <div className="md:hidden">
            <button
              className="fixed top-20 right-4 z-50 p-2 bg-[#FE6D0E] text-white rounded-md"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Sidebar for mobile */}
            <div className={`fixed inset-y-0 right-0 z-40 w-64 bg-white transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
              <div className="p-5">
                <h2 className="text-2xl font-bold text-[#363636] mb-5">Seguros de Auto</h2>
                <nav>
                  {segurosAuto.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div 
                        className={`flex items-center space-x-2 p-2 rounded mb-2 ${
                          pathname === link.href ? 'bg-[#FE6D0E] text-white' : 'text-[#363636] hover:bg-gray-100'
                        }`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <span>{link.title}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 p-8 md:ml-64">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center gap-3">
              <Car className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Beneficios de tu Seguro de Auto</h1>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Descuentos y beneficios por ser un Conductor responsable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reconocemos a nuestros clientes y promovemos la conducción responsable para prevenir accidentes viales, procurando tu bienestar y disminuyendo el impacto que generamos en el medio ambiente. Por ello, hemos lanzado beneficios que nuestros Asegurados pueden obtener durante la contratación de su Seguro de Auto o en el transcurso de su vigencia.
                </p>
              </CardContent>
            </Card>

            {beneficios.map((beneficio, index) => (
              <Card key={index} className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Image src={beneficio.icon} width={32} height={32} alt={beneficio.title} />
                    {beneficio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Condiciones de aplicación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Los beneficios de Distintivo seguro previo y Soy cliente integral aplican para Pólizas nuevas y renovadas de:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  {condiciones.map((condicion, index) => (
                    <li key={index}>{condicion}</li>
                  ))}
                </ul>
                <p className="text-gray-600 mt-4">
                  Podrás obtener este descuento en cada una de las Pólizas nuevas o renovadas de Auto que tengas con nosotros y cumplan con las características que requiere el beneficio.
                </p>
                <p className="text-gray-600 mt-4">
                  Estos beneficios son acumulables, por lo que podrás obtener hasta 15% de descuento en la contratación o renovación de Pólizas de auto, adicional a las campañas de descuento vigentes.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8">
              <InsuranceQuoteForm />
            </div>
          </div>
        </main>
      </div>
      <FloatingWhatsAppButton phoneNumber="+52TUNUMERO" />
    </div>
  )
}