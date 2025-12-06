import React from 'react';
import { Reveal } from './Reveal';

const AdmissionsInfo: React.FC = () => {
  return (
    <section id="admissions" className="py-20 bg-white dark:bg-navy-dark transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-20">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-4xl font-black text-navy dark:text-white mb-2">Informasi PSB 2025</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Paling Penting</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Jadwal Penting */}
          <Reveal className="h-full" delay={200}>
            <div className="bg-white dark:bg-navy p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Jadwal Penting</h3>
              <div className="flex flex-col gap-0">
                 {[
                   { title: "Gelombang 1", date: "12 – 27 April 2025", icon: "calendar_month", last: false },
                   { title: "Gelombang 2", date: "3 – 18 Mei 2025", icon: "calendar_month", last: false },
                   { title: "Testing", date: "24 Mei 2025", icon: "edit_document", last: false },
                   { title: "Pengumuman", date: "25 Mei 2025", icon: "campaign", last: false },
                   { title: "Pemukiman Santri Baru", date: "7 – 13 Juli 2025", icon: "luggage", last: true },
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className="text-action-blue dark:text-primary bg-blue-50 dark:bg-white/5 p-1 rounded-md mb-2">
                          <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </div>
                        {!item.last && <div className="w-0.5 bg-slate-200 dark:bg-slate-700 flex-grow my-1"></div>}
                      </div>
                      <div className="pb-8">
                        <p className="text-navy dark:text-white font-bold text-lg">{item.title}</p>
                        <p className="text-slate-500 dark:text-slate-400">{item.date}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {/* Syarat */}
            <Reveal delay={400}>
              <div className="bg-white dark:bg-navy p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex-1">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Syarat Pendaftaran</h3>
                <div className="grid gap-6">
                  {[
                    { title: "Kartu Keluarga & Akta Kelahiran", sub: "Fotokopi", icon: "badge" },
                    { title: "Ijazah Terakhir", sub: "Legalisir", icon: "school" },
                    { title: "Pas Foto", sub: "Ukuran 3x4 (2 lembar)", icon: "photo_camera" },
                    { title: "Surat Keterangan Sehat", sub: "Dari dokter atau puskesmas", icon: "description" },
                  ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 text-action-blue dark:text-primary flex items-center justify-center">
                         <span className="material-symbols-outlined">{item.icon}</span>
                       </div>
                       <div>
                         <p className="font-bold text-navy dark:text-white">{item.title}</p>
                         <p className="text-slate-500 dark:text-slate-400 text-sm">{item.sub}</p>
                       </div>
                     </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Materi Testing */}
            <Reveal delay={600}>
              <div className="bg-white dark:bg-navy p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex-1">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Materi Testing</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-action-blue dark:text-primary font-bold mb-2">Lisan / Oral</h4>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 ml-2 space-y-1">
                      <li>Baca Tulis Al-Qur’an</li>
                      <li>Wawancara (Calon Santri & Wali)</li>
                      <li>Bahasa Asing (Arab & Inggris)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-action-blue dark:text-primary font-bold mb-2">Tulisan / Written</h4>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 ml-2 space-y-1">
                      <li>Akademik Mobidu</li>
                      <li>Kejuruan SMK</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

             {/* Teknis */}
             <Reveal delay={800}>
              <div className="bg-white dark:bg-navy p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex-1">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Teknis Testing</h3>
                <div className="space-y-4">
                  {[
                    "Lakukan pembayaran dan konfirmasi.",
                    "Cetak kartu peserta ujian.",
                    "Datang ke lokasi tes sesuai jadwal.",
                    "Ikuti seluruh rangkaian tes dengan tertib."
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-none w-8 h-8 rounded-lg bg-blue-50 dark:bg-white/5 text-action-blue dark:text-primary font-bold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <p className="text-navy dark:text-white font-medium pt-1">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsInfo;