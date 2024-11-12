'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Menu, X, Truck } from "lucide-react"
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

export default function SeguroCamionesPage() {
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

  const ventajas = [
    "Protección para el conductor, los ocupantes y tu vehículo.",
    "Certificado del seguro obligatorio de responsabilidad civil vehicular, sin costo adicional.",
    "Opción de complementar tu protección con coberturas adicionales, personalizando deducibles y sumas aseguradas según tus necesidades.",
    "Asistencia vial que te respalda en el camino.",
    "Opción de pagar tu seguro a 3, 6 o 12 meses sin intereses."
  ]

  const coberturas = [
    "Daños materiales (pérdida total o parcial) a consecuencia de incendio, inundación, terremoto, colisión y más.",
    "Cobertura de cristales para reparación o reposición de cristales, parabrisas, laterales y más.",
    "Protección económica ante la pérdida total de tu vehículo a causa de robo.",
    "Responsabilidad civil que te respalda por daños que puedas causar a terceros en sus bienes o personas.",
    "Gastos médicos que requiera el conductor y los ocupantes del vehículo en caso de accidente.",
    "Protección legal en caso de accidente.",
    "Asistencia vial camiones / Asistencia vial motos, que puede incluir servicios de grúa, paso de corriente, envío de combustible, cambio de llanta o servicio de cerrajería en caso de emergencia."
  ]

  const coberturasOpcionales = [
    "Adaptaciones, conversiones y equipo especial, que cubre daños materiales o pérdida total que sufran las adaptaciones, conversiones y equipo especial.",
    "Maniobras de carga y descarga, que brinda respaldo por los daños ocasionados al hacer maniobras de carga, descarga o montaje de la mercancía (solo aplica para vehículos de carga).",
    "Responsabilidad civil ecológica por los daños ocasionados al medio ambiente durante las maniobras con el vehículo (solo aplica para vehículos de carga).",
    "Cero deducible en caso de pérdida total por daños materiales."
  ]

  const faqsCamiones = [
    {
      category: "Requisitos de Contratación",
      items: [
        {
          question: "¿Qué información necesito para contratar?",
          answer: "Ten a la mano la siguiente información:\n• Razón social y RFC.\n• Tarjeta de circulación.\n• Para cada unidad: descripción, modelo, suma asegurada en caso de valor factura.\n• Paquete seleccionado: Amplia, Limitada o Responsabilidad Civil.\n• Uso de las unidades, estado de circulación, tipo de carga (camiones y tractocamiones de carga).\n• Coberturas opcionales que requieras.\n• Valor de adaptaciones o conversiones en caso de que se cuente con ellas."
        }
      ]
    },
    {
      category: "Restricciones de Contratación",
      items: [
        {
          question: "¿Existen restricciones para contratar este seguro?",
          answer: "Algunas unidades pueden estar sujetas a un proceso de aceptación de acuerdo a las políticas vigentes de la compañía.\n\nPara mayor detalle del alcance del seguro y sus exclusiones, consulta las condiciones generales del producto con el agente."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo seguir con mi seguro?",
          answer: "• Confirma que la información de la descripción del riesgo sea la correcta según lo contratado.\n• Revisa la carátula de la Póliza para conocer la suma asegurada contratada, deducibles, períodos de espera, coberturas, entre otros.\n• Verifica la vigencia de la Póliza, que el domicilio del bien asegurado sea correcto y que el giro mencionado corresponda a la actividad que realizas.\n• Lee las Condiciones Generales para conocer el alcance de la protección contratada.\n• Realiza puntualmente el pago de la prima para evitar contratiempos.\n• Verifica el proveedor autorizado asignado a tu póliza para llevar a cabo la instalación del dispositivo de localización en tus vehículos."
        }
      ]
    }
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
              <Truck className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Seguro de camiones, tractocamiones y vehículos de mensajería y reparto</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Seguro de camiones, tractocamiones y vehículos de mensajería y reparto"
                fill
                className="object-cover"
              />
            </div>

            <Tabs defaultValue="info">
              <TabsList>
                <TabsTrigger value="info">Información</TabsTrigger>
                <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>¿Qué es el Seguro de camiones, tractos y vehículos de mensajería?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Es un seguro que te permitirá proteger hasta 5 vehículos de tu empresa, contra daños materiales, robo total, responsabilidad civil de la unidad o de la carga, gastos médicos a ocupantes, así como protección legal para el conductor, diseñado para adaptarse a tus necesidades, brindando tranquilidad y seguridad en cada viaje.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro de camiones, tractos y vehículos de mensajería</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {ventajas.map((ventaja, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{ventaja}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>¿Qué cubre el Seguro de camiones, tractos y vehículos de mensajería?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Según el plan que contrates cuentas con:
                    </p>
                    <div className="grid gap-4">
                      {coberturas.map((cobertura, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{cobertura}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Coberturas Opcionales</CardTitle>
                  </CardHeader>
                <CardContent>
                    <p className="text-gray-600 mb-4">
                      Adicional tienes la opción de personalizar y aumentar tu protección con coberturas de contratación opcional, como:
                    </p>
                    <div className="grid gap-4">
                      {coberturasOpcionales.map((cobertura, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{cobertura}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 mt-4">
                      Consulta más coberturas adicionales y detalles con tu ejecutivo o agente.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq">
                {faqsCamiones.map((category, index) => (
                  <Card key={index} className="mb-8">
                    <CardHeader>
                      <CardTitle>{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.items.map((item, itemIndex) => (
                          <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                              <div className="whitespace-pre-line text-gray-600">
                                {item.answer}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

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