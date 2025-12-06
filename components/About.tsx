import React from 'react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f8f9fa] dark:bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col max-w-6xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-navy dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                Mengenal Nurul Huda Malati
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 max-w-3xl mx-auto">
                Menyelami perjalanan, kepemimpinan, dan nilai-nilai yang membentuk institusi pendidikan Islam unggulan kami.
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="flex flex-col mb-16 relative">
            <Reveal delay={200}>
              <h3 className="text-navy dark:text-white text-2xl font-bold text-center mb-2">Sejarah Kami (Our History)</h3>
              <p className="text-center text-slate-600 mb-12">Dari awal yang sederhana hingga menjadi pusat keilmuan yang dihormati.</p>
            </Reveal>
            
            <div className="relative w-full">
               {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold -translate-y-1/2 z-0 hidden md:block"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative z-10">
                {/* Item 1 */}
                <Reveal className="flex flex-col items-center w-full md:w-1/3 bg-[#f8f9fa] md:bg-transparent p-4 md:p-0 rounded-lg" delay={300}>
                  <div className="w-12 h-12 rounded-full border-2 border-gold bg-[#f8f9fa] flex items-center justify-center text-navy mb-4 z-10 relative shadow-sm">
                    <span className="material-symbols-outlined text-2xl">flag</span>
                  </div>
                  <div className="text-center">
                    <p className="text-navy font-semibold text-lg">Pendirian</p>
                    <p className="text-gold text-xl font-bold">1992</p>
                    <p className="text-slate-600 text-sm mt-2 max-w-xs mx-auto">Didirikan dengan visi untuk menciptakan generasi yang berilmu dan berakhlak mulia.</p>
                  </div>
                </Reveal>

                {/* Item 2 */}
                <Reveal className="flex flex-col items-center w-full md:w-1/3 bg-[#f8f9fa] md:bg-transparent p-4 md:p-0 rounded-lg" delay={500}>
                  <div className="w-12 h-12 rounded-full border-2 border-gold bg-[#f8f9fa] flex items-center justify-center text-navy mb-4 z-10 relative shadow-sm">
                    <span className="material-symbols-outlined text-2xl">school</span>
                  </div>
                  <div className="text-center">
                    <p className="text-navy font-semibold text-lg">Perkembangan</p>
                    <p className="text-gold text-xl font-bold">2000-an</p>
                    <p className="text-slate-600 text-sm mt-2 max-w-xs mx-auto">Memperluas kurikulum dan fasilitas untuk menjawab tantangan zaman modern.</p>
                  </div>
                </Reveal>

                {/* Item 3 */}
                <Reveal className="flex flex-col items-center w-full md:w-1/3 bg-[#f8f9fa] md:bg-transparent p-4 md:p-0 rounded-lg" delay={700}>
                  <div className="w-12 h-12 rounded-full border-2 border-gold bg-[#f8f9fa] flex items-center justify-center text-navy mb-4 z-10 relative shadow-sm">
                    <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                  </div>
                  <div className="text-center">
                    <p className="text-navy font-semibold text-lg">Masa Kini</p>
                    <p className="text-gold text-xl font-bold">Sekarang</p>
                    <p className="text-slate-600 text-sm mt-2 max-w-xs mx-auto">Diakui sebagai institusi terkemuka dengan program kolaborasi unggulan.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leadership */}
            <Reveal className="h-full" delay={200}>
              <div className="bg-white/60 dark:bg-navy/50 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-glass hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/20 p-3 rounded-full text-gold">
                    <span className="material-symbols-outlined text-3xl">groups</span>
                  </div>
                  <h3 className="text-navy dark:text-white text-xl font-bold">Kepemimpinan (Leadership)</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Dipimpin oleh para ulama dan akademisi yang berdedikasi untuk membimbing santri dengan kearifan dan visi modern.</p>
                <div className="mt-6 flex -space-x-4">
                  {[
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022616/Pak_aa_xdctke.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022556/pak_burhan_yvarui.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022616/ajengan_agus_ktkvd8.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022583/mang_opik_jq7fno.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022600/mang_ubad_u2aboz.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022599/h._ali_zrm9fn.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022658/Ust._Muhsin_qgdwzx.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022568/a_haji_fmvk27.jpg",
                    "https://res.cloudinary.com/dhovq374h/image/upload/v1765022670/pangersa_kwye9c.jpg"
                  ].map((src, i) => (
                    <img key={i} className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover" src={src} alt="Leader" />
                  ))}
                </div>
              </div>
            </Reveal>

             {/* Paradigma */}
             <Reveal className="h-full" delay={400}>
              <div className="bg-white/60 dark:bg-navy/50 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-glass hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/20 p-3 rounded-full text-gold">
                    <span className="material-symbols-outlined text-3xl">menu_book</span>
                  </div>
                  <h3 className="text-navy dark:text-white text-xl font-bold">Paradigma Salafiyah</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Kurikulum kami berlandaskan pada pengkajian Kitab Kuning, memastikan pemahaman mendalam tentang ilmu-ilmu Islam klasik.</p>
              </div>
            </Reveal>

            {/* Kolaborasi */}
            <Reveal className="h-full" delay={200}>
              <div className="bg-white/60 dark:bg-navy/50 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-glass hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/20 p-3 rounded-full text-gold">
                    <span className="material-symbols-outlined text-3xl">handshake</span>
                  </div>
                  <h3 className="text-navy dark:text-white text-xl font-bold">Kolaborasi Unggulan</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Program seperti LDKS dan Bela Negara bersama Rindam III Siliwangi membentuk karakter kepemimpinan dan cinta tanah air.</p>
              </div>
            </Reveal>

             {/* Lokasi */}
            <Reveal className="h-full" delay={400}>
              <div className="bg-white/60 dark:bg-navy/50 backdrop-blur-sm border border-white/50 rounded-xl p-6 shadow-glass hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/20 p-3 rounded-full text-gold">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <h3 className="text-navy dark:text-white text-xl font-bold">Lokasi Strategis</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Terletak di lingkungan yang asri dan kondusif untuk belajar, dekat dengan kawasan wisata Darajat yang menenangkan.
                </p>

                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1373502755046!2d107.812765673572!3d-7.22517049278081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68bae12ee2704d%3A0xdec2bf66d196537f!2sPondok%20Pesantren%20Nurul%20Huda%20Malati%20Garut!5e0!3m2!1sen!2sus!4v1764918434198!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Reveal>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;