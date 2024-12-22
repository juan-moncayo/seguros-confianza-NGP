'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Home, Menu, X } from 'lucide-react'
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

export default function SeguroHogarPage() {
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
    "Orientación médica telefónica y videollamadas ilimitadas ¡sin costo! las 24 horas, respaldadas por Médica Móvil.",
    "Protección del patrimonio y pertenencias, ya seas dueño, inquilino o arrendador del inmueble.",
    "Propuesta de valuación real y confiable del inmueble.",
    "Aseguramiento del inmueble, ya sea casa, departamento o condominio, hasta por 30 millones de pesos, incluyendo los cimientos.",
    "Protección ante riesgos hidrometeorológicos en cualquier parte de la República sin restricción de zona.",
    "Descuentos por medidas de seguridad."
  ]

  const coberturas = [
    "Todo Riesgo Incendio Edificio y Contenidos: en caso de incendio, rayo o explosión.",
    "Responsabilidad Civil: daños a terceras personas causados por cualquier integrante de la familia o empleados domésticos.",
    "Remoción de Escombros: si la vivienda queda inhabitable, se brinda apoyo para desmontaje, demolición, limpieza y acarreo de escombros.",
    "Equipo Electrónico y Electrodomésticos: reparación o reemplazo de aparatos electrónicos en caso de descargas eléctricas, variación de voltaje o cortocircuito.",
    "Cristales: pago por reemplazo e instalación de cristales rotos.",
    "Robo: Menaje de Casa, Artículos en Tránsito, Objetos de Arte, Joyas.",
    "Bienes a la intemperie: asegura bienes expuestos fuera del hogar.",
    "Protección contra riesgos hidrometeorológicos y terremotos.",
    "Gastos Extraordinarios: causados por siniestros en el inmueble."
  ]

  const faqsHogar = [
    {
      category: "Contratación",
      items: [
        {
          question: "¿Cuáles son los requisitos de contratación?",
          answer: "Acercarse a uno de nuestros asesores profesionales en seguros. Proporcionar la información mínima requerida por la aseguradora para la cotización del riesgo."
        }
      ]
    },
    {
      category: "Restricciones",
      items: [
        {
          question: "¿Existen restricciones de contratación?",
          answer: "La aceptación está sujeta a las políticas vigentes de la compañía. Para detalles sobre el alcance del seguro y sus exclusiones, consulta las Condiciones Generales del producto."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo tener en cuenta sobre mi seguro?",
          answer: "Revisa la póliza contratada y sus Condiciones Generales para conocer el alcance de la protección (sumas aseguradas, deducible, coaseguro, periodo de espera, coberturas adicionales, entre otros). Verifica la vigencia de la póliza, que el domicilio del bien asegurado sea correcto y que el giro indicado en la póliza corresponda a la actividad que realizas. Realiza puntualmente el pago de la prima para evitar contratiempos."
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
              <Home className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Seguro de Hogar Versátil</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=256&width=768"
                alt="Seguro de Hogar Versátil"
                fill
                className="object-cover"
              />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Hogar Versátil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Asegura tu casa o departamento ante eventualidades, daños al inmueble o sus contenidos.
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
                    <CardTitle>¿Qué es el Seguro de Hogar Versátil?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Es un seguro para Casa Habitación que protege y brinda tranquilidad a ti y tus seres queridos contra los principales riesgos a los que están expuestos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro de Hogar Versátil</CardTitle>
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
                    <CardTitle>Coberturas del Seguro de Hogar Versátil</CardTitle>
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
                {faqsHogar.map((category, index) => (
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
                onClick={() => window.open('https://wa.me/+52TUNUMERO', '_blank')
                }
              >
                ¡Cotiza ahora y protege tu hogar con el Seguro de Hogar Versátil!
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