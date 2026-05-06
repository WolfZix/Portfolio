import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        'service_edxkhpc',
        'template_2amwhzk',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'l5q30Olpbs1RGSc12'
      );

      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Kontakt
            </span>

            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-foreground mb-6">
              Zbudujmy coś razem.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mb-10">
              Gotowy na start? Napisz nam o swoim biznesie, a odezwiemy się w ciągu 24 godzin.
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>patryk.domaszek41@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-6" />

                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                  Wiadomość wysłana!
                </h3>

                <p className="text-muted-foreground text-sm max-w-xs">
                  Dziękujemy za kontakt. Odpiszemy w ciągu 24 godzin.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-primary text-sm font-bold uppercase tracking-wider hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="Imię i nazwisko"
                />

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="Twój Email"
                />

                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground resize-none focus:outline-none focus:border-primary"
                  placeholder="Wiadomość"
                />

                {error && (
                  <p className="text-red-500 text-sm">
                    Coś poszło nie tak. Spróbuj ponownie.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Rozpocznij projekt
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}