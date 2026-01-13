
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
      {products.map((product, idx) => (
        <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
          <div className="relative h-72 overflow-hidden">
            <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-8 flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#c9a24d] rounded-xl flex items-center justify-center text-black text-xl">
                <i className={`fa-solid ${product.icon}`}></i>
              </div>
              <span className="text-white font-black uppercase tracking-tighter text-lg">{product.priceInfo}</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-black mb-3 leading-tight uppercase tracking-tighter">{product.title}</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">{product.description}</p>
            <div className="space-y-3 mb-8 flex-grow">
              {product.points.map((pt: string, i: number) => (
                <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                  <i className="fa-solid fa-check text-[#c9a24d] mr-3"></i>
                  {pt}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <button 
                onClick={() => handleExternalLink(product.link || '')}
                className="w-full bg-black text-white px-8 py-5 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all transform active:scale-95 shadow-xl flex items-center justify-center space-x-3"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>CONTACTER VIA WHATSAPP</span>
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
                    <button onClick={() => setCurrentPage(Page.Services)} className="bg-[#c9a24d] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105">
                      Nos Services Premium
                    </button>
                    <button onClick={() => setCurrentPage(Page.Contact)} className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
                      Parlons de votre projet
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" alt="Abstract 3D Digital Art" className="rounded-3xl shadow-2xl border border-white/10 hover:rotate-2 transition-transform duration-500" />
                </div>
              </div>
            </section>
          </div>
        );

      case Page.Branding:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            {/* Bloc Manifesto */}
            <section className="bg-white rounded-[3rem] p-12 mb-16 border border-gray-100 shadow-sm text-center">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-xs mb-6 block">Investissement Stratégique</span>
              <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">Pourquoi une identité visuelle professionnelle ?</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 font-medium">
                <p>Un bon branding permet de :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                  {[
                    "Renforcer la crédibilité de votre structure",
                    "Développer une image professionnelle",
                    "Vous démarquer de la concurrence",
                    "Communiquer de manière cohérente",
                    "Valoriser vos projets ou produits",
                    "Faciliter la confiance des partenaires ou clients"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a24d]/20 flex items-center justify-center text-[#c9a24d]">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-black text-black pt-6 border-t border-gray-100">
                  Une identité visuelle impactante est un investissement stratégique, pas un simple design.
                </p>
              </div>
            </section>

            {/* Bloc Services Branding */}
            <header className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Branding & identité visuelle | Nexalli</h2>
              <p className="text-gray-500 text-xl">L'excellence graphique pour votre structure.</p>
            </header>
            {renderProductGrid(BRANDING_SERVICES)}

            {/* Bloc Packs Branding */}
            <header className="text-center mb-16 mt-24">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">PACKS BRANDING COMPLETS</h2>
              <p className="text-gray-500 text-xl">Des solutions intégrées pour une image forte dès le premier jour.</p>
            </header>
            {renderProductGrid(BRANDING_PACKS)}

            {/* Bloc Pour qui ? */}
            <section className="bg-black text-white rounded-[3rem] p-16 mb-24 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a24d] opacity-10 blur-3xl"></div>
              <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">Pour qui est ce service ?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                {[
                  "Entrepreneurs et indépendants", "TPE / PME", 
                  "Associations solidaires", "Projets citoyens", 
                  "Créateurs de marques", "Structures locales"
                ].map((target, i) => (
                  <div key={i} className="border border-white/20 p-4 rounded-xl font-bold uppercase tracking-tight text-sm">
                    {target}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleExternalLink(SOCIAL_LINKS.instagram)}
                className="bg-white text-black px-12 py-5 rounded-2xl font-black hover:bg-[#c9a24d] transition-all flex items-center space-x-3 mx-auto"
              >
                <i className="fa-brands fa-instagram text-2xl"></i>
                <span>SUIVRE NOS RÉALISATIONS SUR INSTAGRAM</span>
              </button>
            </section>

            {/* Galerie Méthodologie */}
            <header className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Notre méthodologie</h2>
              <p className="text-gray-500 text-xl">L'art de sculpter votre image étape par étape.</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
              {[
                "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541462608141-ad6019702214?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="rounded-[2rem] overflow-hidden h-64 shadow-lg border-4 border-white transform hover:rotate-2 transition-transform duration-500">
                  <img src={img} className="w-full h-full object-cover" alt="Méthodologie" />
                </div>
              ))}
            </div>

            {/* Pourquoi Nexalli ? */}
            <section className="bg-gray-50 rounded-[3rem] p-16 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Pourquoi choisir Nexalli ?</h2>
                  <div className="space-y-6">
                    {[
                      { t: "Vision claire & pédagogique", d: "Pas de jargon technique, nous avançons ensemble." },
                      { t: "Branding adapté", d: "Des tarifs justes pour les associations et créateurs." },
                      { t: "Cohérence totale", d: "Image, site et communication en parfaite harmonie." },
                      { t: "Accompagnement humain", d: "Ici, pas de graphisme robotique ou impersonnel." }
                    ].map((item, i) => (
                      <div key={i} className="flex space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-[#c9a24d] shrink-0">
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div>
                          <h4 className="font-black uppercase text-sm tracking-tighter">{item.t}</h4>
                          <p className="text-gray-500 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-black text-white p-12 rounded-[2.5rem] shadow-2xl relative">
                   <p className="text-xl leading-relaxed mb-10 italic">
                    "On crée une image qui vous représente réellement. Devis personnalisé sous 48h."
                   </p>
                   <div className="space-y-4 pt-10 border-t border-white/20">
                     <p className="font-black text-[#c9a24d] uppercase tracking-widest text-xs">Vos projets nos actions</p>
                     <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Créer votre identité visuelle avec Nexalli.</h3>
                   </div>
                </div>
              </div>
            </section>

            {/* Bloc Social Final */}
            <section className="mt-24 text-center">
              <h2 className="text-2xl font-black uppercase mb-10 tracking-[0.2em]">Rejoignez notre cercle digital</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { icon: 'fa-instagram', link: SOCIAL_LINKS.instagram, color: 'hover:text-[#E4405F]' },
                  { icon: 'fa-youtube', link: SOCIAL_LINKS.youtube, color: 'hover:text-[#FF0000]' },
                  { icon: 'fa-facebook', link: SOCIAL_LINKS.facebook, color: 'hover:text-[#1877F2]' },
                  { icon: 'fa-tiktok', link: SOCIAL_LINKS.tiktok, color: 'hover:text-black' },
                  { icon: 'fa-whatsapp', link: SOCIAL_LINKS.whatsapp, color: 'hover:text-[#25D366]' },
                  { icon: 'fa-envelope', link: `mailto:${contactEmail}`, color: 'hover:text-[#c9a24d]' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    className={`w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl transition-all hover:-translate-y-2 ${social.color}`}
                  >
                    <i className={`fa-brands ${social.icon} ${social.icon === 'fa-envelope' ? 'fa-solid' : ''}`}></i>
                  </a>
                ))}
              </div>
            </section>
          </div>
        );

      case Page.Events:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <header className="text-center mb-16">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Expériences Immersives</span>
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Types d'événements organisés</h2>
              <p className="text-gray-500 text-xl max-w-2xl mx-auto">De l'idée à la réalisation, nous orchestrons vos moments forts.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              {EVENT_TYPES.map((type, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img src={type.imageUrl} alt={type.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black text-xl shadow-lg">
                        <i className={`fa-solid ${type.icon}`}></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-4 leading-tight uppercase tracking-tighter">{type.title}</h3>
                    <div className="space-y-3 flex-grow">
                      {type.points.map((pt, i) => (
                        <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                          <i className="fa-solid fa-chevron-right text-[#c9a24d] mr-3 text-[10px]"></i>
                          {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <header className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Packs Entreprise</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              {EVENT_ENTERPRISE_PACKS.map((product, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-8 flex flex-col">
                       <span className="text-white font-black uppercase tracking-tighter text-lg">{product.priceInfo}</span>
                       <span className="text-white/70 text-[10px] font-black uppercase">Délai : {product.delay}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-3 leading-tight uppercase tracking-tighter">{product.title}</h3>
                    <div className="space-y-3 mb-8 flex-grow">
                      {product.points.map((pt: string, i: number) => (
                        <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                          <i className="fa-solid fa-check text-[#c9a24d] mr-3"></i>
                          {pt}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleExternalLink(product.link || '')}
                      className="bg-black text-white py-5 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all shadow-xl flex items-center justify-center space-x-3"
                    >
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                      <span>COMMANDER</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <header className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Tarif adapté pour association</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
              {EVENT_ASSOCIATION_PACKS.map((product, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-8 flex flex-col">
                       <span className="text-white font-black uppercase tracking-tighter text-lg">{product.priceInfo}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-3 leading-tight uppercase tracking-tighter">{product.title}</h3>
                    <div className="space-y-3 mb-8 flex-grow">
                      {product.points.map((pt: string, i: number) => (
                        <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                          <i className="fa-solid fa-check text-[#c9a24d] mr-3"></i>
                          {pt}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleExternalLink(product.link || '')}
                      className="bg-black text-white py-5 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all flex items-center justify-center space-x-3"
                    >
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                      <span>COMMANDER</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case Page.Training:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <header className="text-center mb-16">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Académie Nexalli</span>
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Nos Formations Digitales</h2>
              <p className="text-gray-500 text-xl max-w-2xl mx-auto">Propulsez vos compétences avec nos guides stratégiques au format PDF.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20">
              {FORMATIONS_PRODUCTS.map((product, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black text-xl shadow-lg">
                        <i className={`fa-solid ${product.icon}`}></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-2 leading-tight uppercase tracking-tighter">{product.title}</h3>
                    <p className="text-[#c9a24d] font-bold text-sm mb-4">Objectif : {product.objective}</p>
                    <div className="space-y-2 mb-8 flex-grow">
                      {product.points.map((pt, i) => (
                        <div key={i} className="flex items-start text-sm font-bold text-gray-500">
                          <i className="fa-solid fa-check-circle text-[#c9a24d] mr-3 mt-1"></i>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleExternalLink(product.link || '')}
                      className="w-full bg-black text-white py-5 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all flex items-center justify-center space-x-3"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>METTRE AU PANIER</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case Page.WebDev:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <header className="text-center mb-16">
              <span className="text-[#c9a24d] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Haute Couture Digitale</span>
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Nos types de site web</h2>
              <p className="text-gray-500 text-xl max-w-2xl mx-auto">Des solutions sur mesure pour chaque étape de votre croissance.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
              {WEB_PRODUCTS.map((product, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-8 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#c9a24d] rounded-xl flex items-center justify-center text-black text-xl">
                        <i className={`fa-solid ${product.icon}`}></i>
                      </div>
                      <span className="text-white font-black uppercase tracking-tighter text-lg">{product.priceInfo}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-3 leading-tight uppercase tracking-tighter">{product.title}</h3>
                    <div className="space-y-3 mb-8 flex-grow">
                      {product.points.map((pt: string, i: number) => (
                        <div key={i} className="flex items-center text-sm font-bold text-gray-500">
                          <i className="fa-solid fa-check text-[#c9a24d] mr-3"></i>
                          {pt}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleExternalLink(product.link || '')}
                      className="bg-black text-white px-8 py-4 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all flex items-center justify-center space-x-3"
                    >
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                      <span>COMMANDER</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case Page.Services:
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black mb-2 text-center">Architectes du Digital</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card title="Ingénierie Web" description="Sites robustes et évolutifs." icon="fa-terminal" onClick={() => setCurrentPage(Page.WebDev)} ctaText="Voir les packs Web" />
              <Card title="Branding" description="Identité de marque mémorable." icon="fa-signature" onClick={() => setCurrentPage(Page.Branding)} />
              <Card title="Marketing" description="ROI maximal via Ads." icon="fa-gauge-high" onClick={() => setCurrentPage(Page.SocialMedia)} />
            </div>
          </div>
        );

      case Page.Contact:
        return (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-black p-12 text-white text-center">
                <h2 className="text-4xl font-black mb-4">Entrez dans le Cercle</h2>
                <p className="text-[#c9a24d] font-bold text-lg">Votre succès commence ici.</p>
              </div>
              <div className="p-12">
                <button onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)} className="w-full py-6 bg-black text-white rounded-3xl font-black text-2xl hover:bg-[#c9a24d] hover:text-black transition-all flex items-center justify-center space-x-4">
                  <i className="fa-brands fa-whatsapp text-3xl"></i>
                  <span>LANCER MON PROJET SUR WHATSAPP</span>
                </button>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-black tracking-tighter mb-6 block">NEXALLI <span className="text-[#c9a24d]">.</span></span>
              <p className="text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">Redéfinissons ensemble les standards du web moderne.</p>
            </div>
            <div>
              <h4 className="text-[#c9a24d] font-black uppercase text-xs mb-6">Expertises</h4>
              <ul className="space-y-4 text-gray-400 font-bold text-sm">
                <li><button onClick={() => setCurrentPage(Page.WebDev)} className="hover:text-white">Web Development</button></li>
                <li><button onClick={() => setCurrentPage(Page.Branding)} className="hover:text-white">Visual Branding</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c9a24d] font-black uppercase text-xs mb-6">Contact</h4>
              <p className="text-gray-400 font-bold text-sm">{contactEmail}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 text-center text-[10px] font-black uppercase tracking-widest text-gray-500">
            <p>© 2026 NEXALLI DIGITAL GROUP. TOUS DROITS RÉSERVÉS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
