'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CheckCircle,  Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PetInsuranceQuoteForm from '@/components/formularioMascota'
import FloatingWhatsAppButton from '@/components/botonFlotanteWhatsapp'

const segurosHogar = [
  { title: 'Mis dispositivos', href: '/seguros-hogar/mis-dispositivos' },
  { title: 'Mi mascota', href: '/seguros-hogar/mi-mascota' },
  { title: 'Seguro de Hogar', href: '/seguros-hogar/seguro-hogar' },
  { title: 'Multidispositivos', href: '/seguros-hogar/multidispositivos' },
  { title: 'Riesgos Naturales - Huracán', href: '/seguros-hogar/riesgos-naturales-huracan' },
  { title: 'Condominios - Áreas comunes', href: '/seguros-hogar/condominios-areas-comunes' },
]

export default function MiMascotaPage() {
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
    "Personaliza las coberturas y asistencias de tu paquete según las necesidades de tus mascotas.",
    "Elige la Suma Asegurada y el Deducible de tu póliza.",
    "Cobertura en caso de fallecimiento de la mascota, incluida en todos los paquetes de protección.",
    "Orientación veterinaria telefónica las 24 horas para atender padecimientos, dudas o cuidados de la mascota.",
    "Gastos médicos veterinarios en caso de accidente o enfermedad.",
    "Respaldo por daños a terceros, físicos o materiales, causados por tu mascota.",
    "Servicio de cremación en caso de fallecimiento por enfermedad o accidente. Incluye recolección del cuerpo, urna básica y entrega de cenizas.",
    "Asistencias para cuidar a tu mascota como pipeta antipulgas, desparasitación y vacuna antirrábica.",
    "Asistencias opcionales para consentir a tu mascota: baño y peluquería, limpieza dental, corte de uñas y más."
  ]

  const coberturas = [
    "Responsabilidad Civil mascotas: Te respalda por daños a terceros en su persona, bienes u otras mascotas, ocasionados por el perro o gato asegurado.",
    "Gastos médicos veterinarios: Cubre la atención para tu mascota en caso de accidente o enfermedad, incluyendo intervenciones quirúrgicas, análisis de laboratorio, hospitalización, entre otros (consulta los periodos de espera establecidos).",
    "Fallecimiento de la mascota: Indemnización al contratante en caso de que la mascota fallezca por enfermedad.",
    "Robo con violencia de mascotas: En caso de estar cubierto, se indemniza con un monto establecido al contratante tras presentar el acta de robo ante el Ministerio Público."
  ]

  const asistencias = [
    "Orientación veterinaria telefónica",
    "Desparasitación",
    "Pipeta antipulgas",
    "Vacuna antirrábica",
    "Servicio de cremación por enfermedad o accidente",
    "Servicio de esterilización",
    "Consulta médica veterinaria en red o a domicilio",
    "Corte de uñas, limpieza externa de oídos y limpieza de dientes",
    "Baño y peluquería",
    "Coordinación con salón de belleza, boutiques y clínicas veterinarias",
    "Asistencia legal telefónica por daños a terceros",
    "Referencia con guarderías/hoteles de mascotas"
  ]

  const faqsMascota = [
    {
      category: "Requisitos de Contratación",
      items: [
        {
          question: "¿Cuáles son los requisitos para contratar el seguro Mi Mascota?",
          answer: "El contratante debe ser mayor de 18 años. Proporcionar los datos del contratante (responsable de la mascota). Tipo de mascota: perro o gato. Raza de la mascota. Sexo de la mascota. Cumplir con la información mínima requerida por la aseguradora para la cotización del riesgo."
        }
      ]
    },
    {
      category: "Restricciones de Contratación",
      items: [
        {
          question: "¿Cuáles son las restricciones para contratar el seguro Mi Mascota?",
          answer: "Seguro disponible solo para animales domésticos. Mascotas aseguradas de 3 meses a 9 años de edad. La aceptación está sujeta a las políticas vigentes de la compañía. Para mayor detalle sobre el alcance del seguro y sus exclusiones, consulta las Condiciones Generales del producto."
        }
      ]
    },
    {
      category: "Recomendaciones",
      items: [
        {
          question: "¿Qué recomendaciones debo seguir con mi seguro Mi Mascota?",
          answer: "Revisa la póliza contratada y sus Condiciones Generales para conocer el alcance de la protección (sumas aseguradas, deducible, periodos de espera, coberturas adicionales, entre otros). Verifica la vigencia de la póliza y que los datos de la mascota asegurada sean correctos. Realiza puntualmente el pago de la prima para evitar contratiempos. Registra el expediente de la mascota a través de la app Soy Cliente."
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
              <h1 className="text-4xl font-bold text-[#363636]">Mi Mascota</h1>
            </div>

            <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=256&width=768"
                alt="Seguro Mi Mascota"
                fill
                className="object-cover"
              />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Mi Mascota</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mi Mascota, el seguro que deja huella. Sabemos lo importante que es tu mascota para ti y que forma parte de tu familia. Por eso, te ofrecemos coberturas para proteger a tu perro o gato ante cualquier eventualidad y asistencias para que puedas cuidarlo y consentirlo en todo momento.
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
                    <CardTitle>¿Qué es el seguro para mascotas?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Es un seguro que brinda protección específica para los perros y gatos que forman parte de tu familia, así como respaldo para el dueño de la mascota, con la opción de elegir coberturas y asistencias según sus necesidades.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Beneficios del Seguro Mi Mascota</CardTitle>
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
                    <CardTitle>Coberturas del Seguro Mi Mascota</CardTitle>
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

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Asistencias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {asistencias.map((asistencia, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FE6D0E] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{asistencia}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq">
                {faqsMascota.map((category, index) => (
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
                ¡Cotiza ahora y protege a tu mascota con el seguro Mi Mascota!
              </Button>
            </div>

            <div className="mt-8">
              <PetInsuranceQuoteForm />
            </div>
          </div>
        </main>
      </div>
      <FloatingWhatsAppButton phoneNumber="+52TUNUMERO" />
    </div>
  )
}