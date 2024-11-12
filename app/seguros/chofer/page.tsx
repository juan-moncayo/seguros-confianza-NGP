'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Menu, X } from "lucide-react"
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

export default function ChoferPrivadoPage() {
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
    "Protección durante las 24 horas, incluso al no estar conectado en las apps de servicio de transporte privado.",
    "Responsabilidad Civil como cobertura básica que te respalda, en caso de daños a terceros en sus bienes o personas y a los ocupantes del vehículo.",
    "Certificado del Seguro obligatorio de responsabilidad civil vehicular, sin costo adicional.",
    "Atención médica a los pasajeros en caso de accidente.",
    "Instalación y servicio del dispositivo de localización gratuito para unidades consideradas de alto riesgo, en caso de robo.",
    "La opción de elegir la forma de indemnización entre: valor convenido, valor comercial o valor factura.",
    "Complementar tu protección con coberturas adicionales y adaptación de Deducibles y Sumas Aseguradas según tus necesidades.",
    "Protección más allá de las fronteras al viajar con tu auto por EUA y Canadá.",
    "Pagar tu seguro a 3, 6 o 12 meses sin intereses."
  ]

  const coberturas = [
    "Respaldo por los daños materiales ocasionados a tu vehículo a consecuencia de incendio, inundación, terremoto o colisión.",
    "Pérdida o robo total del vehículo asegurado.",
    "Apoyo por los gastos médicos que requieras como conductor y para los ocupantes del vehículo, en caso de accidente.",
    "Respaldo en caso de daños a terceros en sus bienes o persona con las coberturas de Responsabilidad Civil por daños a terceros y Responsabilidad Civil ocupantes.",
    "Protección legal al asegurado, en caso de accidente.",
    "Te pagamos la reparación del parabrisas o reposición del cristal.",
    "Asistencia vial que incluye grúa, paso de corriente, envío de combustible, cambio de llanta o servicio de cerrajería en caso de emergencia en el camino.",
    "Asistencia en viajes, con beneficios como la renta de un vehículo o pago de hospedaje mientras tu auto es reparado, así como información y orientación turística."
  ]

  const faqsChoferPrivado = [
    {
      category: "Requisitos de Contratación",
      items: [
        {
          question: "¿Qué necesito para contratar el Seguro Chofer Privado?",
          answer: "• Licencia de conducir vigente.\n• Contar con un automóvil o pick-up de hasta 3.5 toneladas y de uso chofer privado.\n• El contratante deberá ser persona física o persona moral.\n• Nombre del contratante, registro federal de contribuyentes (RFC), fecha de nacimiento, edad y género del conductor habitual, correo electrónico, domicilio y teléfono.\n• Tipo de vehículo, año, modelo, marca, submarca, versión, código postal, placas, número de serie y de motor."
        }
      ]
    },
    {
      category: "Restricciones de Contratación",
      items: [
        {
          question: "¿Qué vehículos no aplican para este seguro?",
          answer: "No aplica para:\n• Camiones de más de 3,5 toneladas, tractocamiones, autobuses, remolques y de renta diaria.\n• Transporte privado, público de carga y público federal de carga.\n• Flotillas."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo seguir con mi Seguro Chofer Privado?",
          answer: "• Conoce las Condiciones Generales de tu Póliza, esto te permitirá saber la vigencia, los riesgos cubiertos y deducibles contratados.\n• Verifica que los datos de tu Póliza estén correctos, si existen errores, contacta a tu agente de seguros inmediatamente.\n• Siempre ten a la mano tu número de póliza y licencia de conducir, los necesitarás en caso de siniestro."
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
              <Shield className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Chofer Privado</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Seguro Chofer Privado"
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
                    <CardTitle>¿Qué es el Seguro Chofer Privado?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Es un seguro con el que estás respaldado mientras el vehículo asegurado está siendo utilizado en una aplicación de transporte de pasajeros privada y cuando no te encuentras conectado y estás realizando viajes o trayectos personales con tu auto.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro Chofer Privado</CardTitle>
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
                    <CardTitle>¿Qué cubre el Seguro Chofer Privado?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Según el plan que contrates cuentas con las siguientes coberturas:
                    </p>
                    <div className="grid gap-4">
                      {coberturas.map((cobertura, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{cobertura}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 mt-4">
                      Adicional a tener la opción de personalizar y aumentar tu protección con coberturas de contratación opcional, consulta detalles con tu ejecutivo o agente.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq">
                {faqsChoferPrivado.map((category, index) => (
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