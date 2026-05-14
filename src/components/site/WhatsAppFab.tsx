import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919591745792"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white flex items-center justify-center shadow-glow hover:scale-110 transition-smooth"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
