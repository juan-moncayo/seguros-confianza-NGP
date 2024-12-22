'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Building2, Menu, X } from 'lucide-react'
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

export default function CondominiosAreasComunesPage() {
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
    "Producto exclusivo y específico para la protección de áreas comunes.",
    "Sumas aseguradas disponibles desde $250,000 hasta $50,000,000.",
    "Puedes asegurar áreas comunes desde 20 m².",
    "Opción de elegir la protección ante riesgos catastróficos para los bienes compartidos."
  ]

  const coberturas = [
    "Responsabilidad Civil (cobertura básica).",
    "Todo Riesgo Incendio (edificio y contenidos).",
    "Riesgos Hidrometeorológicos.",
    "Terremoto y Erupción Volcánica.",
    "Gastos Extraordinarios.",
    "Calderas y recipientes sujetos a presión.",
    "Rotura de maquinaria.",
    "Dinero y valores."
  ]

  const faqsCondominio = [
    {
      category: "Requisitos de contratación",
      items: [
        {
          question: "¿Cuáles son los requisitos para contratar el Seguro de Condominios - Áreas comunes?",
          answer: "Cumplir con la información mínima requerida para la cotización del riesgo."
        }
      ]
    },
    {
      category: "Restricciones de contratación",
      items: [
        {
          question: "¿Existen restricciones para contratar el Seguro de Condominios - Áreas comunes?",
          answer: "Aceptación de acuerdo a las políticas vigentes de la compañía. Para más detalles sobre el alcance del seguro y sus exclusiones, consulta las Condiciones Generales del producto."
        }
      ]
    },
    {
      category: "Recomendaciones de tu seguro",
      items: [
        {
          question: "¿Qué debo tener en cuenta sobre mi Seguro de Condominios - Áreas comunes?",
          answer: "Revisa la póliza, así como sus Condiciones Generales, para conocer el alcance de la protección contratada (sumas aseguradas, deducible o coberturas adicionales, entre otros). Es recomendable verificar la vigencia de la póliza, que el domicilio del bien asegurado sea correcto y que el giro que se menciona en la póliza corresponda a la actividad que realiza. Realiza puntualmente el pago de la prima para evitar contratiempos."
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
              <Building2 className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Seguro de Condominios - Áreas Comunes</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=256&width=768"
                alt="Seguro de Condominios - Áreas Comunes"
                fill
                className="object-cover"
              />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Condominios - Áreas Comunes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Este seguro está diseñado para proteger los bienes compartidos entre las personas que habitan en el condominio, cubriendo los daños que puedan ser ocasionados por los residentes o por causas externas como fenómenos naturales, incendios, entre otros.
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
                    <CardTitle>Ventajas del Seguro de Condominios - Áreas Comunes</CardTitle>
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
                    <CardTitle>Coberturas del Seguro de Condominios - Áreas Comunes</CardTitle>
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
                {faqsCondominio.map((category, index) => (
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
                ¡Cotiza ahora y protege las áreas comunes de tu condominio!
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