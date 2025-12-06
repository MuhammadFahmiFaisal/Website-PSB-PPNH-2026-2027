import React from 'react';
import { Reveal } from './Reveal';

const Facilities: React.FC = () => {
  const items = [
    { name: "Masjid Jami'", desc: "Pusat kegiatan ibadah dan spiritual.", icon: "mosque", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024510/mesjid_hvmjrp.jpg" },
    { name: "Komplek Pendidikan", desc: "Gedung belajar dengan teknologi modern.", icon: "school", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024511/komplek_pendidikan_arp2bb.jpg" },
    { name: "Lapangan Olahraga", desc: "Sarana pengembangan fisik dan olahraga.", icon: "sports_basketball", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024508/lapangan_vh8dt7.jpg" },
    { name: "Asrama Santri", desc: "Tempat istirahat yang nyaman dan aman.", icon: "bed", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024502/asrama_l0nzza.jpg" },
    { name: "Bale", desc: "Tempat terbuka dengan view pemandangan.", icon: "groups", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024500/bale_fl6glm.jpg" },
    { name: "Kelas", desc: "Ruang untuk Belajar santri.", icon: "health_and_safety", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024506/kelas_ysvwa0.jpg" },
    { name: "Kantin", desc: "Menyediakan aneka jajanan dan kebutuhan.", icon: "storefront", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024503/kantin_eavb1q.jpg" },
    { name: "Aula Serbaguna", desc: "Untuk kegiatan dan acara besar.", icon: "groups", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024505/aula_lxc5yz.jpg" },
    { name: "Kamar Mandi", desc: "Fasilitas kebersihan yang terjaga.", icon: "bathtub", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024499/Kamar_Mandi_kfrhop.jpg" },
    { name: "Bus Sekolah", desc: "Transportasi untuk kegiatan luar sekolah.", icon: "directions_bus", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024499/bus_q1hjym.jpg" },
    { name: "Lemari Baju", desc: "Fasilitas penyimpanan pakaian santri.", icon: "bed", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024504/RAK_BAJU_qmkyhw.jpg" },
    { name: "Air Galon", desc: "Tersedia dispenser untuk minum.", icon: "bed", img: "https://res.cloudinary.com/dhovq374h/image/upload/v1765024500/galon_vvpkil.jpg" },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#f6f6f8] dark:bg-navy-dark transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-20">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy dark:text-white">Fasilitas Unggulan Kami</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto">
              Kami berkomitmen untuk menyediakan fasilitas yang lengkap, modern, dan mendukung untuk menciptakan lingkungan belajar yang nyaman dan kondusif bagi para santri.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} className="h-full" delay={idx * 100}>
              <div className="group bg-white dark:bg-navy rounded-xl shadow-sm border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative overflow-hidden h-40">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md p-2 rounded-full">
                    <span className="material-symbols-outlined text-white">{item.icon}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy dark:text-white text-lg mb-1">{item.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;