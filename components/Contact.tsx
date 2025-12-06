import React, { useState } from 'react';
import { Reveal } from './Reveal';
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      message: formData.get("message") as string,
    };

    try {
      await emailjs.send(
        "service_zflha1r",        
        "template_9bmaimk",       
        templateParams,
        "GC-o7ot9kasAuRWCc"       
      );

      setFormStatus("success");
      form.reset();

      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Email gagal terkirim:", error);
      setFormStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy-dark transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy dark:text-white mb-3">Hubungi Kami</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Kami siap membantu Anda. Silakan hubungi kami melalui informasi kontak di bawah ini, kirim pertanyaan, atau kunjungi lokasi kami.
            </p>
          </div>
        </Reveal>

        {/* Map */}
        <Reveal delay={200}>
          <div className="w-full aspect-[16/6] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 mb-12 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact Info */}
          <Reveal delay={400} className="h-full">
            <div className="bg-slate-50 dark:bg-navy h-full rounded-xl border border-slate-200 dark:border-white/10 shadow-lg p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Informasi Kontak</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-white/5 flex items-center justify-center text-action-blue dark:text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Telepon / WhatsApp</p>
                      <p className="text-navy dark:text-white font-medium text-lg">0822-5873-9084</p>
                      <p className="text-navy dark:text-white font-medium text-lg">0823-1726-7936</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-white/5 flex items-center justify-center text-action-blue dark:text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Instagram</p>
                      <p className="text-navy dark:text-white font-medium text-lg">@nurulhudamalati1992</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-white/5 flex items-center justify-center text-action-blue dark:text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                      <p className="text-navy dark:text-white font-medium text-lg">kontak@nurulhudamalati.sch.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a href="https://wa.me/6289517374961" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#20bd5a] transition-colors shadow-md">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.75 13.96c..."></path>
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a href="https://tally.so/r/q4ZZy5" className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-navy dark:text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-50 dark:hover:bg-white/20 transition-colors shadow-sm">
                  <span className="material-symbols-outlined">description</span>
                  <span>Formulir PSB</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={600} className="h-full">
            <div className="bg-white dark:bg-navy h-full rounded-xl border border-slate-200 dark:border-white/10 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Ajukan Pertanyaan</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-dark border border-slate-200 dark:border-white/10 text-navy dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email / No. WhatsApp</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-dark border border-slate-200 dark:border-white/10 text-navy dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Pertanyaan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-dark border border-slate-200 dark:border-white/10 text-navy dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 ${
                    formStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-action-blue hover:bg-blue-700 dark:bg-primary dark:text-navy dark:hover:bg-primary-dark'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Mengirim...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <span className="material-symbols-outlined">check</span>
                      <span>Terkirim!</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
