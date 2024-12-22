'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle, CloudRain, Menu, X } from 'lucide-react'
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

export default function RiesgosNaturalesHuracanPage() {
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
    "Respaldo durante la temporada de huracanes o tormentas nombradas que pudieran afectar la zona donde vives o tienes tu negocio.",
    "Elige el tope de protección (suma asegurada) desde $10,000 hasta $1,000,000.",
    "Si la trayectoria del huracán pasa por la zona de cobertura en la que te encuentras, recibirás un monto específico considerando la velocidad del viento sostenido al nivel del suelo, con base en los parámetros contratados en tu póliza.",
    "Garantía de pago del seguro sin importar si tu inmueble sufrió daños o no por el paso del huracán.",
    "Tranquilidad al recibir de forma automática el pago de la indemnización siguiendo dos sencillos pasos.",
    "Disponible para contratación a nivel nacional."
  ]

  const cobertura = [
    "El pago del monto previamente contratado tras el paso de un huracán en tu ubicación, sin importar si causa daños a tu inmueble, considerando la velocidad del viento sostenido registrada."
  ]

  const faqsHuracan = [
    {
      category: "Información general del Seguro para Huracanes",
      items: [
        {
          question: "¿Para qué sirve el Seguro para Huracanes?",
          answer: "Este seguro te ofrece apoyo económico para enfrentar posibles daños o pérdidas financieras causadas por un huracán o tormenta. Recibirás un pago automático sin deducible y sin necesidad de evaluar daños, brindándote liquidez cuando más lo necesitas."
        },
        {
          question: "¿Qué tipo de inmueble puedo asegurar con el Seguro para Huracanes?",
          answer: "Puedes asegurar cualquier propiedad en riesgo de fenómenos naturales de este tipo, como una casa, negocio o cualquier otro inmueble dentro de la República Mexicana."
        },
        {
          question: "¿Puedo elegir la suma asegurada del Seguro para Huracanes?",
          answer: "Sí, tú decides el nivel de protección necesario, que será el monto máximo que puedes recibir durante la vigencia de tu póliza si uno o varios huracanes pasan por tu zona."
        }
      ]
    },
    {
      category: "¿Cómo funciona el Seguro de Riesgos Naturales - Huracán?",
      items: [
        {
          question: "¿Cómo se calcula la velocidad de los vientos?",
          answer: "Se utilizan datos registrados por la National Oceanic and Atmospheric Administration (NOAA) para determinar la velocidad del viento sostenida al nivel del suelo en la ubicación de tu propiedad."
        },
        {
          question: "¿Cómo se calcula el monto que voy a recibir en caso de siniestro?",
          answer: "El monto de la indemnización se basa en la velocidad del viento sostenida en tu ubicación y la suma asegurada contratada. La indemnización no depende de los daños sufridos por tu propiedad."
        },
        {
          question: "¿Cómo se realiza el pago de la compensación del Seguro contra Huracanes?",
          answer: "Una vez confirmado que la velocidad del viento sostenido ha alcanzado o superado los límites definidos, recibirás un mensaje de texto y un correo. Solo necesitas confirmar que tus datos bancarios son correctos para recibir el pago en los próximos días."
        },
        {
          question: "¿Qué sucede si el huracán no alcanza la velocidad establecida?",
          answer: "Si el huracán no alcanza la velocidad del viento sostenido especificada en la póliza, no se activará la indemnización."
        }
      ]
    },
    {
      category: "Sobre la contratación de tu Seguro",
      items: [
        {
          question: "¿Cómo puedo contratar mi Seguro para Huracanes?",
          answer: "¡Contrátalo en línea! Obtén tu cotización completando el formulario con tus datos y la información básica de tu propiedad, acepta los términos de la póliza y realiza el pago con tarjeta de débito o crédito vigentes. El contratante debe ser mayor de 18 años, ser persona física o persona física con actividad empresarial, y cumplir con la información mínima requerida por la aseguradora para la cotización del riesgo."
        },
        {
          question: "¿Puedo contratar este seguro si un huracán está por afectar la zona donde vivo?",
          answer: "No se cubrirán las depresiones o tormentas nombradas que evolucionen a huracán, ni huracanes ya registrados y nombrados al momento de la contratación. Para mayor detalle sobre el alcance del seguro y sus exclusiones, consulta las Condiciones Generales del producto."
        }
      ]
    },
    {
      category: "Recomendaciones sobre tu Seguro",
      items: [
        {
          question: "¿Qué debo tener en cuenta sobre mi Seguro para Huracanes?",
          answer: "Revisa la póliza contratada y las Condiciones Generales para conocer el alcance de la protección (sumas aseguradas, coberturas, entre otros). Verifica la vigencia de la póliza y que el domicilio del inmueble asegurado sea correcto. Realiza puntualmente el pago de la prima para evitar contratiempos y garantizar tu protección. Considera que las depresiones y tormentas nombradas que se conviertan en huracán o los huracanes ya registrados y nombrados al momento de la contratación, quedan fuera de la cobertura de tu seguro."
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
              <CloudRain className="h-8 w-8 text-[#FE6D0E]" />
              <h1 className="text-4xl font-bold text-[#363636]">Seguro de Riesgos Naturales - Huracán</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=256&width=768"
                alt="Seguro de Riesgos Naturales - Huracán"
                fill
                className="object-cover"
              />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Riesgos Naturales - Huracán</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Es un seguro que brinda respaldo en caso de huracán, con el pago de un monto de protección contratado según la velocidad del viento sostenido registrada en la ubicación de tu inmueble asegurado, conforme a las condiciones de tu póliza. El huracán deberá estar registrado por la National Oceanic and Atmospheric Administration (NOAA).
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
                    <CardTitle>Beneficios del Seguro de Riesgos Naturales - Huracán</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {beneficios.map((beneficio, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{beneficio}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Cobertura del Seguro de Riesgos Naturales - Huracán</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {cobertura.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq">
                {faqsHuracan.map((category, index) => (
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
                ¡Cotiza ahora y protégete contra huracanes con nuestro Seguro de Riesgos Naturales!
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