import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, Star, 
  Instagram, Facebook, ChevronRight, Utensils, 
  CalendarHeart, Building2, PartyPopper, MessageCircle, CheckCircle, AlertCircle
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes somos', href: '#historia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
  ];

  const especialidades = [
    {
      id: 1,
      name: 'Pasteles Navideños de la Sabana',
      description: 'Nuestra receta secreta de cerdo y pollo, envueltos en hoja de bijao con el auténtico sabor sabanero.',
      price: '$18.000 COP',
      image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&h=600&auto=format&fit=crop',
      tag: '¡Más pedido!'
    },
    {
      id: 2,
      name: 'Pavo Relleno Tradicional',
      description: 'Jugoso pavo horneado lentamente, relleno con carnes frías, ciruelas y especias de la abuela.',
      price: 'Desde $180.000 COP',
      image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=800&h=600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Cerdo al Horno Costeño',
      description: 'Pierna de cerdo horneada a fuego lento con el adobo secreto de la abuela, marinada en naranja agria, ajo y especias sabaneras. Acompañada de su propio jugo.',
      price: 'Desde $150.000 COP',
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&h=600&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Pollo Relleno de la Casa',
      description: 'Pollo deshuesado a mano, relleno de un jugoso guiso de carnes, alcaparras, uvas pasas y verduras frescas. Una receta de tradición familiar que no puede faltar en tu mesa.',
      price: '$95.000 COP',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&h=600&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Paquete Catering Eventos Sociales',
      description: 'Menú completo a tres tiempos. Incluye entrada, plato fuerte, postre y bebida. (Mínimo 20 personas).',
      price: '$45.000 COP / pax',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&h=600&auto=format&fit=crop',
      tag: 'Ideal para bodas'
    }
  ];

  const servicios = [
    {
      icon: <PartyPopper className="w-10 h-10 text-primary" />,
      title: 'Eventos Sociales',
      description: 'Bodas, bautizos, cumpleaños y primeras comuniones. Llevamos el sabor de hogar a tus celebraciones más importantes.'
    },
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      title: 'Catering Empresarial',
      description: 'Refrigerios, almuerzos de trabajo y fiestas de fin de año con la puntualidad y calidad que tu empresa merece.'
    },
    {
      icon: <CalendarHeart className="w-10 h-10 text-primary" />,
      title: 'Eventos Especiales',
      description: 'Menús personalizados para fechas especiales. Nos adaptamos a tus necesidades y presupuesto.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="min-h-screen bg-bg-main font-sans text-text-main">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        {/* Usamos w-full y un padding horizontal más amplio en lugar de 'container' para empujar el logo a la izquierda */}
        <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2">
            {/* Logo container supports PNG with transparent background */}
            <div className="w-10 h-10 flex items-center justify-center bg-transparent">
              <Utensils className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            </div>
            <span className={`font-serif text-[26px] font-bold ${isScrolled ? 'text-text-main' : 'text-white'}`}>
              Delicias
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-[14px] md:text-[16px] uppercase tracking-wider font-bold hover:text-primary transition-colors ${
                      isScrolled ? 'text-text-main' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#contacto"
              className="bg-primary hover:bg-primary-hover text-text-main px-6 py-2.5 rounded font-bold transition-colors shadow-md uppercase tracking-wider text-[14px]"
            >
              Cotiza aquí
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-text-main' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-text-main' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border-subtle absolute w-full shadow-lg"
            >
              <ul className="flex flex-col px-4 py-4 gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block text-[14px] uppercase tracking-wider font-bold text-text-main hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#contacto"
                    className="block text-center bg-primary hover:bg-primary-hover text-text-main px-6 py-3 rounded font-bold mt-2 uppercase tracking-wider text-[14px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cotiza aquí
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section (16:5 aspect ratio optimized for 1920x600) */}
      <section id="inicio" className="relative w-full aspect-[16/9] md:aspect-[16/5] min-h-[500px] flex items-center justify-center overflow-hidden bg-text-main">
        <div className="absolute inset-0 z-0 bg-text-main">
          <img 
            src="https://picsum.photos/seed/catering-hero/1920/600" 
            alt="Mesa de comida tradicional" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-text-main/80 via-text-main/40 to-text-main/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-12 md:mt-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block text-secondary font-bold tracking-widest uppercase mb-4 text-[14px] md:text-[16px]"
          >
            Sabor Sabanero desde 1990
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[32px] md:text-[48px] lg:text-[56px] font-serif font-bold mb-6 max-w-4xl mx-auto leading-tight text-primary drop-shadow-lg"
          >
            Tradición y sabor para tus mejores momentos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[16px] md:text-[18px] text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            Llevamos a tu mesa la auténtica comida típica de la región Caribe. Recetas familiares preparadas con amor y los mejores ingredientes locales.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#contacto" 
              className="bg-primary hover:bg-primary-hover text-text-main px-8 py-4 rounded font-bold text-[16px] transition-colors shadow-lg w-full sm:w-auto uppercase tracking-wider"
            >
              Cotiza tu evento
            </a>
            <a 
              href="#menu" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded font-bold text-[16px] transition-colors w-full sm:w-auto uppercase tracking-wider"
            >
              Menú Navideño
            </a>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="py-20 md:py-24 bg-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                <img 
                  src="https://picsum.photos/seed/familia-cocinando/800/600" 
                  alt="Familia cocinando" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary text-text-main p-8 rounded shadow-lg hidden md:block border border-border-subtle">
                <p className="font-serif text-[32px] font-bold mb-1 text-primary">30+</p>
                <p className="font-bold uppercase tracking-wider text-[14px]">Años de tradición</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-text-main mb-6">
                El secreto está en el amor y la tradición
              </h2>
              <p className="text-[16px] text-text-main mb-6 leading-relaxed">
                Hace más de tres décadas, comenzamos a preparar nuestros famosos pasteles para los vecinos de la sabana. Lo que empezó como una pasión por compartir el sabor de nuestra tierra, hoy es <strong className="font-bold">Delicias</strong>, una empresa familiar dedicada a hacer de tus celebraciones algo inolvidable.
              </p>
              <p className="text-[16px] text-text-main mb-8 leading-relaxed">
                Conservamos celosamente las recetas originales, utilizando ingredientes frescos y técnicas artesanales que garantizan ese sabor "a casa" que tanto nos caracteriza. Puedes conocer más sobre nuestros ingredientes <a href="#contacto" className="text-accent hover:underline font-bold">contactándonos directamente</a>.
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://picsum.photos/seed/firma-delicias/150/50?grayscale" 
                  alt="Firma" 
                  className="h-12 opacity-60 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif italic text-text-main opacity-80">By: Rosario Hoyos De Mulett</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-card-bg border-y border-border-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-[14px]">Lo que hacemos</span>
            <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-text-main mt-2 mb-4">
              Servicios de Catering
            </h2>
            <p className="text-text-main opacity-80 text-[16px]">
              Nos encargamos de la comida para que tú solo te preocupes por disfrutar. Ofrecemos soluciones a medida para cada tipo de evento.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {servicios.map((servicio, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-card-bg-alt p-8 rounded border border-border-subtle hover:shadow-lg transition-shadow group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {servicio.icon}
                </div>
                <h3 className="text-[20px] md:text-[22px] font-serif font-bold text-text-main mb-3">
                  {servicio.title}
                </h3>
                <p className="text-text-main opacity-80 leading-relaxed text-[16px]">
                  {servicio.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Especialidades / Menú Section */}
      <section id="menu" className="py-20 md:py-24 bg-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-widest uppercase text-[14px]">Nuestro Menú</span>
              <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-text-main mt-2 mb-4">
                Nuestras Especialidades
              </h2>
              <p className="text-text-main opacity-80 text-[16px]">
                Descubre los platos que nos han hecho famosos en toda la región. Sabores auténticos, porciones generosas y la mejor calidad.
              </p>
            </div>
            <a href="#contacto" className="hidden md:flex items-center gap-2 text-accent font-bold hover:underline transition-colors uppercase tracking-wider text-[14px]">
              Ver menú completo <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {especialidades.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card-bg rounded border border-border-subtle overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.tag && (
                    <div className="absolute top-4 right-4 bg-secondary text-text-main text-[14px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[20px] md:text-[22px] font-serif font-bold text-text-main mb-2">{item.name}</h3>
                  <p className="text-text-main opacity-80 mb-4 flex-grow text-[16px] leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
                    <span className="font-bold text-primary text-[18px]">{item.price}</span>
                    <a 
                      href={`https://wa.me/573000000000?text=Hola,%20me%20gustaría%20pedir:%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-hover text-text-main px-4 py-2 rounded text-[14px] font-bold transition-colors uppercase tracking-wider"
                    >
                      Pedir ahora
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="#contacto" className="inline-flex items-center gap-2 text-accent font-bold hover:underline transition-colors uppercase tracking-wider text-[14px]">
              Ver menú completo <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios / Galería (1:1 aspect ratio images in a grid) */}
      <section id="galeria" className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-text-main mb-4">
              Momentos Delicias
            </h2>
            <p className="text-text-main opacity-80 text-[16px] max-w-2xl mx-auto">
              "Los pasteles de Delicias son el alma de nuestras navidades. El sabor es inigualable y la atención siempre es impecable." <br/>
              <strong className="font-bold mt-2 block">- Familia Martínez, Sincelejo</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/logo-delicias.png",
              "https://picsum.photos/seed/delicias-evento-2/600/600",
              "https://picsum.photos/seed/delicias-evento-3/600/600",
              "https://picsum.photos/seed/delicias-evento-4/600/600"
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded border border-border-subtle shadow-sm bg-white flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`Galería ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback in case the image is not uploaded yet
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/delicias-evento-${i + 1}/600/600`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto & Cotización */}
      <section id="contacto" className="py-20 md:py-24 bg-card-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Info de contacto */}
            <div className="lg:w-1/3">
              <span className="text-accent font-bold tracking-widest uppercase text-[14px]">Hablemos</span>
              <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-text-main mt-2 mb-6">
                Cotiza tu evento o haz tu pedido
              </h2>
              <p className="text-text-main opacity-80 mb-10 text-[16px]">
                Estamos listos para llevar el mejor sabor a tu mesa. Escríbenos y te responderemos lo más pronto posible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded text-text-main">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-[16px]">WhatsApp / Teléfono</h4>
                    <p className="text-text-main opacity-80 text-[16px]">+57 300 000 0000</p>
                    <p className="text-[14px] text-text-main opacity-60">Lunes a Sábado: 8am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded text-text-main">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-[16px]">Ubicación</h4>
                    <p className="text-text-main opacity-80 text-[16px]">Cl. 29 # 22-24 Corozal, Sucre</p>
                    <p className="text-[14px] text-text-main opacity-60">Envíos a Sincelejo y la sabana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded text-text-main">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-[16px]">Correo Electrónico</h4>
                    <p className="text-text-main opacity-80 text-[16px]">pedidos@delicias.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-bold text-text-main mb-4 text-[16px]">Medios de pago aceptados:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-bg-main border border-border-subtle text-text-main px-3 py-1 rounded text-[14px] font-bold">Nequi</span>
                  <span className="bg-bg-main border border-border-subtle text-text-main px-3 py-1 rounded text-[14px] font-bold">Daviplata</span>
                  <span className="bg-bg-main border border-border-subtle text-text-main px-3 py-1 rounded text-[14px] font-bold">Transferencia</span>
                  <span className="bg-bg-main border border-border-subtle text-text-main px-3 py-1 rounded text-[14px] font-bold">Wompi / ePayco</span>
                  <span className="bg-bg-main border border-border-subtle text-text-main px-3 py-1 rounded text-[14px] font-bold">Efectivo (Corozal)</span>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:w-2/3">
              <div className="bg-card-bg-alt p-8 md:p-10 rounded shadow-md border border-border-subtle">
                <h3 className="text-[20px] md:text-[22px] font-serif font-bold text-text-main mb-6">Solicitud de Cotización</h3>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-[#E8F6EF] border border-success text-success rounded flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <p className="font-bold text-[16px]">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-error-bg border border-error-text text-error-text rounded flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    <p className="font-bold text-[16px]">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">Nombre completo *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" placeholder="Ej. María Pérez" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">Teléfono / WhatsApp *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" placeholder="Ej. 300 123 4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">Correo electrónico *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" placeholder="tucorreo@ejemplo.com" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">Tipo de evento *</label>
                      <select required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]">
                        <option value="">Selecciona una opción</option>
                        <option value="boda">Boda</option>
                        <option value="cumpleanos">Cumpleaños / Fiesta</option>
                        <option value="empresarial">Evento Empresarial</option>
                        <option value="navideno">Pedido Navideño</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">Fecha del evento *</label>
                      <input type="date" required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">Lugar / Ciudad *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" placeholder="Ej. Sincelejo" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-bold text-text-main mb-2">N° de personas *</label>
                      <input type="number" min="1" required className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" placeholder="Ej. 50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-text-main mb-2">Menú de interés (Opcional)</label>
                    <select className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]">
                      <option value="">Selecciona una opción</option>
                      <option value="pasteles">Pasteles Navideños</option>
                      <option value="pavo">Pavo Relleno</option>
                      <option value="cerdo">Cerdo al Horno</option>
                      <option value="pollo">Pollo Relleno</option>
                      <option value="catering">Paquete de Catering Completo</option>
                      <option value="asesoria">Necesito asesoría</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-text-main mb-2">Comentarios o restricciones alimentarias (Opcional)</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-[16px]" placeholder="Cuéntanos más detalles sobre tu evento o si hay invitados con alergias, vegetarianos, etc."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-text-main font-bold py-4 rounded transition-colors shadow-md text-[16px] uppercase tracking-wider">
                    Enviar solicitud de cotización
                  </button>
                  <p className="text-[14px] text-center text-text-main opacity-60 mt-4">
                    Al enviar este formulario, nos pondremos en contacto contigo vía WhatsApp o correo en menos de 24 horas.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-main text-white py-12 border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="w-6 h-6 text-primary" />
                <span className="font-serif text-[26px] font-bold">Delicias</span>
              </div>
              <p className="text-white/70 max-w-sm mb-6 text-[16px]">
                Tradición, sabor y amor en cada plato. Más de 30 años sirviendo a la sabana sucreña y haciendo de tus eventos momentos inolvidables.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-primary hover:text-text-main transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-primary hover:text-text-main transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[18px] mb-4 font-serif text-secondary">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-white/70 text-[16px]">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
                <li><a href="#historia" className="hover:text-primary transition-colors">Nuestra Historia</a></li>
                <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
                <li><a href="#menu" className="hover:text-primary transition-colors">Menú y Especialidades</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[18px] mb-4 font-serif text-secondary">Horario de Atención</h4>
              <ul className="space-y-2 text-white/70 text-[16px]">
                <li>Lunes a Viernes:</li>
                <li className="text-white font-bold">8:00 AM - 6:00 PM</li>
                <li className="mt-2">Sábados:</li>
                <li className="text-white font-bold">8:00 AM - 2:00 PM</li>
                <li className="mt-2 text-[14px] italic">Domingos solo entregas programadas</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-white/50">
            <p>&copy; {new Date().getFullYear()} Catering Delicias. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ en la sabana sucreña</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
