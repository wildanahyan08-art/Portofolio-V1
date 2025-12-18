import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, Instagram, Download, Mail, Send, MapPin, Phone, ArrowUp } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];

  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Nest JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "Figma", icon: "https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#020617] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#020617] to-[#000000] text-white font-['Inter'] selection:bg-indigo-500/30 overflow-x-hidden flex flex-col items-center">

      {/* NAVBAR */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 flex justify-center ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl w-full flex justify-between items-center">
          <div className="text-[25px] font-bold tracking-tighter text-white">
            Dann Porto<span className="text-indigo-500">.</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide">{link.name}</a>
            ))}
          </div>

          <button className="md:hidden p-2 bg-white/5 rounded-xl border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-8 flex flex-col items-center gap-6 md:hidden">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">{link.name}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="w-full max-w-7xl flex flex-col items-center px-6">

        {/* SECTION 1: ABOUT ME */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-24 text-center relative w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-300 uppercase">not yet Available for Work</span>
            </div>

            <h2 className="text-indigo-400 font-semibold tracking-widest text-xs mb-4 uppercase">Junior Fullstack Developer</h2>

            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-white">
              Halo, Saya <span className="text-indigo-500">Wildan Ahyan Daffa</span>
            </h1>
            
            <div className="relative group mb-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full p-1 border-2 border-indigo-500/50 overflow-hidden bg-[#020617] shadow-2xl">
                <img src="assets/logoProfil.png" alt="Profile Foto" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>

            <div className="flex gap-8 md:gap-16 mb-12 border-y border-white/5 py-6 w-full max-w-lg justify-center">
              <div className="flex flex-col text-center font-['Inter']">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">1+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Years Exp.</span>
              </div>
              <div className="flex flex-col border-x border-white/10 px-8 md:px-16 text-center">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">2+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Projects</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">5+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Tech Stack</span>
              </div>
            </div>
            
            <a href="#portfolio" className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-white hover:text-[#020617] transition-all shadow-lg shadow-indigo-600/30 uppercase tracking-[0.2em]">
              LIHAT PROYEK SAYA
            </a>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 w-full flex flex-col items-center border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase text-white italic">Keahlian saya</h2>
            <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase italic tracking-[0.3em]">My Skills Set</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full max-w-6xl">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-indigo-600/10 transition-all border-b-4 hover:border-indigo-500/50 group">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-indigo-500/10 shadow-lg" />
                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-24 w-full border-t border-white/5">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase italic">Project</h2>
            <div className="h-0.5 bg-indigo-600 w-16 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 group hover:border-indigo-500/30 transition-all shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="work" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2">Coming Soon</h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">Proyek sedang dalam tahap pengembangan untuk memberikan pengalaman terbaik.</p>
                  <div className="flex gap-3 text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">
                    <span className="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">Coming Soon</span>
                    <span className="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
<section id="contact" className="py-24 w-full border-t border-white/5">
  <div className="flex flex-col items-center mb-16 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase italic">HUBUNGI SAYA</h2>
    <p className="text-gray-400 max-w-md">Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk mengirim pesan.</p>
  </div>

  {/* Container Utama menggunakan flex justify-center agar form berada di tengah */}
  <div className="flex justify-center w-full px-4">
    <div className="w-full max-w-2xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group shadow-2xl">
      {/* Efek cahaya dekoratif di latar belakang form */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 blur-[80px] -z-10 transition-all group-hover:bg-indigo-600/20"></div>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Nama Anda" 
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all w-full focus:bg-indigo-500/5 placeholder:text-gray-600" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all w-full focus:bg-indigo-500/5 placeholder:text-gray-600" 
          />
        </div>
        
        <input 
          type="text" 
          placeholder="Subjek" 
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all w-full focus:bg-indigo-500/5 placeholder:text-gray-600" 
        />
        
        <textarea 
          placeholder="Pesan Anda" 
          rows="5" 
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all w-full resize-none focus:bg-indigo-500/5 placeholder:text-gray-600"
        ></textarea>

        {/* Tombol Kirim Pesan yang Dipercantik */}
        <button 
          type="submit" 
          className="group relative w-full bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 font-black py-5 rounded-2xl transition-all duration-500 overflow-hidden"
        >
          {/* Layer gradient hover */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <span className="flex items-center justify-center gap-3 uppercase text-xs md:text-sm tracking-[0.4em] font-extrabold transition-all duration-300 group-hover:scale-105">
            Kirim Pesan 
            <Send size={18} className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12" />
          </span>
        </button>
      </form>
    </div>
  </div>
</section>
      </main>

      {/* --- FOOTER (PERBAIKAN TOTAL) --- */}
      <footer className="w-full bg-[#000000] border-t border-white/5 pt-20 pb-10 px-6 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Kolom 1: Brand Info */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter text-white">
              Dann Porto<span className="text-indigo-500">.</span>
            </div>
            <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed italic">
              Membangun solusi digital melalui kode dan desain yang bermakna. Berlokasi di Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/wildanahyan08-art" className="p-2.5 bg-white/5 rounded-lg border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all text-gray-400 hover:text-white">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/Wildan-Prasetyo" className="p-2.5 bg-white/5 rounded-lg border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all text-gray-400 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/_wildanahyndrp/" className="p-2.5 bg-white/5 rounded-lg border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all text-gray-400 hover:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-indigo-400">Navigasi</h4>
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 3: Call to Action */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-indigo-400">Punya Ide?</h4>
            <a href="mailto:wildanprasetyo0436@gmail.com" className="group flex items-center gap-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all">
              <div className="text-center md:text-right">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Mari Bicara</p>
                <p className="text-sm font-bold group-hover:text-indigo-400 transition-colors">Kirim Email Sekarang</p>
              </div>
              <div className="p-2 bg-indigo-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-indigo-600/20">
                <Send size={16} />
              </div>
            </a>
            
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-white transition-colors group">
              Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            © 2025 WILDAN AHYAN. SEMUA HAK DILINDUNGI.
          </p>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-gray-600">
            <span className="cursor-default">DESIGNED BY DANN</span>
            <span className="cursor-default">BUILT WITH REACT & TAILWIND</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;