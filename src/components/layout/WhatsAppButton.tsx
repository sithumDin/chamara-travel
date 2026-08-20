"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, whatsappLink } from "@/data/site-config";
import { fireWhatsAppConversion } from "@/lib/tracking";

const quickQuestions = [
  "What tour packages do you offer?",
  "What is the best time to visit Sri Lanka?",
  "How much does a tour cost?",
  "Do you offer custom tours?",
  "Do you offer airport pick-up?",
  "Is it safe to travel with a private driver-guide?",
];

function openWhatsApp(message: string) {
  fireWhatsAppConversion();
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function handleSend() {
    const trimmed = message.trim();
    if (!trimmed) return;
    openWhatsApp(trimmed);
    setMessage("");
    setOpen(false);
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-label={`Chat with ${siteConfig.shortName} on WhatsApp`}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-40 flex w-[min(19rem,calc(100vw-2.5rem))] max-h-[min(26rem,calc(100vh-7rem))] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-black/20 sm:bottom-28 sm:right-7"
          >
            <div className="flex shrink-0 items-start justify-between gap-3 bg-[#25D366] px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">{siteConfig.shortName}</p>
                <p className="text-xs text-white/85">We usually reply in minutes</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="size-4.5" aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto bg-[#f5f2eb] px-3 py-3">
              <div className="rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-xs leading-relaxed text-ink shadow-sm">
                👋 Hi! Welcome to {siteConfig.shortName}. How can we help you?
              </div>

              <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-muted">
                Popular questions
              </p>
              <div className="mt-1.5 flex flex-col gap-1.5">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => openWhatsApp(question)}
                    className="rounded-lg border border-border bg-white px-3 py-2 text-left text-xs font-medium text-accent-deep transition-colors hover:bg-accent/5"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 border-t border-border bg-white px-2.5 py-2.5">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSend();
                }}
                placeholder="Type your message..."
                className="min-w-0 flex-1 rounded-full border border-border bg-paper px-3.5 py-2 text-xs text-ink placeholder:text-muted-light focus:border-accent focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!message.trim()}
                aria-label="Send message on WhatsApp"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-40"
              >
                <Send className="size-4" aria-hidden="true" />
              </button>
            </div>

            <p className="flex shrink-0 items-center justify-center gap-1.5 bg-[#f5f2eb] py-1.5 text-[11px] text-muted">
              <MessageCircle className="size-3 text-[#25D366]" aria-hidden="true" fill="currentColor" strokeWidth={0} />
              Powered by WhatsApp
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-7" aria-hidden="true" fill="currentColor" strokeWidth={0} />
        )}
      </button>
    </>
  );
}
