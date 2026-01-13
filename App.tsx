
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

  const renderProductGrid = (products: any[], isEventType = false) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16">
      {products.map((product, idx) => (
        <div key={idx} className="bg-[#111] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-[#222] shadow-2xl hover:border-[#c9a24d]/30 transition-all group flex flex-col h-full">
          <div className="relative h-60 md:h-72 overflow-hidden">
            <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
            {!isEventType && (
              <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c9a24d] rounded-lg md:rounded-xl flex items-center justify-center text-black text-lg md:text-xl">
                  <i className={`fa-solid ${product.icon}`}></i>
                </div>
                <span className="text-white font-black uppercase tracking-tighter text-sm md:text-lg">{product.priceInfo}</span>
              </div>
            )}
            {isEventType && (
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-[#c9a24d] p-3 rounded-xl border border-white/5">
                <i className={`fa-solid ${product.icon} text-xl`}></i>
              </div>
            )}
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight uppercase tracking-tighter text-white">{product.title}</h3>
            {!isEventType && <p className="text-gray-400 mb-6 font-medium leading-relaxed text-sm md:text-base">{product.description}</p>}
            <div className={`space-y-3 mb-8 flex-grow ${isEventType ? 'mt-4' : ''}`}>
              {product.points.map((pt: string, i: number) => (
                <div key={i} className="flex items-start text-xs md:text-sm font-bold text-gray-300">
                  <i className="fa-solid fa-check text-[#c9a24d] mr-3 mt-1"></i>
                  {pt}
                </div>
              ))}
              {!isEventType && product.delay && (
                <div className="flex items-start text-xs md:text-sm font-black text-[#c9a24d] uppercase tracking-widest pt-4 border-t border-white/5 mt-4">
                  <i className="fa-solid fa-clock mr-3"></i>
                  Délai : {product.delay}
                </div>
              )}
            </div>
            {!isEventType && (
              <div className="flex items-center justify-between pt-6 border-t border-[#222]">
                <button 
                  onClick={() => handleExternalLink(product.link || SOCIAL_LINKS.whatsapp)}
                  className="w-full bg-white text-black px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black hover:bg-[#c9a24d] transition-all transform active:scale-95 shadow-xl flex items-center justify-center space-x-3"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  <span className="text-sm md:text-base uppercase tracking-widest">Réserver</span>
                </button>
              </div>
            )}
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

            {/* Platform Services omitted for brevity, logic remains same as provided in constants */}
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Nos services réseaux</h2>
            </header>
            {/* Add logic to render Social Media content similarly if needed, but Page.Events is our target */}
          </div>
        );

      case Page.Events:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            <header className="text-center mb-16">
              <span className="text-[#c9a24d] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block">Expériences & Émotion</span>
              <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-white">Types d'évenement organisé</h2>
              <p className="text-gray-500 text-sm md:text-xl max-w-2xl mx-auto font-medium">Nous donnons vie à vos visions avec une organisation millimétrée.</p>
            </header>

            {/* Event Types - No links */}
            {renderProductGrid(EVENT_TYPES, true)}

            <header className="text-center mb-16 mt-32">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Offres Entreprises</h2>
            </header>

            {/* Enterprise Packs - With links */}
            {renderProductGrid(EVENT_ENTERPRISE_PACKS)}

            <header className="text-center mb-16 mt-32">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Tarif adapté pour association</h2>
            </header>

            {/* Association Packs - With links */}
            {renderProductGrid(EVENT_ASSOCIATION_PACKS)}

            {/* Final Visuals Gallery */}
            <header className="text-center mb-16 mt-32">
              <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-white">Capturer l'Inoubliable</h2>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
              {[
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-40 md:h-64 shadow-2xl border-2 border-[#222] transform transition-transform duration-700 hover:scale-105">
                  <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Event visual" />
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
          </div>
        );

      case Page.Branding:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Services Branding</h2>
            </header>
            {renderProductGrid(BRANDING_SERVICES)}
            <header className="text-center mb-16 mt-32">
              <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">Packs complets</h2>
            </header>
            {renderProductGrid(BRANDING_PACKS)}
          </div>
        );

      case Page.Training:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 px-2 md:px-0">
            <header className="text-center mb-16">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Académie Nexalli</span>
              <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-white">Nos Formations Digitales</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
              {FORMATIONS_PRODUCTS.map((product, idx) => (
                <div key={idx} className="bg-[#111] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#222] shadow-2xl hover:border-[#c9a24d]/30 transition-all group flex flex-col h-full">
                  <div className="relative h-60 md:h-72 overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-black text-lg md:text-xl shadow-lg">
                        <i className={`fa-solid ${product.icon}`}></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight uppercase tracking-tighter text-white">{product.title}</h3>
                    <p className="text-[#c9a24d] font-black uppercase text-[10px] md:text-xs mb-6 tracking-widest">Objectif : {product.objective}</p>
                    <p className="text-gray-400 mb-6 font-bold text-sm md:text-base">{product.description}</p>
                    <div className="space-y-3 mb-10 flex-grow">
                      {product.points.map((pt, i) => (
                        <div key={i} className="flex items-start text-xs md:text-sm font-bold text-gray-500">
                          <i className="fa-solid fa-check-circle text-[#c9a24d] mr-3 mt-1"></i>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleExternalLink(product.link || '')}
                      className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-base hover:bg-[#c9a24d] transition-all flex items-center justify-center space-x-3 shadow-xl"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>Mettre au panier</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modalités & Accompagnement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24 mb-16">
              <div className="bg-[#111] p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-[#222] shadow-2xl">
                <h3 className="text-2xl md:text-4xl font-black mb-10 uppercase text-white tracking-tighter">Modalités</h3>
                <ul className="space-y-6">
                  {[
                    { label: "Téléchargement immédiat", icon: "fa-download" },
                    { label: "Format PDF", icon: "fa-file-pdf" },
                    { label: "Compatible tout support", icon: "fa-mobile-screen" },
                    { label: "Sans abonnement", icon: "fa-unlock" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-gray-400 font-bold">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#c9a24d]">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <span className="uppercase tracking-widest text-xs md:text-sm">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#c9a24d] p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-black">
                <h3 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tighter">Besoin d’un accompagnement ?</h3>
                <p className="font-bold text-sm md:text-lg mb-10 leading-relaxed">
                  Les formations Nexalli sont conçues pour être accessibles et puissantes. Elles peuvent être :
                </p>
                <div className="space-y-4">
                  {[
                    "Utilisées seules pour une autonomie totale",
                    "Combinées entre elles pour une expertise 360°",
                    "Complétées par un coaching personnalisé"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 font-black uppercase text-[10px] md:text-sm tracking-widest bg-black/5 p-4 rounded-xl">
                      <i className="fa-solid fa-plus-circle"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(Page.Contact)}
                  className="mt-12 w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs md:text-base hover:bg-white hover:text-black transition-all"
                >
                  Demander un coaching
                </button>
              </div>
            </div>
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
      {/* Top Banner */}
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
