import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-24 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(10, 25, 47, 0.9) 0%, rgba(19, 164, 174, 0.2) 100%), url('https://res.cloudinary.com/dhovq374h/image/upload/v1765022669/bg_sfc4sd.jpg')`,
      }}
    >
      {/* Glow background */}
      <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-[100px]"></div>

      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 pt-16">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left animate-[fadeIn_1s_ease]">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter sm:text-5xl lg:text-6xl drop-shadow-lg">
              Penerimaan Santri Baru 2025/2026 – SMP Plus & SMK Plus
            </h1>
            <p className="text-white/90 text-base font-normal leading-normal sm:text-lg drop-shadow-md">
              Insya Allah, Nurul Huda… Pilihan Anu Pas Kanggo Masantren
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary text-navy font-bold tracking-[0.015em] sm:w-auto shadow-lg transition-transform hover:scale-105">
              <a href="https://tally.so/r/q4ZZy5" target="_blank">
                Daftar Online (PSB 2025)
              </a>
            </button>

            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-white/10 text-white font-bold border border-white/20 backdrop-blur-sm sm:w-auto transition-transform hover:scale-105 hover:bg-white/20">
              <a href="https://drive.google.com/file/d/1_z8LnOWiOOKtdfAhLZrZKc_FJRWBR7Xk/view" target="_blank">
                Lihat Brosur
              </a>
            </button>

            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 text-white font-bold sm:w-auto transition-transform hover:scale-105 hover:bg-white/10">
              <a href="https://wa.me/6289517374961" target="_blank">
                Hubungi Kami
              </a>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (Floating + Tilt Hover) */}
        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="w-full max-w-md aspect-[2/2] rounded-xl p-2 bg-white/5 backdrop-blur-md shadow-2xl border border-white/10 transition-transform hover:scale-[1.03] hover:rotate-1">
            <div
              className="h-full w-full rounded-lg bg-center bg-no-repeat bg-cover shadow-xl"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dhovq374h/image/upload/v1765022707/model_cjzttz.png')`,
                animation: "float 4s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
