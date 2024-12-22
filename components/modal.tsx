'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export interface ServicioType {
  title: string
  icon: LucideIcon
  desc: string
  image: string
  category: 'vida' | 'gastosMedicos' | 'autoMoto' | 'hogar'
}

interface ServiceModalProps {
  servicio: ServicioType
  children: React.ReactNode
}

export default function ServiceModal({ servicio, children }: ServiceModalProps) {
  const servicioLinks = {
    vida: [
      { title: 'Seguro de Vida', href: '/seguros/vida' },
      { title: 'Seguro Educativo', href: '/seguros/educacion' },
      { title: 'Plan de Retiro', href: '/seguros/retiro' },
      { title: 'Ahorro e Inversión', href: '/seguros/ahorro' },
    ],
    gastosMedicos: [
      { title: 'Seguro de Gastos Médicos Mayores', href: '/seguros-medicos/gastos-medicos-mayores' },
      { title: 'Seguro de Accidentes Personales', href: '/seguros-medicos/accidentes-personales' },
      { title: 'Seguro Dental', href: '/seguros-medicos/dental' },
      { title: 'Seguro de Enfermedades Graves', href: '/seguros-medicos/enfermedades-graves' },
    ],
    autoMoto: [
      { title: 'Seguro de Auto y Camioneta', href: '/seguros/auto' },
      { title: 'Auto Elite', href: '/seguros/auto-elite' },
      { title: 'Seguro Básico Estandarizado de Automóviles', href: '/seguros/auto-basico' },
      { title: 'Seguro de Responsabilidad Civil', href: '/seguros/responsabilidad-civil' },
      { title: 'Chofer Privado', href: '/seguros/chofer' },
      { title: 'Beneficios', href: '/seguros/auto-beneficios' },
      { title: 'Seguro de Camiones, Tractocamiones y vehículos de mensajería y reparto', href: '/seguros/camiones' },
      { title: 'Seguro de Motos', href: '/seguros/motos' },
    ],
     hogar: [
      { title: 'Mis dispositivos', href: '/seguros-hogar/mis-dispositivos' },
      { title: 'Mi mascota', href: '/seguros-hogar/mi-mascota' },
      { title: 'Seguro de Hogar', href: '/seguros-hogar/seguro-hogar' },
      { title: 'Multidispositivos', href: '/seguros-hogar/multidispositivos' },
      { title: 'Riesgos Naturales - Huracán', href: '/seguros-hogar/riesgos-naturales-huracan' },
      { title: 'Condominios - Áreas comunes', href: '/seguros-hogar/condominios-areas-comunes' },
    ]
  } as const

  // Safely get links for the current category
  const links = servicioLinks[servicio.category] || []

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] border-2 border-[#FE6D0E]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <servicio.icon className="h-6 w-6 text-[#FE6D0E]" />
            {servicio.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src={servicio.image}
              alt={servicio.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="text-base text-gray-600">
            {servicio.desc}
          </p>
          <div className="mt-6 space-y-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center gap-2 text-[#FE6D0E] hover:text-[#363636] transition-colors"
              >
                <ChevronRight className="h-5 w-5 flex-shrink-0" />
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
          <Button className="mt-6 w-full bg-[#FE6D0E] hover:bg-[#363636] text-white">
            Solicitar Cotización
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}