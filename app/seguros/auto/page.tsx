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

export default function AutoSeguroPage() {
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

  const ventajasAuto = [
    "Con Valor Convenido garantiza la Suma Asegurada de tu vehículo durante toda la vigencia.",
    "Precio personalizado dependiendo tus necesidades y las de tu auto.",
    "Complementa tu protección con las coberturas adicionales que desees y adapta deducibles y Sumas Aseguradas a tus necesidades.",
    "Puedes elegir la cobertura de Auto Sustituto para Pérdida Total o Parcial.",
    "Te brinda protección más allá de las fronteras al viajar con tu auto por Estados Unidos y Canadá.",
    "Paga tu seguro a 3 o 6 meses sin intereses.",
    "Agregamos el Seguro Obligatorio de Responsabilidad Civil Vehicular, sin costo adicional, a la prima del seguro.",
    "Tu seguro te brinda orientación médica telefónica y videoconsultas ilimitadas ¡sin costo! las 24 horas a través de Línea Médica (55 5227 9000). El servicio es brindado a través de médicos de Médica Móvil."
  ]

  const coberturasAuto = [
    "Respaldo por Gastos Médicos que requieras como conductor y para los ocupantes del vehículo.",
    "Con Protección Legal, expide la fianza correspondiente para garantizar tu libertad y la liberación de tu auto en caso de un juicio civil.",
    "Te cubre la Responsabilidad Civil si conduces otro auto, aun cuando este no se encuentre asegurado.",
    "Con Club Autos, personal calificado te ayudará en caso de requerir grúa, paso de corriente, envío de combustible, cambio de llanta o servicio de cerrajería.",
    "Asistencia en viajes, con beneficios como la renta de un vehículo o pago de hospedaje mientras tu auto es reparado, así como información y orientación turística.",
    "Solicitud de transmisión de mensajes en caso de emergencia, para realizar las llamadas necesarias y dar aviso a tus familiares.",
    "Reparación de Daños materiales ocasionados a tu vehículo por incendio, inundación, terremoto o colisión."
  ]

  const coberturasOpcionales = [
    "Mayor protección con Responsabilidad Civil Ocupantes y por Fallecimiento, en caso de que los acompañantes y terceros resulten lesionados o fallezcan a causa de un accidente.",
    "Con Robo Parcial cubre la reposición de autopartes originales a consecuencia de un robo y/o asalto.",
    "Con Robo Parcial Plus, además de lo anterior, se respaldan las llantas y/o rines.",
    "Cero Deducible en Pérdida Total sin gastos adicionales. Despreocúpate de pagar más al momento del siniestro ya que cuentas con deducible cero en caso de pérdida total por daños materiales y robo.",
    "Con la cobertura de Protección Auxiliar, los daños al interior de tu auto ocasionados por robo o intento de robo, los gastos médicos derivados y el robo de cristales quedan cubiertos.",
    "La cobertura de Adaptaciones, Conversiones y Equipo Especial cubre tus rines, estéreo, bocinas y quemacocos por accidentes y Robo Total.",
    "Reparación en agencia: si desafortunadamente sufres una colisión, enviaremos tu auto a la agencia para una reparación de excelencia.",
    "Tienes Auto Sustituto para continuar tus actividades con un plazo de 10, 15, 20 o 30 días en caso de robo o accidentes que causen daños a tu auto.",
    "Daños Materiales de Llantas y/o Rines: Que nada te detenga, si a causa de un accidente o caída en un bache las llantas o rines de tu auto sufren daños, te ayudamos a pagar su reposición.",
    "Reposición de Llaves: Te reembolsamos el costo si perdiste o te robaron tus llaves. Si presentas acta de denuncia por robo o extravío ¡te ahorras el deducible!"
  ]

  const faqsAuto = [
    {
      category: "Requisitos de Contratación",
      items: [
        {
          question: "¿Qué documentos necesito?",
          answer: "• Licencia de conducir vigente.\n• Contar con un automóvil o pick-up de uso particular, con peso de hasta 3.5 toneladas.\n• El contratante debe ser una persona física.\n• Datos del contratante: nombre, Registro Federal de Contribuyentes (RFC), fecha de nacimiento, edad, género del conductor habitual, correo electrónico, domicilio y teléfono.\n• Información del vehículo: tipo, año, modelo, marca, submarca, versión, código postal, placas, número de serie y número de motor."
        }
      ]
    },
    {
      category: "Antes de Contratar",
      items: [
        {
          question: "¿Qué saber antes de contratar tu Seguro de Auto?",
          answer: "El seguro ideal depende del uso que le des a tu vehículo, ya sea particular, comercial, de carga, o de chofer privado (a través de aplicaciones como Uber, Didi, etc.). Es fundamental declarar el uso correcto al momento de la contratación para evitar inconvenientes con la cobertura en caso de un siniestro.\n\nTipos de cobertura disponibles:\n• Responsabilidad Civil\n• Cobertura Limitada\n• Cobertura Amplia\n• Cobertura Premium\n\nAsegurar tu vehículo a valor convenido:\n• Valor comercial: El valor de tu vehículo corresponderá al valor comercial vigente al momento de la contratación, establecido en la guía EBC o libro azul.\n• Vehículo legalizado o fronterizo: El valor será el que aparezca en la guía NADA correspondiente al 'Average Trade-In' vigente al momento del siniestro.\n• Vehículo de salvamento: Su valor será el indicado en la factura emitida por la aseguradora más el costo de la rehabilitación (según las facturas) menos la depreciación que se aplica a partir del segundo año de la rehabilitación. Si no cuentas con las facturas que acrediten la rehabilitación, se usará el valor comercial determinado en la guía EBC a la fecha del siniestro, con una depreciación adicional de 25%.\n• Adaptaciones y equipo especial: Si tu vehículo cuenta con adaptaciones y/o equipo especial, solicita la cobertura 'Adaptaciones, Conversiones y Equipo Especial' para incluirlas en la protección de tu seguro, y presenta las facturas correspondientes que acrediten dichas adaptaciones."
        }
      ]
    },
    {
      category: "Durante la Contratación",
      items: [
        {
          question: "¿Qué debes saber durante la contratación de tu Seguro de Auto GNP?",
          answer: "Verifica que esté correcta la siguiente información en tu Póliza de Auto:\n• Montos de Sumas Aseguradas y coberturas solicitadas: Asegúrate de que los montos sean los correctos y correspondan a las coberturas que pediste.\n• Datos del vehículo: Confirma que estén correctos la marca, modelo, antigüedad, tarjeta de circulación, número de placas y número de serie.\n• Datos del contratante y conductor habitual: Verifica el código postal, sexo y edad.\n\nPlazo para solicitar ajustes en la Póliza:\nTienes un plazo de 30 días para solicitar ajustes si el contenido de la póliza o sus modificaciones no concuerdan con la oferta inicial. Pasado este periodo, se considerarán aceptadas las estipulaciones de la póliza o sus modificaciones (Art. 25 de la Ley Sobre el Contrato de Seguro).\n\nRevisa en tus Condiciones Generales:\nConsulta en detalle las exclusiones y causas por las que se podría perder el derecho a la indemnización, tales como:\n• No contar con la licencia correspondiente para el tipo de vehículo asegurado.\n• Declarar un uso incorrecto del vehículo.\n• No describir con precisión los hechos en caso de siniestro.\n• Daños o responsabilidades no incluidas en las coberturas contratadas.\n• Daños preexistentes en el vehículo."
        }
      ]
    },
    {
      category: "Contratación y Pago",
      items: [
        {
          question: "¿Cómo lo contrato?",
          answer: "¡Cotiza en línea aquí! (Redirige a WhatsApp). Recuerda que si eres Servidor Público puedes contratar tu seguro voluntario vía descuento por nómina.\n\nConoce los métodos de pago de tu Seguro de Auto\n\nPara mayor información sobre nuestros productos, o si tienes dudas acerca del alcance de las coberturas y exclusiones de tu póliza, consulta a tu agente. Él o ella te brindará toda la orientación necesaria para que conozcas a fondo los beneficios y detalles de tu seguro."
        }
      ]
    },
    {
      category: "Restricciones de Contratación",
      items: [
        {
          question: "¿Qué vehículos no aplican para este seguro?",
          answer: "No aplica para:\n• Camiones de más de 3.5 toneladas, tractocamiones, autobuses, remolques y vehículos de renta diaria.\n• Transporte privado, público de carga y público federal de carga.\n• Flotillas."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo seguir con mi seguro?",
          answer: "• Revisa las Condiciones Generales de tu Póliza: Esto te permitirá conocer la vigencia, los riesgos cubiertos y los deducibles contratados, asegurándote de tener toda la información clara sobre tu cobertura.\n• Verifica que tus datos sean correctos: Si encuentras algún error, contacta a tu agente de seguros de inmediato para hacer las correcciones necesarias.\n• Mantén a la mano tu número de póliza y licencia de conducir: Estos documentos serán necesarios en caso de siniestro, así que es importante que los tengas siempre disponibles."
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
              className="fixed top-20 right-4 z-50 p-2 bg-[#FE6D0E] text-white rounded-md md:hidden"
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
              <h1 className="text-4xl font-bold text-[#363636]">Seguro de Auto y Camioneta</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/auto-moto.png"
                alt="Seguro de Auto"
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
                    <CardTitle>¿Qué es el Seguro de Auto?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Es un seguro diseñado a la medida, ya que reconocemos que cada conductor es diferente, 
                      por lo que adaptamos cada plan en función de las necesidades específicas del conductor 
                      así como las de su vehículo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Ventajas del Seguro de Auto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {ventajasAuto.map((ventaja, index) => (
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
                    <CardTitle>Coberturas Incluidas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {coberturasAuto.map((cobertura, index) => (
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
                  <div className="grid gap-4">
                      {coberturasOpcionales.map((cobertura, index) => (
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
                {faqsAuto.map((category, index) => (
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