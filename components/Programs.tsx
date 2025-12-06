import React from 'react';
import { Reveal } from './Reveal';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "TK Plus",
      desc: "Fokus pada pendidikan anak usia dini, pembangunan karakter, dan ajaran dasar Islam dalam lingkungan yang menyenangkan.",
      img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765022687/tk_xvfvfy.jpg",
      subtitle: null
    },
    {
      title: "SMP Plus",
      desc: "Mengintegrasikan kurikulum nasional dengan studi Islam yang mendalam untuk pembentukan karakter yang kuat dan cerdas.",
      img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765022572/smp_vk2vbv.jpg",
      subtitle: null
    },
    {
      title: "SMK Plus",
      desc: "Menekankan keterampilan kejuruan untuk tenaga kerja modern, yang didasarkan pada nilai-nilai Islam yang kokoh.",
      img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765022684/smk_korkjn.jpg",
      subtitle: "TEKNIK KOMPUTER & JARINGAN, TATA BUSANA"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white dark:bg-navy-dark transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <Reveal>
          <div className="flex flex-col items-center text-center pb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white">Program Pendidikan Kami</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl text-lg">
              Kami berkomitmen untuk menyediakan pendidikan terpadu dan berkualitas yang menggabungkan keunggulan akademik dengan nilai-nilai Islam yang mendalam.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <Reveal key={idx} className="h-full" delay={idx * 200}>
              <div className="flex flex-col gap-4 bg-white dark:bg-navy rounded-xl shadow-lg border border-slate-100 dark:border-white/10 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 h-full">
                <div 
                  className="w-full aspect-video bg-cover bg-center" 
                  style={{ backgroundImage: `url("${prog.img}")` }}
                ></div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-navy dark:text-white text-xl font-bold">{prog.title}</h3>
                  {prog.subtitle && (
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-1">{prog.subtitle}</p>
                  )}
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 flex-grow leading-relaxed">
                    {prog.desc}
                  </p>
                  <button className="mt-6 flex items-center gap-2 text-action-blue dark:text-primary font-semibold text-sm group">
                    <span>Lihat Kurikulum</span>
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;