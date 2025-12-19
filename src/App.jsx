import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  Instagram, 
  Send, 
  ArrowUp, 
  ExternalLink, 
  ArrowLeft,
  Award,
  Calendar,
  Image as ImageIcon,
  Maximize2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Sertifikat', href: '#certificates' },
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

  const certificates = [
    { title: "Fundamental SQL Using Select Statement", issuer: "DQLab", image: "/serti-1.jpg", date: "20 Februari 2025" },
    { title: "Guide To Learn SQL With AI At DQLab", issuer: "DQLab", image: "/serti-2.jpg", date: "18 Februari 2025" },
    { title: "Logicodix 2024", issuer: "UNESA", image: "/serti-3.png", date: "Mei 2024" },
    { title: "Pelatihan Cyber Security Awareness", issuer: "SMK TELKOM MALANG", image: "/serti-4.jpg", date: "19 Juni 2024" },
    { title: "Talkshow AMD CLASSROOM", issuer: "AMD RYZEN", image: "/serti-5.jpg", date: "27 September 2024" }
  ];

  return (
    <div className="min-h-screen w-full bg-[#020617] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#020617] to-[#000000] text-white font-['Inter'] selection:bg-indigo-500/30 overflow-x-hidden flex flex-col items-center">

      {/* --- LIGHTBOX MODAL (Fitur Preview Gambar) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 p-2 text-white/50 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm">{selectedImage.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-[1000] transition-all duration-300 px-6 py-4 flex justify-center ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl w-full flex justify-between items-center relative z-[1001]">
          <div className="text-[25px] font-bold tracking-tighter text-white italic">
            Dann Porto<span className="text-indigo-500">.</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide">{link.name}</a>
            ))}
          </div>

          <button className="md:hidden p-3 rounded-xl border border-white/10 bg-[#0f172a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-[#020617] border-b border-white/10 overflow-hidden md:hidden z-[999] pt-24 pb-8"
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-gray-300 hover:text-indigo-500 transition-colors">{link.name}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="w-full max-w-7xl flex flex-col items-center px-6">
        
        {/* --- ABOUT ME --- */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-24 text-center relative w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-300 uppercase italic">not yet Available for Work</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-white">
              Halo, Saya <span className="text-indigo-500">Wildan Ahyan Daffa</span>
            </h1>
            <div className="relative group mb-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full p-1 border-2 border-indigo-500/50 overflow-hidden bg-[#020617] shadow-2xl">
                <img src="/logoProfil.png" alt="Profile Foto" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <h2 className="text-indigo-400 font-semibold tracking-widest text-xs mb-4 uppercase italic">Junior Fullstack Developer</h2>
            <div className="flex gap-8 md:gap-16 mb-12 border-y border-white/5 py-6 w-full max-w-lg justify-center">
              <div className="flex flex-col text-center"><span className="text-2xl md:text-3xl font-black text-white">1+</span><span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Years Exp.</span></div>
              <div className="flex flex-col border-x border-white/10 px-8 md:px-16 text-center"><span className="text-2xl md:text-3xl font-black text-white">2+</span><span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Projects</span></div>
              <div className="flex flex-col text-center"><span className="text-2xl md:text-3xl font-black text-white">5+</span><span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Tech Stack</span></div>
            </div>
            {/* TOMBOL LIHAT PROYEK SAYA - DIUBAH dengan teks tetap putih */}
            <motion.a 
              whileTap={{ scale: 0.95 }} 
              href="#portfolio" 
              className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-gradient-to-r hover:from-purple hover:shadow-purple/30 transition-all duration-500 shadow-lg shadow-indigo-600/30 uppercase tracking-[0.2em] group overflow-hidden"
              
            >
              <span className="text-white relative z-10 flex items-center justify-center gap-2">
                LIHAT PROYEK SAYA
                <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.a>
          </motion.div>
        </section>

        {/* --- SKILLS --- */}
        <section id="skills" className="py-24 w-full flex flex-col items-center border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase text-white italic">Keahlian saya</h2>
            <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase italic tracking-[0.3em]">My Skills Set</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full max-w-6xl">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-indigo-600/10 transition-all border-b-4 hover:border-indigo-500/50 group">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- PORTFOLIO --- */}
        <section id="portfolio" className="py-24 w-full border-t border-white/5 flex flex-col items-center">
          <div className="w-full max-w-4xl flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase italic mb-4">Project</h2>
            <div className="h-1 bg-indigo-600 w-24 rounded-full"></div>
          </div>
          <div className="w-full max-w-2xl">
              <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 group hover:border-indigo-500/30 transition-all shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img src="/image-porto-v1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="work" />
                </div>
                <div className="p-8 text-center md:text-left">
                  <h4 className="text-xl font-bold mb-2">My Portfolio V1</h4>
                  <div className="flex justify-center md:justify-start gap-3 text-[10px] font-bold text-indigo-400 uppercase mb-6">
                    <span className="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">React</span>
                    <span className="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">Tailwind</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed italic">Website portofolio pribadi yang dibangun dengan teknologi modern.</p>
                  {/* TOMBOL LIHAT WEB - DIUBAH dengan teks tetap putih */}
                  <motion.a 
                    whileTap={{ scale: 0.95 }} 
                    href="https://portofolio-wildanahyan.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-white/30 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-500 shadow-lg shadow-indigo-600/20 group/btn overflow-hidden"
                  >
                    <span className="text-white relative z-10 flex items-center gap-2">
                      Lihat Web <ExternalLink size={16} />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"></div>
                  </motion.a>
                </div>
              </div>
          </div>
        </section>

        {/* --- CERTIFICATES (Click to Preview) --- */}
        <section id="certificates" className="py-24 w-full border-t border-white/5 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase text-white italic">Sertifikat</h2>
            <div className="h-1 bg-indigo-600 w-24 rounded-full mx-auto mb-4"></div>
            <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase italic tracking-[0.3em]">Klik untuk memperbesar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {certificates.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(cert)}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Sertifikat+Wildan'; }} 
                  />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-500">
                            <Maximize2 className="text-white" size={24} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Preview</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={16} className="text-indigo-500" />
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{cert.issuer}</span>
                  </div>
                  <h4 className="font-bold text-base text-white mb-4 group-hover:text-indigo-300 transition-colors line-clamp-2 h-12 italic">{cert.title}</h4>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-gray-500 text-[11px] font-bold">
                      <Calendar size={14} />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-24 w-full border-t border-white/5 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase italic">HUBUNGI SAYA</h2>
            <p className="text-gray-400 max-w-md mx-auto italic">Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk mengirim pesan.</p>
          </div>
          <div className="w-full max-w-2xl px-4 flex justify-center">
            <div className="w-full bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 blur-[80px] -z-10 transition-all group-hover:bg-indigo-600/20"></div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Nama Anda" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 outline-none w-full text-white transition-all" />
                  <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 outline-none w-full text-white transition-all" />
                </div>
                <textarea placeholder="Pesan Anda" rows="5" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-indigo-500 outline-none w-full resize-none text-white transition-all"></textarea>
                {/* TOMBOL KIRIM PESAN - DIUBAH dengan teks tetap putih */}
                <motion.button 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black py-5 rounded-2xl overflow-hidden shadow-xl shadow-indigo-600/20 group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 uppercase text-xs md:text-sm tracking-[0.4em] font-extrabold">
                    Kirim Pesan <Send size={18} />
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-[#000000] border-t border-white/5 pt-20 pb-10 px-6 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter text-white italic">Dann Porto<span className="text-indigo-500">.</span></div>
            <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed italic">Membangun solusi digital melalui kode dan desain bermakna.</p>
            <div className="flex gap-4">
              <a href="https://github.com/wildanahyan08-art" target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/Wildan-Prasetyo" target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/_wildanahyndrp/" target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-indigo-400 italic">Navigasi</h4>
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-indigo-400 italic">Punya Ide?</h4>
            <a href="mailto:wildanprasetyo0436@gmail.com" className="group flex items-center gap-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 transition-all hover:border-indigo-500/50">
              <div className="text-center md:text-right">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Mari Bicara</p>
                <p className="text-sm font-bold group-hover:text-indigo-400 transition-colors">Kirim Email Sekarang</p>
              </div>
              <div className="p-2 bg-indigo-600 rounded-lg group-hover:scale-110 transition-transform"><Send size={16} /></div>
            </a>
            {/* TOMBOL BACK TO TOP - DIUBAH dengan teks putih */}
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:text-indigo-300 transition-colors group italic bg-indigo-600/30 hover:bg-indigo-600/40 px-4 py-3 rounded-xl border border-indigo-500/30 backdrop-blur-sm"
            >
              Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="max-w-7xl w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase italic">
          <p>© 2025 WILDAN AHYAN. SEMUA HAK DILINDUNGI.</p>
          <div className="flex gap-8"><span>DESIGNED BY DANN</span><span>BUILT WITH REACT & TAILWIND</span></div>
        </div>
      </footer>
    </div>
  );
};

export default App;