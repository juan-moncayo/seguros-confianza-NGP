'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Smartphone, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import InsuranceQuoteForm from '@/components/formilarioAutoMoto'
import FloatingWhatsAppButton from '@/components/botonFlotanteWhatsapp'

const segurosHogar = [
  { title: 'Mis dispositivos', href: '/seguros-hogar/mis-dispositivos' },
  { title: 'Mi mascota', href: '/seguros-hogar/mi-mascota' },
  { title: 'Seguro de Hogar', href: '/seguros-hogar/seguro-hogar' },
  { title: 'Multidispositivos', href: '/seguros-hogar/multidispositivos' },
  { title: 'Riesgos Naturales - Huracán', href: '/seguros-hogar/riesgos-naturales-huracan' },
  { title: 'Condominios - Áreas comunes', href: '/seguros-hogar/condominios-areas-comunes' },
]

export default function MultidispositivosPage() {
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
    "Cobertura desde $1,000 hasta $1 millón de pesos.",
    "En caso de siniestro, no pagas deducible.",
    "La reparación es a domicilio o en centros de servicio autorizados.",
    "En caso de robo o si la reparación no es posible, se proporciona un equipo en condiciones iguales o similares (no aplica reembolso).",
    "Atención 100% digital y personalizada."
  ]

  const coberturas = [
    "Rotura de pantalla: Cubre la reparación o reemplazo del bien asegurado en caso de rotura interna o externa de pantalla.",
    "Robo con o sin violencia: Ampara el costo de reemplazo del bien asegurado por otro igual o de características similares en caso de robo.",
    "Daños del equipo: Cubre el costo de reparación o reemplazo del bien asegurado en caso de accidente o mojadura.",
    "Variación de voltaje: Cubre la reparación o reemplazo del bien asegurado afectado por una variación de voltaje."
  ]

  const faqsMultidispositivos = [
    {
      category: "Contratación",
      items: [
        {
          question: "¿Cuáles son los requisitos de contratación?",
          answer: "Proporcionar la información mínima requerida para la cotización del riesgo."
        }
      ]
    },
    {
      category: "Restricciones",
      items: [
        {
          question: "¿Existen restricciones de contratación?",
          answer: "La aceptación está sujeta a las políticas vigentes de la compañía. Para más detalles sobre el alcance del seguro y sus exclusiones, consulta las Condiciones Generales del producto."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo tener en cuenta sobre mi seguro?",
          answer: "Revisa la póliza contratada y sus Condiciones Generales para conocer el alcance de la protección (sumas aseguradas, coberturas, entre otros). Verifica la vigencia de la póliza y que los datos del dispositivo sean correctos. Realiza puntualmente el pago de la prima para evitar contratiempos."
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
            <h2 className="text-2xl font-bold text-[#363636] mb-5">Seguros de Hogar</h2>
            <nav>
              {segurosHogar.map((link) => (
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
              className="fixed top-20 right-4 z-50 p-2 bg-[#FE6D0E] text-white rounded-md md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Sidebar for mobile */}
            <div className={`fixed inset-y-0 right-0 z-40 w-64 bg-white transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
              <div className="p-5">
                <h2 className="text-2xl font-bold text-[#363636] mb-5">Seguros de Hogar</h2>
                <nav>
                  {segurosHogar.map((link) => (
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
              <Smartphone className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Seguro Multidispositivos</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=256&width=768"
                alt="Seguro Multidispositivos"
                fill
                className="object-cover"
              />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Multidispositivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Asegura hasta 2 celulares, además de tus electrónicos y electrodomésticos.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="info">
              <TabsList>
                <TabsTrigger value="info">Información</TabsTrigger>
                <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>¿Qué es el Seguro Multidispositivos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Con Multidispositivos puedes asegurar hasta 2 celulares, además de todos los equipos electrónicos y electrodomésticos de tu hogar (nuevos y usados) con antigüedad de hasta 3 años, sin importar la marca, modelo o precio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro Multidispositivos</CardTitle>
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
                    <CardTitle>Coberturas del Seguro Multidispositivos</CardTitle>
                  </CardHeader>
                  <CardContent>
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
              </TabsContent>
              <TabsContent value="faq">
                {faqsMultidispositivos.map((category, index) => (
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
              <Button 
                className="w-full bg-[#FE6D0E] hover:bg-[#363636] text-white"
                onClick={() => window.open('https://wa.me/+52TUNUMERO', '_blank')}
              >
                ¡Cotiza ahora y protege tus dispositivos con el Seguro Multidispositivos!
              </Button>
            </div>

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