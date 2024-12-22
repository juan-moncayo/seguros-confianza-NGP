'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FloatingWhatsAppButton({ phoneNumber = "+52TUNUMERO" }: { phoneNumber?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <Button
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-6 shadow-lg transition-all duration-300 ease-in-out ${
        isHovered ? 'scale-110' : 'scale-100'
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MessageCircle className={`h-8 w-8 transition-all duration-300 ${isHovered ? 'rotate-12' : 'rotate-0'}`} />
      <span className="sr-only">Contact via WhatsApp</span>
    </Button>
  )
}