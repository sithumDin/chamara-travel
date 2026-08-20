"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site-config";
import { fireWhatsAppConversion } from "@/lib/tracking";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi! I'd like to know more about a Sri Lanka tour.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => fireWhatsAppConversion()}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="size-7" aria-hidden="true" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
