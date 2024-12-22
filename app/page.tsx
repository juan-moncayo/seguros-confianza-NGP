'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Car, Home, Shield, Stethoscope, Phone, Mail, MapPin, Star, CheckCircle, Linkedin, Facebook, MessageCircle, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AppointmentSection from '@/components/formularioCita'
import TestimonialsSection from '@/components/testimonios'
import FloatingWhatsAppButton from '@/components/botonFlotanteWhatsapp'
import ServiceModal, { ServicioType } from '@/components/modal'

const servicios: ServicioType[] = [
  {
    title: 'VIDA, EDUCACIÓN, RETIRO Y AHORRO',
    icon: Shield,
    desc: 'Planificación financiera para tu futuro',
    image: '/educacion-retiro.png?height=1080&width=1920',
    category: 'vida'
  },
  {
    title: 'GASTOS MÉDICOS',
    icon: Stethoscope,
    desc: 'Cobertura completa para tu salud',
    image: '/gastos-medicos.png?height=1080&width=1920',
    category: 'gastosMedicos'
  },
  {
    title: 'AUTO Y MOTO',
    icon: Car,
    desc: 'Te ofrecemos una protección a la medida y beneficios para que protejas tu vehículo y a los que viajan en él.',
    image: '/auto-moto.png',
    category: 'autoMoto'
  },
  {
    title: 'HOGAR',
    icon: Home,
    desc: 'Protege a tu familia y tu patrimonio con un Seguro GNP de acuerdo a tus necesidades.',
    image: '/hogar-mascota.png',
    category: 'hogar'
  }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicios.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicios.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = window.innerWidth >= 768 ? carouselRef.current.offsetWidth / 2 : carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * scrollWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#FE6D0E] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8" />
            <span className="font-serif text-2xl">Seguros Confianza</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-white hover:text-[#363636]">Inicio</Link>
            <Link href="#servicios" className="text-white hover:text-[#363636]">Servicios</Link>
            <Link href="#agente" className="text-white hover:text-[#363636]">Agente</Link>
            <Link href="#agenda-cita" className="text-white hover:text-[#363636]">Agenda Cita</Link>
            <Link href="#testimonios" className="text-white hover:text-[#363636]">Testimonios</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className="bg-white hover:bg-[#363636] text-[#FE6D0E] hover:text-white hidden md:block"
              onClick={() => window.open('https://wa.me/+52TUNUMERO', '_blank')}
            >
              Cotizar
            </Button>
            <button
              className="text-white md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-[#FE6D0E] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          <Link href="#inicio" className="text-white hover:text-[#363636] text-xl" onClick={toggleMenu}>Inicio</Link>
          <Link href="#servicios" className="text-white hover:text-[#363636] text-xl" onClick={toggleMenu}>Servicios</Link>
          <Link href="#agente" className="text-white hover:text-[#363636] text-xl" onClick={toggleMenu}>Agente</Link>
          <Link href="#agenda-cita" className="text-white hover:text-[#363636] text-xl" onClick={toggleMenu}>Agenda Cita</Link>
          <Link href="#testimonios" className="text-white hover:text-[#363636] text-xl" onClick={toggleMenu}>Testimonios</Link>
          <Button
            className="bg-white hover:bg-[#363636] text-[#FE6D0E] hover:text-white"
            onClick={() => {
              window.open('https://wa.me/+52TUNUMERO', '_blank')
              toggleMenu()
            }}
          >
            Cotizar
          </Button>
        </div>
      </div>

      <section id="inicio" className="relative h-[900px] flex items-center justify-center text-white mt-[-80px]">
        <Image
          src="/principal.png?height=900px&width=1600"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#363636]/90 to-[#FE6D0E]/70"></div>
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">Protección personalizada para tu tranquilidad</h1>
            <p className="text-xl mb-8">Más de 20 años brindando seguridad y confianza a familias como la tuya</p>
            <Button size="lg" className="bg-white hover:bg-[#363636] text-[#FE6D0E] hover:text-white">
              Conoce Nuestros Servicios
            </Button>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-4xl mb-4 text-[#363636]">Nuestras Soluciones</h2>
            <p className="text-[#FE6D0E] text-xl">Protección integral diseñada para cada aspecto de tu vida</p>
          </div>
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-hidden scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-2"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Card className="border-none shadow-lg bg-white h-[60vh] md:h-[70vh] relative overflow-hidden group border-2 border-[#FE6D0E]">
                    <ServiceModal servicio={servicio}>
                      <div className="relative w-full h-full cursor-pointer">
                        <Image
                          src={servicio.image}
                          alt={servicio.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <CardContent className="absolute bottom-0 left-0 right-0 p-6 bg-white/80">
                          <div className="flex items-center space-x-2 mb-4">
                            <servicio.icon className="h-8 w-8 text-[#FE6D0E]" />
                            <h3 className="font-serif text-2xl md:text-3xl text-[#363636]">{servicio.title}</h3>
                          </div>
                          <p className="mb-6 text-lg text-[#363636]">{servicio.desc}</p>
                          <Button variant="outline" className="w-full border-[#FE6D0E] text-[#363636] hover:bg-[#363636] hover:text-white">
                            Más Información
                          </Button>
                        </CardContent>
                      </div>
                    </ServiceModal>
                  </Card>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg z-20"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8 text-[#363636]" />
            </Button>
            <Button
              variant="outline"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg z-20"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8 text-[#363636]" />
            </Button>
          </div>
          <div className="flex justify-center mt-6">
            {servicios.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-[#363636]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="agente" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/Perfil.jpeg"
                  alt="Agente de Seguros"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl mb-4 text-[#363636]">Tu Agente de Confianza</h2>
                <p className="text-[#363636] mb-6">
                  Con más de 15 años de experiencia en el sector asegurador, me dedico a encontrar las mejores soluciones
                  para proteger lo que más valoras. Mi compromiso es brindarte un servicio personalizado y profesional.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#FE6D0E]" />
                    <span className="text-[#363636]">Asesoría personalizada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#FE6D0E]" />
                    <span className="text-[#363636]">Atención 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#FE6D0E]" />
                    <span className="text-[#363636]">Soluciones adaptadas a tus necesidades</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://www.facebook.com/santiago.portilloalvarez" target="_blank" rel="noopener noreferrer" className="text-[#FE6D0E] hover:text-[#363636]">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://wa.me/+52TUNUMERO" target="_blank" rel="noopener noreferrer" className="text-[#FE6D0E] hover:text-[#363636]">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/santiago-portillo-b568a224a/" target="_blank" rel="noopener noreferrer" className="text-[#FE6D0E] hover:text-[#363636]">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda-cita">
        <AppointmentSection />
      </section>

      <TestimonialsSection />

      <footer className="bg-[#FE6D0E] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Seguros Confianza</h3>
              <p className="mb-4">Tu seguridad es nuestra prioridad. Contáctanos para una asesoría personalizada.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#363636]">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#363636]">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-white" />
                  <span>+52 123 456 7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-white" />
                  <span>info@segurosconfianza.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-white" />
                  <span>Ciudad de México, México</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-[#363636]">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-[#363636]">Servicios</a></li>
                <li><a href="#agente" className="hover:text-[#363636]">Agente</a></li>
                <li><a href="#agenda-cita" className="hover:text-[#363636]">Agenda Cita</a></li>
                <li><a href="#testimonios" className="hover:text-[#363636]">Testimonios</a></li>
                <li><a href="#" className="hover:text-[#363636]">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 Seguros Confianza. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsAppButton phoneNumber="+52TUNUMERO" />
    </div>
  )
}