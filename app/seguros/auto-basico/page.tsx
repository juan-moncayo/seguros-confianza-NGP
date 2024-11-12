'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, Car, Menu, X } from "lucide-react"
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

export default function SeguroBasicoPage() {
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

  const ventajasSeguroBasico = [
    "No deberás pagar deducible al momento de hacer uso de tu seguro.",
    "Nunca perderás tu protección, ya que se renueva automáticamente.",
    "Podrás contratarlo anualmente y elegir el plazo de pago que más te convenga: anual, semestral, trimestral o mensual."
  ]

  const coberturasSeguroBasico = [
    "Gastos médicos.",
    "Daños al vehículo.",
    "Daños a bienes públicos o privados involucrados en el accidente."
  ]

  const faqsSeguroBasico = [
    {
      category: "Requisitos de Contratación",
      items: [
        {
          question: "¿Qué necesito para contratar el Seguro Básico Estandarizado de Autos?",
          answer: "• Licencia de conducir vigente.\n• Contar con un automóvil de uso particular.\n• El contratante debe ser persona física.\n• Proporcionar los siguientes datos del contratante:\n  - Nombre.\n  - RFC.\n  - Fecha de nacimiento.\n  - Edad y género del conductor principal.\n  - Correo electrónico.\n  - Domicilio y teléfono.\n• Proporcionar los siguientes datos del vehículo:\n  - Tipo de vehículo.\n  - Año, modelo, marca, submarca, versión.\n  - Código postal.\n  - Placas, número de serie y número de motor."
        }
      ]
    },
    {
      category: "Restricciones de Contratación",
      items: [
        {
          question: "¿Qué vehículos no aplican para este seguro?",
          answer: "No aplica para:\n• Flotillas, autos de servicio público, transporte privado, público de carga y público federal de carga.\n• Camiones de más de 3.5 toneladas, tractocamiones, autobuses, remolques, motocicletas, taxis conducidos por el asegurado, así como autos de renta diaria.\n• Automóviles de más de 20 años de antigüedad.\n• Autos antiguos y clásicos, importados, fronterizos, blindados y legalizados, que requieren un tipo de producto especial."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo seguir con mi seguro?",
          answer: "• Conoce las Condiciones Generales de tu Póliza, esto te permitirá entender la vigencia, los riesgos cubiertos y los deducibles contratados.\n• Siempre ten a la mano tu número de póliza y tu licencia de conducir, ya que los necesitarás en caso de siniestro."
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
              <h1 className="text-4xl font-bold text-[#363636]">Seguro Básico Estandarizado de Automóviles</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/seguro-basico.png?height=1080&width=1920"
                alt="Seguro Básico Estandarizado de Automóviles"
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
                    <CardTitle>¿Qué es el Seguro Básico Estandarizado de Autos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      El Seguro de Auto Básico Estandarizado está diseñado para ofrecerte protección en caso de dañar a terceros, ya sea en sus bienes o personas, incluso si tu automóvil no es conducido por ti. Es un seguro de Responsabilidad Civil que brinda protección hasta por $250,000 para cubrir los daños generados a terceros, en caso de que tu auto se vea involucrado en un accidente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro Básico Estandarizado de Autos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {ventajasSeguroBasico.map((ventaja, index) => (
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
                    <CardTitle>¿Qué cubre el Seguro Básico Estandarizado de Autos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Este seguro ofrece protección para quien conduce el auto, hasta por $250,000, para cubrir los gastos generados a terceros, tales como:
                    </p>
                    <div className="grid gap-4">
                      {coberturasSeguroBasico.map((cobertura, index) => (
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
                {faqsSeguroBasico.map((category, index) => (
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