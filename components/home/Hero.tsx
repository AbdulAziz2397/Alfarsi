import Image from 'next/image';

export default function Hero(){
  return (
    <section className="relative w-full min-h-[600px] md:h-[80vh] flex items-center justify-center bg-[#0a0c10] overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/path-to-your-pattern.png')] bg-repeat" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* --- CLOCK IMAGE (Left on Desktop, Top on Mobile) --- */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/assets/images/download.webp" // Replace with your image path
              alt="Makkah Clock Inspired by Ka'aba Kiswa"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6">
          <div className="uppercase tracking-[0.2em]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#c5a367] leading-none">
              MAKKAH
            </h1>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-none">
              CLOCK
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base max-w-md leading-relaxed font-light">
            Wall Clock Inspired From Ka’aba Kiswa with Analog and digital synced, 
            Analog with LCD to display Athan time and date, multiple Athan sound 
            (Makkah, Medina, Quds, Egypt and Riyadh)
          </p>

          <button className="mt-4 px-10 py-3 bg-[#b3955a] text-white font-bold rounded-full transition-all duration-300 hover:bg-[#c5a367] hover:scale-105 active:scale-95 shadow-lg uppercase tracking-widest text-sm">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
};