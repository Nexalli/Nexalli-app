
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { TRAINING_OFFERS, COLORS, SOCIAL_LINKS } from './constants';
import Navbar from './components/Navbar';
import Card from './components/Card';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const contactEmail = "nbynexalli@gmail.com";

  const openWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Bonjour NEXALLI, je souhaite obtenir des informations concernant : ${service}`);
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="py-20 bg-black text-white rounded-3xl px-8 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a24d] opacity-10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
                    L'élite de la <span className="text-[#c9a24d]">création</span> digitale.
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                    NEXALLI fusionne stratégie de pointe et design 3D haute fidélité pour propulser votre marque dans une nouvelle dimension de succès.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setCurrentPage(Page.Services)}
                      className="bg-[#c9a24d] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105"
                    >
                      Nos Services Premium
                    </button>
                    <button 
                      onClick={() => setCurrentPage(Page.Contact)}
                      className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all"
                    >
                      Parlons de votre projet
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" 
                    alt="Abstract 3D Digital Art" 
                    className="rounded-3xl shadow-2xl border border-white/10 hover:rotate-2 transition-transform duration-500"
                  />
                </div>
              </div>
            </section>

            {/* Direct Access Categories with 3D Visuals */}
            <section className="mb-16">
              <h3 className="text-3xl font-black mb-8 text-center uppercase tracking-tighter">Explorer nos univers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Web & Tech", page: Page.WebDev, img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop", icon: "fa-code" },
                  { title: "Branding 3D", page: Page.Branding, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", icon: "fa-pen-nib" },
                  { title: "Formations", page: Page.Training, img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop", icon: "fa-graduation-cap" },
                  { title: "Événements", page: Page.Events, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", icon: "fa-crown" }
                ].map((cat, i) => (
                  <div 
                    key={i}
                    onClick={() => setCurrentPage(cat.page)}
                    className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[#c9a24d]/20 transition-all border border-gray-100"
                  >
                    <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-10 h-10 bg-[#c9a24d] rounded-lg flex items-center justify-center text-black mb-3 group-hover:scale-110 transition-transform">
                        <i className={`fa-solid ${cat.icon}`}></i>
                      </div>
                      <h4 className="text-white text-xl font-black uppercase tracking-tight">{cat.title}</h4>
                      <p className="text-[#c9a24d] text-xs font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Découvrir l'expertise →</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#c9a24d] mb-4"><i className="fa-solid fa-gem text-3xl"></i></div>
                <h3 className="text-xl font-bold mb-2">Excellence Holographique</h3>
                <p className="text-gray-600">Une attention méticuleuse aux détails pour des interfaces qui captivent instantanément.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#c9a24d] mb-4"><i className="fa-solid fa-cube text-3xl"></i></div>
                <h3 className="text-xl font-bold mb-2">Design 3D Réaliste</h3>
                <p className="text-gray-600">Nous donnons du relief à vos idées avec des rendus photoréalistes et immersifs.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#c9a24d] mb-4"><i className="fa-solid fa-chart-simple text-3xl"></i></div>
                <h3 className="text-xl font-bold mb-2">Croissance Exponentielle</h3>
                <p className="text-gray-600">Des stratégies de conversion basées sur l'analyse de données en temps réel.</p>
              </div>
            </div>
          </div>
        );

      case Page.Services:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black mb-2 text-center">Architectes du Digital</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Découvrez comment nos expertises combinées peuvent transformer radicalement votre présence en ligne.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card 
                title="Ingénierie Web 3.0" 
                description="Nous concevons des plateformes robustes et évolutives, optimisées pour une vitesse fulgurante et une sécurité sans faille."
                icon="fa-terminal"
                onClick={() => setCurrentPage(Page.WebDev)}
                ctaText="Explorer nos solutions Web"
              />
              <Card 
                title="Branding de Luxe" 
                description="Créez une identité de marque mémorable qui inspire confiance et autorité dans votre secteur d'activité."
                icon="fa-signature"
                onClick={() => setCurrentPage(Page.Branding)}
                ctaText="Définir mon identité"
              />
              <Card 
                title="Performance Marketing" 
                description="Tunnels de vente optimisés et campagnes publicitaires de haute précision pour un ROI maximal."
                icon="fa-gauge-high"
                onClick={() => setCurrentPage(Page.SocialMedia)}
                ctaText="Booster mes ventes"
              />
            </div>
          </div>
        );

      case Page.Training:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black mb-2 text-center">Académie NEXALLI</h2>
            <p className="text-center text-gray-500 mb-12">Des ressources exclusives pour maîtriser les outils de demain.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRAINING_OFFERS.map((offer, idx) => (
                <Card 
                  key={idx}
                  title={offer.title}
                  description={offer.description}
                  icon={offer.icon}
                  onClick={() => handleExternalLink('https://nexalli.com/formation-digitale-pratique/')}
                  ctaText="Accéder à la formation"
                />
              ))}
            </div>
          </div>
        );

      case Page.Events:
        return (
          <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 duration-500">
            <div className="bg-black text-white p-16 rounded-[3rem] mb-8 relative overflow-hidden">
               <div className="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Event Background" />
              </div>
              <div className="relative z-10">
                <i className="fa-solid fa-calendar-check text-7xl text-[#c9a24d] mb-6"></i>
                <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Événementiel de Prestige</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
                  Nous transformons vos lancements de produits et galas en expériences immersives inoubliables.
                </p>
                <button 
                  onClick={() => handleExternalLink('https://nexalli.com/organisation-evenement-professionnel/')}
                  className="bg-[#c9a24d] text-black px-12 py-5 rounded-full font-black text-lg hover:scale-110 transition-transform shadow-xl shadow-[#c9a24d]/30"
                >
                  RÉSERVER UN AUDIT ÉVÉNEMENTIEL
                </button>
              </div>
            </div>
          </div>
        );

      case Page.WebDev:
        return (
          <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#c9a24d] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Haute Couture Digitale</span>
                <h2 className="text-5xl font-black mb-8 leading-tight">L'expertise Web au service de votre rentabilité.</h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Un site web NEXALLI n'est pas une simple vitrine : c'est un moteur de croissance autonome conçu pour capturer et convertir chaque prospect.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-4 p-4 bg-white border border-gray-100 rounded-2xl">
                    <i className="fa-solid fa-bolt text-[#c9a24d]"></i>
                    <span className="font-bold">Score Core Web Vitals : 95+</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white border border-gray-100 rounded-2xl">
                    <i className="fa-solid fa-shield-halved text-[#c9a24d]"></i>
                    <span className="font-bold">Protocoles de sécurité avancés</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleExternalLink('https://nexalli.com/creation-site-internet-nexalli/')}
                  className="bg-black text-white px-10 py-5 rounded-2xl font-black w-full md:w-auto hover:bg-[#c9a24d] hover:text-black transition-colors"
                >
                  DEVENIR PROPRIÉTAIRE DE SON SITE
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#c9a24d] opacity-20 blur-2xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop" 
                  alt="3D Device Mockup" 
                  className="rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white"
                />
              </div>
            </div>
          </div>
        );

      case Page.Branding:
        return (
          <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
                  alt="Premium Branding 3D" 
                  className="rounded-[2.5rem] shadow-2xl border-4 border-black"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-[#c9a24d] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Identité Visuelle Signature</span>
                <h2 className="text-5xl font-black mb-8 leading-tight">Marquez les esprits pour les décennies à venir.</h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Nous ne créons pas seulement des logos. Nous forgeons des héritages visuels qui racontent votre story avant même que vous ne parliez.
                </p>
                <div className="grid grid-cols-1 gap-4 mb-10">
                  <div className="flex items-center p-4 bg-black text-white rounded-2xl">
                    <div className="w-10 h-10 bg-[#c9a24d] rounded-lg flex items-center justify-center mr-4 text-black">
                      <i className="fa-solid fa-palette"></i>
                    </div>
                    <span className="font-bold">Palette chromatique psychologique</span>
                  </div>
                  <div className="flex items-center p-4 bg-black text-white rounded-2xl">
                    <div className="w-10 h-10 bg-[#c9a24d] rounded-lg flex items-center justify-center mr-4 text-black">
                      <i className="fa-solid fa-font"></i>
                    </div>
                    <span className="font-bold">Typographie exclusive sur mesure</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleExternalLink('https://nexalli.com/branding-identite-visuelle-nexalli/')}
                  className="bg-black text-white px-10 py-5 rounded-2xl font-black w-full hover:shadow-2xl transition-all"
                >
                  INITIALISER MON BRANDING
                </button>
              </div>
            </div>
          </div>
        );

      case Page.SocialMedia:
        return (
          <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-16">
              <span className="text-[#c9a24d] font-bold tracking-widest uppercase text-sm mb-4 block">Social Dominance</span>
              <h2 className="text-5xl font-black mb-6">Dominez l'Attention Digitale</h2>
              <p className="text-gray-500 text-xl max-w-2xl mx-auto">Stratégies de croissance organique et paid ads pour transformer vos réseaux en machines à cash.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:border-[#c9a24d] transition-colors">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 text-white text-2xl">
                  <i className="fa-solid fa-hashtag"></i>
                </div>
                <h3 className="text-2xl font-black mb-4">Gestion Elite de Communauté</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Contenu viral, engagement proactif et monitoring de réputation 24/7 pour une image impeccable.</p>
                <button 
                  onClick={() => handleExternalLink('https://nexalli.com/gestion-reseaux-sociaux/')}
                  className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c9a24d] hover:text-black transition-all"
                >
                  Devenir Viral
                </button>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:border-[#c9a24d] transition-colors">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 text-white text-2xl">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="text-2xl font-black mb-4">Ads & Acquisition Haute Précision</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Ciblage laser des décideurs et des acheteurs compulsifs pour une croissance prédictive.</p>
                <button 
                  onClick={() => handleExternalLink('https://nexalli.com/gestion-reseaux-sociaux/')}
                  className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c9a24d] hover:text-black transition-all"
                >
                  Scaler mon Business
                </button>
              </div>
            </div>
          </div>
        );

      case Page.Contact:
        return (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-black p-12 text-white text-center relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop" className="w-full h-full object-cover" alt="Overlay" />
                </div>
                <h2 className="text-4xl font-black mb-4 relative z-10">Entrez dans le Cercle NEXALLI</h2>
                <p className="text-[#c9a24d] font-bold text-lg relative z-10">Votre succès commence par un message.</p>
              </div>
              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div 
                    onClick={() => handleExternalLink(`mailto:${contactEmail}`)}
                    className="flex items-center p-6 bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mr-5 text-2xl text-black">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-1">Expertise Mail</p>
                      <p className="font-bold text-lg">{contactEmail}</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => handleExternalLink(SOCIAL_LINKS.instagram)}
                    className="flex items-center p-6 bg-pink-50 rounded-3xl cursor-pointer hover:bg-pink-100 transition-colors border border-transparent hover:border-pink-200"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mr-5 text-2xl text-pink-600">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-black tracking-widest mb-1">Portfolio Live</p>
                      <p className="font-bold text-lg">@by_nexalli</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => openWhatsApp('Demande de consultation stratégique')}
                  className="w-full py-6 bg-black text-white rounded-3xl font-black text-2xl hover:bg-[#c9a24d] hover:text-black transition-all transform active:scale-95 shadow-2xl flex items-center justify-center space-x-4"
                >
                  <i className="fa-brands fa-whatsapp text-3xl"></i>
                  <span>LANCER MON PROJET SUR WHATSAPP</span>
                </button>
                <p className="text-center mt-6 text-gray-400 text-sm font-medium">Temps de réponse moyen : &lt; 2 heures</p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page non trouvée</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#c9a24d] selection:text-black">
      {/* Social Banner Top */}
      <div className="bg-black text-white/50 py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[10px] font-black tracking-widest uppercase">
          <div className="flex space-x-6">
            <span>Paris / Dubai / Abidjan</span>
            <span className="text-[#c9a24d]">● Nexalli Digital Agency</span>
          </div>
          <div className="flex space-x-4 items-center">
            <a href={SOCIAL_LINKS.instagram} target="_blank" className="hover:text-white transition-colors">Instagram</a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" className="hover:text-white transition-colors">YouTube</a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" className="hover:text-white transition-colors">TikTok</a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      <header className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tighter text-black flex items-center justify-center">
            NEXALLI <span className="text-[#c9a24d] ml-1">.</span>
          </h1>
          <p className="text-[10px] opacity-40 mt-2 uppercase tracking-[0.4em] font-black">L'excellence au service de l'ambition</p>
        </div>
      </header>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow container mx-auto px-4 py-16 max-w-7xl">
        {renderContent()}
      </main>

      <footer className="bg-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-black tracking-tighter mb-6 block">NEXALLI <span className="text-[#c9a24d]">.</span></span>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                Plus qu'une agence, un partenaire de croissance stratégique. Nous redéfinissons les standards du web et du branding moderne.
              </p>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#c9a24d] hover:text-black transition-all"><i className="fa-brands fa-instagram text-xl"></i></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#c9a24d] hover:text-black transition-all"><i className="fa-brands fa-youtube text-xl"></i></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#c9a24d] hover:text-black transition-all"><i className="fa-brands fa-tiktok text-xl"></i></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#c9a24d] hover:text-black transition-all"><i className="fa-brands fa-facebook-f text-xl"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-[#c9a24d] font-black uppercase tracking-widest text-xs mb-6">Expertises</h4>
              <ul className="space-y-4 text-gray-400 font-bold text-sm">
                <li><button onClick={() => setCurrentPage(Page.WebDev)} className="hover:text-white transition-colors">Web Development</button></li>
                <li><button onClick={() => setCurrentPage(Page.Branding)} className="hover:text-white transition-colors">Visual Branding</button></li>
                <li><button onClick={() => setCurrentPage(Page.SocialMedia)} className="hover:text-white transition-colors">Social Strategy</button></li>
                <li><button onClick={() => setCurrentPage(Page.Events)} className="hover:text-white transition-colors">Professional Events</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c9a24d] font-black uppercase tracking-widest text-xs mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 font-bold text-sm">
                <li>{contactEmail}</li>
                <li>WhatsApp Support 24/7</li>
                <li className="text-white">Lundi — Samedi</li>
                <li className="text-white">09:00 — 19:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
            <p>© 2026 NEXALLI DIGITAL GROUP. TOUS DROITS RÉSERVÉS.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#c9a24d] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#c9a24d] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#c9a24d] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
