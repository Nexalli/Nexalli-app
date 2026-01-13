
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { COLORS, SOCIAL_LINKS, WEB_PRODUCTS, WEB_OPTIONS, FORMATIONS_PRODUCTS, EVENT_TYPES, EVENT_ENTERPRISE_PACKS, EVENT_ASSOCIATION_PACKS, BRANDING_SERVICES, BRANDING_PACKS } from './constants';
import Navbar from './components/Navbar';
import Card from './components/Card';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const contactEmail = "nbynexalli@gmail.com";

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderProductGrid = (products: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-16">
      {products.map((product, idx) => (
        <div key={idx} className="bg-[#111] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-[#222] shadow-2xl hover:border-[#c9a24d]/30 transition-all group flex flex-col h-full">
          <div className="relative h-60 md:h-72 overflow-hidden">
            <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c9a24d] rounded-lg md:rounded-xl flex items-center justify-center text-black text-lg md:text-xl">
                <i className={`fa-solid ${product.icon}`}></i>
              </div>
              <span className="text-white font-black uppercase tracking-tighter text-sm md:text-lg">{product.priceInfo}</span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight uppercase tracking-tighter text-white">{product.title}</h3>
            <p className="text-gray-400 mb-6 font-medium leading-relaxed text-sm md:text-base">{product.description}</p>
            <div className="space-y-3 mb-8 flex-grow">
              {product.points.map((pt: string, i: number) => (
                <div key={i} className="flex items-start text-xs md:text-sm font-bold text-gray-300">
                  <i className="fa-solid fa-check text-[#c9a24d] mr-3 mt-1"></i>
                  {pt}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-[#222]">
              <button 
                onClick={() => handleExternalLink(product.link || '')}
                className="w-full bg-white text-black px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black hover:bg-[#c9a24d] transition-all transform active:scale-95 shadow-xl flex items-center justify-center space-x-3"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span className="text-sm md:text-base uppercase tracking-widest">Contacter</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div className="animate-in fade-in duration-700 px-2 md:px-0">
            {/* Hero Section */}
            <section className="py-12 md:py-24 bg-[#0a0a0a] text-white rounded-[2rem] md:rounded-[3rem] px-6 md:px-12 mb-12 relative overflow-hidden border border-[#1a1a1a]">
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#c9a24d] opacity-5 blur-[100px] md:blur-[120px] rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase">
                    L'élite de la <span className="text-[#c9a24d]">création</span> digitale.
                  </h2>
                  <p className="text-base md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed font-medium">
                    NEXALLI fusionne stratégie de pointe et design haute fidélité pour propulser votre marque dans une nouvelle dimension.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setCurrentPage(Page.Services)} className="bg-[#c9a24d] text-black px-8 py-4 rounded-full font-black text-sm md:text-lg uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95">
                      Nos Services
                    </button>
                    <button onClick={() => setCurrentPage(Page.Contact)} className="border border-white/20 text-white px-8 py-4 rounded-full font-black text-sm md:text-lg uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                      Parlons Projet
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" alt="Abstract 3D Digital Art" className="rounded-[2.5rem] shadow-2xl border border-white/5 hover:rotate-1 transition-transform duration-700" />
                </div>
              </div>
            </section>
          </div>
        );

      case Page.SocialMedia:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            {/* Manifesto Section */}
            <section className="bg-[#111] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 mb-16 border border-[#222] shadow-sm text-center">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 block">Stratégie d'Influence</span>
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Pourquoi être présent sur TikTok & Instagram ?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-lg text-gray-400 font-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mb-8">
                  {[
                    "Développer votre visibilité",
                    "Toucher un public ciblé",
                    "Valoriser vos projets, actions ou produits",
                    "Créer du lien avec votre communauté",
                    "Humaniser votre communication"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#222]">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#c9a24d]/20 flex items-center justify-center text-[#c9a24d]">
                        <i className="fa-solid fa-check text-[10px]"></i>
                      </div>
                      <span className="text-white text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-black text-[#c9a24d] pt-8 border-t border-[#222] uppercase tracking-widest text-xs md:text-base">
                  Même avec peu d’abonnés, une stratégie claire fait la différence.
                </p>
              </div>
            </section>

            {/* Platform Services */}
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Nos services réseaux</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24">
              {/* TikTok */}
              <div className="bg-[#111] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-[#222] shadow-xl flex flex-col group">
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="TikTok 3D" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <i className="fa-brands fa-tiktok text-4xl md:text-6xl text-white"></i>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">1. TikTok</h3>
                  <ul className="space-y-3 mb-8 flex-grow font-bold text-gray-400 text-xs md:text-sm">
                    <li><i className="fa-solid fa-video text-[#c9a24d] mr-2"></i>Création de vidéos courtes</li>
                    <li><i className="fa-solid fa-star text-[#c9a24d] mr-2"></i>Mise en avant de projets</li>
                    <li><i className="fa-solid fa-user-group text-[#c9a24d] mr-2"></i>Contenu authentique & humain</li>
                    <li><i className="fa-solid fa-bolt text-[#c9a24d] mr-2"></i>Tendances adaptées</li>
                  </ul>
                  <button onClick={() => handleExternalLink(SOCIAL_LINKS.tiktok)} className="bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#c9a24d] transition-all">VOIR NOTRE TIKTOK</button>
                </div>
              </div>
              {/* Instagram */}
              <div className="bg-[#111] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-[#222] shadow-xl flex flex-col group">
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram 3D" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <i className="fa-brands fa-instagram text-4xl md:text-6xl text-white"></i>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">2. Instagram</h3>
                  <ul className="space-y-3 mb-8 flex-grow font-bold text-gray-400 text-xs md:text-sm">
                    <li><i className="fa-solid fa-camera text-[#c9a24d] mr-2"></i>Publications (posts & reels)</li>
                    <li><i className="fa-solid fa-circle-dot text-[#c9a24d] mr-2"></i>Stories quotidiennes</li>
                    <li><i className="fa-solid fa-eye text-[#c9a24d] mr-2"></i>Mise en valeur visuelle</li>
                    <li><i className="fa-solid fa-palette text-[#c9a24d] mr-2"></i>Cohérence d'identité</li>
                  </ul>
                  <button onClick={() => handleExternalLink(SOCIAL_LINKS.instagram)} className="bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#c9a24d] transition-all">VOIR NOTRE INSTAGRAM</button>
                </div>
              </div>
            </div>

            {/* Pricing Tiers Section */}
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter">TARIFS RÉSEAUX</h2>
              <p className="text-gray-500 text-sm md:text-xl font-medium">Offres indicatives – sans engagement long terme.</p>
            </header>

            {/* Enterprise Offers */}
            <div className="mb-24">
              <h3 className="text-xl md:text-3xl font-black mb-10 uppercase text-center tracking-[0.2em] border-b-2 border-[#c9a24d] inline-block mx-auto w-full pb-4 text-white">ENTREPRISES</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                {[
                  {
                    title: "Starter Réseaux",
                    price: "150 € / mois",
                    points: ["Audit rapide du compte", "4 publications / mois", "Légendes + hashtags", "Conseils & Suivi hebdo", "Durée min : 1 mois"],
                    desc: "Démarrer proprement.",
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    title: "Développement",
                    price: "300 € / mois",
                    points: ["8 contenus / mois (Reels/TikTok)", "Légendes optimisées", "Hashtags ciblés", "Planning de publication", "Suivi & Conseils stratégiques"],
                    desc: "Engagement reco : 2-3 mois",
                    img: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    title: "Croissance",
                    price: "500 € / mois",
                    points: ["12 contenus / mois", "TikTok + Instagram", "Stories incluses", "Analyse performances", "Ajustements mensuels"],
                    desc: "Engagement recommandé : 3 mois",
                    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl border border-[#222] flex flex-col h-full group hover:border-[#c9a24d]/40 transition-all">
                    <div className="h-40 md:h-48 overflow-hidden relative">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-[#c9a24d] px-4 py-2 rounded-lg font-black text-sm md:text-base">{item.price}</div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h4 className="text-lg md:text-xl font-black mb-4 uppercase text-white">{item.title}</h4>
                      <ul className="text-xs md:text-sm space-y-2 mb-6 flex-grow text-gray-400 font-bold">
                        {item.points.map((p, pi) => <li key={pi} className="flex items-center"><i className="fa-solid fa-check text-[#c9a24d] mr-2"></i>{p}</li>)}
                      </ul>
                      <p className="text-[10px] italic text-gray-500 mb-6 uppercase tracking-widest">{item.desc}</p>
                      <button onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)} className="bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#c9a24d] transition-all flex items-center justify-center space-x-2">
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>Commander</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Association Offers */}
            <div className="mb-24">
              <h3 className="text-xl md:text-3xl font-black mb-10 uppercase text-center tracking-[0.2em] border-b-2 border-white/20 inline-block mx-auto w-full pb-4 text-white/80">ASSOCIATIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                {[
                  {
                    title: "Starter Associatif",
                    price: "80 € / mois",
                    points: ["3 publications / mois", "Mise en valeur des actions", "Légendes simples", "Hashtags associatifs", "Durée min : 1 mois"],
                    desc: "Démarrer proprement.",
                    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    title: "Animation",
                    price: "150 € / mois",
                    points: ["6 publications / mois", "Posts + Stories", "Aide à la mobilisation", "Conseils communication", "Suivi hebdomadaire"],
                    desc: "Engagement reco : 2-3 mois",
                    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    title: "Campagne",
                    price: "Dès 250 €",
                    points: ["Campagnes spécifiques", "Sensibilisation", "Appels à mobilisation", "Audit complet", "Action ponctuelle"],
                    desc: "Mission ponctuelle",
                    img: "https://images.unsplash.com/photo-1469571483333-f33f917a9821?q=80&w=1000&auto=format&fit=crop"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl border border-[#222] flex flex-col h-full group hover:border-white/20 transition-all">
                    <div className="h-40 md:h-48 overflow-hidden relative">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                      <div className="absolute top-4 right-4 bg-[#c9a24d] text-black px-4 py-2 rounded-lg font-black text-sm md:text-base">{item.price}</div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h4 className="text-lg md:text-xl font-black mb-4 uppercase text-white">{item.title}</h4>
                      <ul className="text-xs md:text-sm space-y-2 mb-6 flex-grow text-gray-400 font-bold">
                        {item.points.map((p, pi) => <li key={pi} className="flex items-center"><i className="fa-solid fa-check text-white/40 mr-2"></i>{p}</li>)}
                      </ul>
                      <p className="text-[10px] italic text-gray-500 mb-6 uppercase tracking-widest">{item.desc}</p>
                      <button onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)} className="bg-[#222] text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#c9a24d] hover:text-black transition-all flex items-center justify-center space-x-2">
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>Commander</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* A la Carte & No Promises */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
              <div className="bg-[#111] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-[#222]">
                <h3 className="text-2xl md:text-4xl font-black mb-8 uppercase text-white">Contenu à la carte</h3>
                <div className="space-y-4 font-bold text-gray-400 text-sm md:text-base">
                  <div className="flex justify-between border-b border-[#222] pb-3"><span>Vidéo TikTok</span> <span className="text-[#c9a24d]">30 €</span></div>
                  <div className="flex justify-between border-b border-[#222] pb-3"><span>Reel Instagram</span> <span className="text-[#c9a24d]">30 €</span></div>
                  <div className="flex justify-between border-b border-[#222] pb-3"><span>Visuel post</span> <span className="text-[#c9a24d]">20 €</span></div>
                  <div className="flex justify-between border-b border-[#222] pb-3"><span>Story (lot de 5)</span> <span className="text-[#c9a24d]">25 €</span></div>
                  <div className="flex justify-between border-b border-[#222] pb-3"><span>Légende optimisée</span> <span className="text-[#c9a24d]">10 €</span></div>
                </div>
                <div className="mt-10 p-6 bg-[#1a1a1a] rounded-2xl border border-[#222]">
                  <h4 className="font-black uppercase text-[10px] text-[#c9a24d] mb-4 tracking-[0.2em]">Délais d'exécution</h4>
                  <ul className="text-xs md:text-sm space-y-2 font-bold text-gray-500">
                    <li>Setup comptes : 3 à 5 jours</li>
                    <li>Première publication : sous 7 jours</li>
                    <li>Planification mensuelle à l'avance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white text-black p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a24d] opacity-10 blur-3xl"></div>
                <h3 className="text-2xl md:text-4xl font-black mb-8 uppercase">Zéro fausses promesses</h3>
                <div className="space-y-8">
                  <ul className="space-y-4 font-black uppercase text-xs md:text-sm tracking-tighter">
                    <li className="flex items-center text-gray-400 line-through"><i className="fa-solid fa-xmark mr-4 text-red-500 line-through-none"></i>Pas d’achat de followers</li>
                    <li className="flex items-center text-gray-400 line-through"><i className="fa-solid fa-xmark mr-4 text-red-500"></i>Pas de fausses vues</li>
                    <li className="flex items-center text-gray-400 line-through"><i className="fa-solid fa-xmark mr-4 text-red-500"></i>Pas d’illusions</li>
                  </ul>
                  <div className="pt-8 border-t border-black/10">
                    <ul className="space-y-4 font-black uppercase text-xs md:text-sm">
                      <li className="flex items-center"><i className="fa-solid fa-circle-check text-[#c9a24d] mr-4"></i>Croissance progressive</li>
                      <li className="flex items-center"><i className="fa-solid fa-circle-check text-[#c9a24d] mr-4"></i>Communication authentique</li>
                      <li className="flex items-center"><i className="fa-solid fa-circle-check text-[#c9a24d] mr-4"></i>Stratégie réelle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Visuals */}
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Pourquoi Nexalli ?</h2>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
              {[
                "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-40 md:h-64 shadow-2xl border-2 border-[#222] transform transition-transform duration-700 hover:scale-105">
                  <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Strategy" />
                </div>
              ))}
            </div>
          </div>
        );

      case Page.WebDev:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            <header className="text-center mb-16">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Ingénierie & Excellence</span>
              <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-white">Nos sites web</h2>
              <p className="text-gray-500 text-sm md:text-xl max-w-2xl mx-auto font-medium">L'élégance numérique alliée à la performance technique.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
              {WEB_PRODUCTS.map((product, idx) => (
                <div key={idx} className="bg-[#111] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#222] shadow-2xl hover:border-[#c9a24d]/30 transition-all group flex flex-col h-full">
                  <div className="relative h-60 md:h-80 overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-8 flex flex-col">
                       <span className="text-white font-black uppercase tracking-tighter text-lg md:text-2xl">{product.priceInfo}</span>
                       <span className="text-[#c9a24d] text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">Délai : {product.delay}</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight uppercase tracking-tighter text-white">{product.title}</h3>
                    <div className="space-y-4 mb-10 flex-grow">
                      {product.points.map((pt: string, i: number) => (
                        <div key={i} className="flex items-center text-xs md:text-base font-bold text-gray-400">
                          <i className="fa-solid fa-check text-[#c9a24d] mr-4"></i>
                          {pt}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)}
                      className="bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-base hover:bg-[#c9a24d] transition-all flex items-center justify-center space-x-3 shadow-xl"
                    >
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                      <span>Lancer mon projet</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <header className="text-center mb-16 mt-32">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Nos Options</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
              {WEB_OPTIONS.map((opt, i) => (
                <div key={i} className="bg-[#0c0c0c] rounded-[2rem] overflow-hidden border border-[#1a1a1a] shadow-xl flex flex-col h-full group">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img src={opt.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                    <div className="absolute bottom-6 left-8">
                       <span className="text-white font-black uppercase text-sm md:text-lg bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg">{opt.priceInfo}</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-white">{opt.title}</h3>
                    <ul className="space-y-3 mb-8 flex-grow text-xs md:text-sm font-bold text-gray-500">
                      {opt.points.map((p, pi) => <li key={pi}><i className="fa-solid fa-plus text-[#c9a24d] mr-3"></i>{p}</li>)}
                    </ul>
                    <button onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)} className="border border-white/10 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all">Contacter</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Final */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-24 mb-12">
              {[
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614332284683-517b1a7b55a2?q=80&w=1000&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="rounded-[1rem] md:rounded-[2rem] overflow-hidden h-32 md:h-64 border-2 border-[#222] shadow-2xl transform transition-all duration-700 hover:scale-105">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case Page.Branding:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            {/* Branding Manifesto */}
            <section className="bg-[#111] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-20 mb-16 border border-[#222] shadow-2xl text-center">
              <span className="text-[#c9a24d] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 block">Manifeste de Marque</span>
              <h2 className="text-3xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-white">Pourquoi une identité professionnelle ?</h2>
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left">
                  {[
                    "Renforcer la crédibilité immédiate",
                    "Développer une image unique",
                    "Surpasser la concurrence",
                    "Cohérence multi-plateformes",
                    "Valoriser vos ambitions",
                    "Inspirer confiance absolue"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-[#c9a24d] flex items-center justify-center text-black">
                        <i className="fa-solid fa-check text-[10px]"></i>
                      </div>
                      <span className="text-white font-bold text-xs md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-black text-black bg-[#c9a24d] p-6 md:p-8 rounded-2xl uppercase tracking-widest text-xs md:text-xl shadow-lg">
                  L'identité visuelle est un investissement stratégique majeur.
                </p>
              </div>
            </section>

            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Services Branding</h2>
            </header>
            {renderProductGrid(BRANDING_SERVICES)}

            <header className="text-center mb-16 mt-32">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Packs complets</h2>
            </header>
            {renderProductGrid(BRANDING_PACKS)}

            {/* Target & Methodology Sections are implied within this switch structure but condensed for code size rules */}
            <section className="bg-black text-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 mb-24 relative overflow-hidden border border-[#222] text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a24d] opacity-5 blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Pour qui est ce service ?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-16">
                {["Entrepreneurs", "TPE / PME", "Associations", "Projets Citoyens", "Structures Nationales"].map((target, i) => (
                  <div key={i} className="border border-white/5 bg-white/5 p-4 md:p-6 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-sm">
                    {target}
                  </div>
                ))}
              </div>
              <button onClick={() => handleExternalLink(SOCIAL_LINKS.instagram)} className="bg-white text-black px-10 md:px-16 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-[#c9a24d] transition-all flex items-center space-x-4 mx-auto shadow-2xl">
                <i className="fa-brands fa-instagram text-xl"></i>
                <span>Voir le Portfolio</span>
              </button>
            </section>
          </div>
        );

      case Page.Services:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            <h2 className="text-3xl md:text-6xl font-black mb-12 text-center uppercase tracking-tighter text-white">L'Architecture du Succès</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-12">
              <Card title="INGÉNIERIE WEB" description="Développement de plateformes robustes et hautement performantes." icon="fa-terminal" onClick={() => setCurrentPage(Page.WebDev)} ctaText="Découvrir l'offre" />
              <Card title="VISUAL BRANDING" description="Conception d'identités visuelles mémorables et impactantes." icon="fa-signature" onClick={() => setCurrentPage(Page.Branding)} />
              <Card title="SOCIAL GROWTH" description="Stratégies de croissance et présence sur les réseaux nouvelle génération." icon="fa-gauge-high" onClick={() => setCurrentPage(Page.SocialMedia)} />
            </div>
          </div>
        );

      case Page.Contact:
        return (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 px-4">
            <div className="bg-[#111] rounded-[2rem] md:rounded-[4rem] shadow-2xl overflow-hidden border border-[#222]">
              <div className="bg-gradient-to-br from-[#000] to-[#111] p-10 md:p-20 text-center border-b border-[#222]">
                <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">Entrez dans le Cercle</h2>
                <p className="text-[#c9a24d] font-black uppercase tracking-[0.3em] text-xs md:text-xl">L'excellence commence ici.</p>
              </div>
              <div className="p-10 md:p-20">
                <button onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)} className="w-full py-6 md:py-8 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-sm md:text-2xl hover:bg-[#c9a24d] transition-all flex items-center justify-center space-x-6 shadow-2xl active:scale-95">
                  <i className="fa-brands fa-whatsapp text-2xl md:text-4xl"></i>
                  <span>Démarrer l'aventure</span>
                </button>
                <div className="mt-12 flex justify-center space-x-8 text-gray-500 text-2xl md:text-4xl">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" className="hover:text-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>
                  <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors"><i className="fa-solid fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="text-white text-center font-black">404 - NEXALLI VOID</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      {/* Top Banner - Desktop only for clarity */}
      <div className="bg-black text-white/30 py-2 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[9px] font-black tracking-[0.4em] uppercase">
          <div className="flex space-x-8">
            <span>Paris ● Dubai ● Abidjan</span>
            <span className="text-[#c9a24d]">NEXALLI DIGITAL GROUP</span>
          </div>
          <div className="flex space-x-6 items-center">
            <a href={SOCIAL_LINKS.instagram} target="_blank" className="hover:text-white transition-colors">Insta</a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" className="hover:text-white transition-colors">Tiktok</a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" className="hover:text-white transition-colors">Youtube</a>
          </div>
        </div>
      </div>

      <header className="bg-black/50 backdrop-blur-xl py-6 md:py-10 border-b border-white/5 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white flex items-center justify-center">
            NEXALLI<span className="text-[#c9a24d] ml-1">.</span>
          </h1>
          <p className="text-[8px] md:text-[10px] opacity-30 mt-2 uppercase tracking-[0.6em] font-black text-white">Digital Excellence Framework</p>
        </div>
      </header>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-24 max-w-7xl">
        {renderContent()}
      </main>

      <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl md:text-4xl font-black tracking-tighter mb-6 block uppercase">NEXALLI<span className="text-[#c9a24d]">.</span></span>
              <p className="text-gray-500 max-w-sm leading-relaxed font-medium text-sm md:text-base">Redéfinir les standards de l'élégance et de la performance numérique à l'échelle internationale.</p>
            </div>
            <div>
              <h4 className="text-[#c9a24d] font-black uppercase text-[10px] tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-gray-500 font-bold text-xs md:text-sm">
                <li><button onClick={() => setCurrentPage(Page.WebDev)} className="hover:text-white transition-colors uppercase">Web Engineering</button></li>
                <li><button onClick={() => setCurrentPage(Page.Branding)} className="hover:text-white transition-colors uppercase">Visual Brand</button></li>
                <li><button onClick={() => setCurrentPage(Page.SocialMedia)} className="hover:text-white transition-colors uppercase">Social Scale</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c9a24d] font-black uppercase text-[10px] tracking-[0.3em] mb-8">Contact Direct</h4>
              <p className="text-gray-400 font-black text-xs md:text-sm break-all">{contactEmail}</p>
              <p className="text-gray-600 mt-4 text-[10px] font-medium uppercase tracking-widest">Réponse sous 48h maximum</p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 text-center">
             <div className="flex justify-center space-x-6 mb-8 text-gray-500 text-xl">
               <a href={SOCIAL_LINKS.instagram} target="_blank" className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-instagram"></i></a>
               <a href={SOCIAL_LINKS.tiktok} target="_blank" className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-tiktok"></i></a>
               <a href={SOCIAL_LINKS.whatsapp} target="_blank" className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
             </div>
             <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-600">© 2026 NEXALLI DIGITAL GROUP. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
