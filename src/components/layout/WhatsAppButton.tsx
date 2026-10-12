import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../data/institutionalData';

export function WhatsAppButton() {
  return (
    <a href={whatsappLink('Olá! Gostaria de falar com um consultor da SOCON.')} target="_blank" rel="noopener noreferrer"
      aria-label="Falar com a SOCON no WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-leaf text-ink shadow-lg transition-transform duration-200 hover:scale-110">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
