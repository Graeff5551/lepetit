import { 
  Phone, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Scissors, 
  Activity, 
  Microscope, 
  Syringe,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5551991153263";

  return (
    <div className="min-h-screen selection:bg-brand-pink/20 selection:text-brand-pink">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1hc9gMi3gUheJP8E62_QzQ9zwiH-_U9pk" 
              alt="Le Petit Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Início', 'Diferenciais', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium hover:text-brand-pink transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={whatsappLink}
              className="bg-brand-pink text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-brand-pink/90 transition-all hover:scale-105 shadow-lg shadow-brand-pink/20"
            >
              <Phone size={16} />
              Plantão 24h
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {['Início', 'Diferenciais', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-brand-cyan"
                >
                  {item}
                </a>
              ))}
              <a 
                href={whatsappLink}
                className="mt-4 bg-brand-pink text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Plantão 24h
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Organic Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-cyan/5 rounded-bl-[100px] hidden md:block" />
        <div className="absolute -top-20 -left-20 -z-10 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink rounded-full text-sm font-bold">
                <Clock size={16} />
                Atendimento 24 Horas em Tramandaí
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-brand-cyan">
                Quando seu pet precisa, a <span className="text-brand-pink">Le Petit</span> está aqui!
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                Cuidamos de quem você ama com medicina veterinária de ponta e o acolhimento que sua família merece. Estrutura completa para urgências e cuidados preventivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLink}
                  className="bg-brand-pink text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-pink/90 transition-all hover:-translate-y-1 shadow-xl shadow-brand-pink/30"
                >
                  <MessageCircle size={24} />
                  Agendar via WhatsApp
                </a>
                <a 
                  href="#serviços"
                  className="bg-white border-2 border-brand-cyan/20 text-brand-cyan px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-cyan/5 transition-all"
                >
                  Ver Serviços
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative animate-fade-up delay-200">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/d/1-TIex1yrAzVOo5Smv-f6gywvf71jFDGu" 
                  alt="Le Petit Centro Clínico" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Segurança</p>
                  <p className="font-display font-bold text-brand-cyan">Equipe Especializada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais (Bento Grid) */}
      <section id="diferenciais" className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cyan">Por que escolher a Le Petit?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Mais que uma clínica, um centro de excelência focado no bem-estar animal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Bento Item 1 */}
            <div className="md:col-span-2 md:row-span-2 bg-brand-cyan text-white p-10 rounded-[40px] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Clock size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Atendimento 24h</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Emergências não têm hora. Nossa equipe está de prontidão todos os dias do ano, garantindo socorro imediato quando seu pet mais precisa.
                </p>
              </div>
              <button className="mt-8 flex items-center gap-2 font-bold text-white/90 hover:text-white transition-colors">
                Saiba mais <ChevronRight size={20} />
              </button>
            </div>

            {/* Bento Item 2 */}
            <div className="md:col-span-2 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-8 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-brand-pink/10 text-brand-pink rounded-3xl flex items-center justify-center shrink-0">
                <Heart size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-cyan mb-2">Ambientes Separados</h3>
                <p className="text-slate-500">Consultórios e internações exclusivas para cães e gatos, reduzindo o estresse do seu pet.</p>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-cyan/10 text-brand-cyan rounded-2xl flex items-center justify-center mb-4">
                <Activity size={28} />
              </div>
              <h3 className="text-lg font-bold text-brand-cyan mb-2">Estrutura Moderna</h3>
              <p className="text-sm text-slate-500">Equipamentos de última geração para diagnósticos precisos.</p>
            </div>

            {/* Bento Item 4 */}
            <div className="bg-brand-pink text-white p-8 rounded-[40px] flex flex-col justify-center hover:scale-[1.02] transition-transform">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">Equipe Especializada</h3>
              <p className="text-sm text-white/80">Veterinários em constante atualização técnica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="serviços" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cyan">Nossos Serviços</h2>
              <p className="text-slate-500 max-w-xl">Cuidado completo, do check-up preventivo à cirurgia complexa.</p>
            </div>
            <a href={whatsappLink} className="text-brand-pink font-bold flex items-center gap-2 hover:underline">
              Ver todos os serviços <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Consultas e Especialidades", 
                desc: "Clínica geral e especialistas em diversas áreas para um diagnóstico assertivo.",
                icon: <Stethoscope />,
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Cirurgias e Internação", 
                desc: "Bloco cirúrgico equipado e monitoramento 24h para recuperação segura.",
                icon: <Activity />,
                color: "bg-red-50 text-red-600",
                featured: true
              },
              { 
                title: "Exames Laboratoriais", 
                desc: "Laboratório próprio para resultados rápidos em casos de urgência.",
                icon: <Microscope />,
                color: "bg-purple-50 text-purple-600"
              },
              { 
                title: "Banho e Tosa Premium", 
                desc: "Estética animal com produtos de alta qualidade e profissionais carinhosos.",
                icon: <Scissors />,
                color: "bg-pink-50 text-brand-pink"
              },
              { 
                title: "Vacinação e Check-up", 
                desc: "Prevenção é o melhor remédio. Mantenha a carteirinha do seu pet em dia.",
                icon: <Syringe />,
                color: "bg-emerald-50 text-emerald-600"
              },
              { 
                title: "Fisioterapia Veterinária", 
                desc: "Reabilitação e alívio de dor para melhorar a qualidade de vida do seu pet.",
                icon: <Heart />,
                color: "bg-orange-50 text-orange-600"
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className={`group p-8 rounded-[32px] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 ${service.featured ? 'bg-brand-cyan/5 border-brand-cyan/10' : 'bg-white'}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-cyan mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <a href={whatsappLink} className="inline-flex items-center gap-2 font-bold text-brand-cyan/60 group-hover:text-brand-pink transition-colors">
                  Saber mais <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-24 bg-brand-cyan relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://instagram.fpoa39-1.fna.fbcdn.net/v/t51.82787-15/589732793_18546922792029682_4151606710274835411_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc5MTM1NTUyNDQzMjg4OTI5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=3bSm-cy0kPwQ7kNvwE_Ggdc&_nc_oc=AdqGywaWi7HQfskiWDGGRDeqmQlfTHOhFltzikL12VD3lKmZWiMR_2Mk_OEPHeJXWJk060_fPD6z84gz8iw1iv7m&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpoa39-1.fna&_nc_gid=g_wAu-Mr0sYvApJXSB02fA&_nc_ss=7a32e&oh=00_AfyS4noz8NqNZl7HSk80tA7oftj7HNn3qXMY_5763PvRYw&oe=69C51DCF" 
                  alt="Equipe Le Petit" 
                  className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-brand-pink p-8 rounded-3xl text-white text-center">
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-sm font-medium opacity-80">Anos de Experiência</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-white text-center border border-white/10">
                  <p className="text-4xl font-bold mb-1">5k+</p>
                  <p className="text-sm font-medium opacity-80">Pets Atendidos</p>
                </div>
                <img 
                  src="https://instagram.fpoa35-1.fna.fbcdn.net/v/t51.82787-15/602714089_18549099724024431_6613887998791890938_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzc5MTMzOTgzMjkyMTI2MzgzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=AYrnCBJzCHEQ7kNvwGDbRyT&_nc_oc=Adp-dh3litxbF8cGat3IDoI6_Hiq1XuyAS17nS8Cy6JVWLU4c3ZH8q-akwFC6fLp0t-dOPVvgIBNv6RghaONq2dT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpoa35-1.fna&_nc_gid=g_wAu-Mr0sYvApJXSB02fA&_nc_ss=7a32e&oh=00_AfyQoZ-jYCBA-wg0pvN6gVO1g10GFD4xYuCb3-eQLfZeoQ&oe=69C51970" 
                  alt="Clínica Le Petit" 
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex-1 text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Cuidar como Família</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                A Le Petit nasceu em Tramandaí com um propósito claro: elevar o padrão do atendimento veterinário no Litoral Norte gaúcho. Entendemos que seu pet não é apenas um animal, mas um membro vital da sua família.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Nossa história é construída sobre pilares de ética, inovação constante e, acima de tudo, um amor incondicional pela vida. Aqui, cada paciente é tratado com o respeito e a dedicação que dedicaríamos aos nossos próprios companheiros.
              </p>
              <div className="pt-4">
                <a 
                  href={whatsappLink}
                  className="bg-white text-brand-cyan px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:bg-brand-pink hover:text-white transition-all shadow-xl shadow-black/10"
                >
                  Conheça nossa equipe
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-cyan mb-4">O que dizem os tutores</h2>
            <div className="flex justify-center gap-1 text-brand-pink">
              {[...Array(5)].map((_, i) => <Heart key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                pet: "Tutor da Luna (Golden Retriever)",
                text: "O atendimento 24h salvou a vida da Luna. Chegamos desesperados de madrugada e fomos acolhidos com uma calma e profissionalismo admiráveis."
              },
              {
                name: "Ricardo Santos",
                pet: "Tutor do Oliver (Gato Persa)",
                text: "Adoro o fato de terem ambientes separados para gatos. O Oliver fica muito mais tranquilo durante as consultas. Equipe nota 10!"
              },
              {
                name: "Carla Oliveira",
                pet: "Tutora da Mel (SRD)",
                text: "Melhor clínica de Tramandaí. Faço o check-up anual da Mel aqui há 3 anos e sempre sou muito bem atendida. Recomendo de olhos fechados."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 italic text-slate-600 relative">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center text-white">
                  <Heart size={16} fill="currentColor" />
                </div>
                <p className="mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="not-italic">
                  <p className="font-bold text-brand-cyan">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé / Contato */}
      <footer id="contato" className="bg-slate-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold">Estamos prontos para te receber</h2>
                <p className="text-slate-400 text-lg">Visite nossa clínica em Tramandaí ou entre em contato agora mesmo.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-cyan/20 text-brand-cyan rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Endereço</p>
                    <p className="text-slate-400">Av. Emancipação, 1521 – Tramandaí, RS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-pink/20 text-brand-pink rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">WhatsApp</p>
                    <p className="text-slate-400">(51) 99115-3263</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Horário</p>
                    <p className="text-slate-400">Aberto 24 horas por dia, 7 dias por semana.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-pink transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-cyan transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <div className="h-[400px] md:h-full min-h-[400px] rounded-[40px] overflow-hidden bg-slate-800 relative group">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white text-slate-900 p-6 rounded-3xl shadow-2xl text-center max-w-xs animate-fade-up">
                  <MapPin size={32} className="mx-auto mb-4 text-brand-pink" />
                  <p className="font-bold mb-2">Le Petit Tramandaí</p>
                  <p className="text-sm text-slate-500 mb-4">Av. Emancipação, 1521</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-cyan text-white px-6 py-2 rounded-xl text-sm font-bold block"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© 2026 Le Petit Centro Clínico Veterinário. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
