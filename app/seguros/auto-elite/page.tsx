'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, CheckCircle, Shield, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import InsuranceQuoteForm from '@/components/formilarioAutoMoto'
import FloatingWhatsAppButton from '@/components/botonFlotanteWhatsapp'


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

export default function AutoElitePage() {
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

  const ventajasAutoElite = [
    "Cero Deducible en Pérdida Total: Sin gastos innecesarios. Despreocúpate de pagar más en el momento del siniestro, ya que cuentas con deducible cero en caso de pérdida total por daños materiales y robo.",
    "Daños Materiales de Llantas y/o Rines: Que nada te detenga. Si debido a un accidente o al caer en un bache las llantas o rines de tu auto se dañan, te ayudamos a cubrir los costos de su reposición.",
    "Reposición de Llaves: Las llaves siempre a la mano. Te reembolsamos el costo si perdiste o te robaron las llaves. Presenta un acta de denuncia por robo o extravío y ¡te ahorras el deducible!",
    "Auto Sustituto: Para que nada te detenga. Te proporcionamos un auto sustituto por 10 días en caso de pérdida total."
  ]

  const coberturasAutoElite = [
    { cobertura: "Cero Deducible en Pérdida Total", suma: "Amparada", deducible: "Correspondiente a Daños Materiales Pérdida Parcial", eventos: "1" },
    { cobertura: "Auto Sustituto", suma: "10 días", deducible: "Sin Deducible", eventos: "1" },
    { cobertura: "Daños Materiales de Llantas y/o Rines", suma: "$25,000", deducible: "25%", eventos: "1" },
    { cobertura: "Reposición de Llaves", suma: "$5,000", deducible: "20%", eventos: "1" }
  ]

  const faqsAutoElite = [
    {
      category: "Requisitos de Contratación",
      items: [
        {
          question: "¿Qué necesito para contratar Auto Elite?",
          answer: "• Contar con una póliza de paquete Amplia correspondiente a otra compañía, si deseas contratar un seguro adicional o complementar tu cobertura.\n• Tener un auto con antigüedad menor a 5 años, ya que algunos seguros o coberturas tienen restricciones de acuerdo con la edad del vehículo."
        }
      ]
    },
    {
      category: "Restricciones de Contratación",
      items: [
        {
          question: "¿Qué vehículos no aplican para Auto Elite?",
          answer: "No aplica para:\n• Autos con antigüedad mayor a 5 años.\n• Autos con paquetes de Responsabilidad Civil (RC) y Limitada.\n• Vehículos antiguos, clásicos, legalizados y fronterizos.\n• Camiones de más de 3.5 toneladas, tractocamiones, autobuses, remolques y vehículos de renta diaria.\n• Transporte privado, público de carga y federal de carga.\n• Flotillas.\n\nSi tu vehículo cumple con alguna de estas restricciones, comunícate con nosotros. Te ofreceremos un plan a la medida de tus necesidades y las características de tu auto."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo seguir con mi seguro Auto Elite?",
          answer: "1. Conoce las Condiciones Generales de tu Póliza: Es fundamental que leas y comprendas las condiciones generales de tu póliza para conocer la vigencia, los riesgos cubiertos y los deducibles contratados.\n2. Verifica que tus datos estén correctos: Asegúrate de que todos tus datos personales y los de tu vehículo estén correctamente registrados. Si encuentras algún error, contacta a tu agente de seguros inmediatamente para hacer las correcciones necesarias.\n3. Mantén a la mano tu número de póliza y licencia de conducir: Estos documentos serán esenciales en caso de siniestro, por lo que es importante tenerlos siempre disponibles y accesibles."
        }
      ]
    },
    {
      category: "Contratación",
      items: [
        {
          question: "¿Cómo contrato Auto Elite?",
          answer: "¡Cotiza en línea aquí! (Redirige a WhatsApp)."
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
              <Star className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Auto Elite</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/auto-elite.png?height=1080&width=1920"
                alt="Auto Elite"
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
                    <CardTitle>¿Qué es el Seguro de Auto Elite?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Auto Elite es una cobertura adicional diseñada para proteger tu automóvil de manera más completa si ya cuentas con un Seguro de Autos Individual. Esta cobertura se enfoca en brindarte tranquilidad y protección extra en caso de algún siniestro.
                    </p>
                    <p className="text-gray-600 mt-4">
                      Todo mundo tiene un auto excepcional, al menos en la cabeza. Para cada dueño, su auto es especial y refleja su personalidad y estilo de vida. Por ello, para los conductores que desean una protección especial para su vehículo y ya cuentan con seguro de otra compañía, se ha creado el paquete Auto Elite.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro de Auto Elite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {ventajasAutoElite.map((ventaja, index) => (
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
                    <CardTitle>Coberturas de Auto Elite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-2 text-left">Cobertura</th>
                            <th className="p-2 text-left">Suma Asegurada</th>
                            <th className="p-2 text-left">Deducible</th>
                            <th className="p-2 text-left">Número de eventos</th>
                          </tr>
                        </thead>
                        <tbody>
                          {coberturasAutoElite.map((cobertura, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="p-2">{cobertura.cobertura}</td>
                              <td className="p-2">{cobertura.suma}</td>
                              <td className="p-2">{cobertura.deducible}</td>
                              <td className="p-2">{cobertura.eventos}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq">
                {faqsAutoElite.map((category, index) => (
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