
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { COLORS, SOCIAL_LINKS, WEB_PRODUCTS, WEB_OPTIONS, FORMATIONS_PRODUCTS } from './constants';
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
                      className="w-full bg-black text-white py-5 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all transform active:scale-95 shadow-xl flex items-center justify-center space-x-3"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>METTRE AU PANIER</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modalités & Accompagnement Section */}
            <div className="bg-gray-100 rounded-[3rem] p-12 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-3xl font-black mb-8 uppercase tracking-tighter">Modalités</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-sm">
                      <i className="fa-solid fa-cloud-arrow-down text-3xl text-[#c9a24d] mb-4"></i>
                      <span className="font-black text-sm uppercase">Téléchargement immédiat</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-sm">
                      <i className="fa-solid fa-file-pdf text-3xl text-[#c9a24d] mb-4"></i>
                      <span className="font-black text-sm uppercase">Format PDF</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-sm">
                      <i className="fa-solid fa-mobile-screen-button text-3xl text-[#c9a24d] mb-4"></i>
                      <span className="font-black text-sm uppercase">Compatible tout support</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-sm">
                      <i className="fa-solid fa-unlock-keyhole text-3xl text-[#c9a24d] mb-4"></i>
                      <span className="font-black text-sm uppercase">Sans abonnement</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-black mb-8 uppercase tracking-tighter">Accompagnement</h4>
                  <div className="bg-black text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-[#c9a24d] font-black text-lg mb-4">Besoin d’un accompagnement ?</p>
                      <p className="text-gray-400 mb-8 font-medium">Les formations Nexalli peuvent être :</p>
                      <ul className="space-y-4 mb-10">
                        <li className="flex items-center space-x-3 font-bold">
                          <i className="fa-solid fa-circle-check text-[#c9a24d]"></i>
                          <span>Utilisées seules</span>
                        </li>
                        <li className="flex items-center space-x-3 font-bold">
                          <i className="fa-solid fa-circle-check text-[#c9a24d]"></i>
                          <span>Combinées entre elles</span>
                        </li>
                        <li className="flex items-center space-x-3 font-bold">
                          <i className="fa-solid fa-circle-check text-[#c9a24d]"></i>
                          <span>Complétées par nos experts</span>
                        </li>
                      </ul>
                      <button 
                        onClick={() => setCurrentPage(Page.Contact)}
                        className="bg-[#c9a24d] text-black px-8 py-4 rounded-xl font-black hover:bg-white transition-all"
                      >
                        NOUS CONTACTER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Délai estimé</span>
                        <span className="font-black text-black">{product.delay}</span>
                      </div>
                      <button 
                        onClick={() => handleExternalLink(product.link || '')}
                        className="bg-black text-white px-8 py-4 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all transform active:scale-95 shadow-xl flex items-center space-x-3"
                      >
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        <span>COMMANDER</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <header className="text-center mb-16 mt-24">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Nos Options</h2>
              <p className="text-gray-500 text-xl max-w-2xl mx-auto">Boostez les performances de votre site avec nos services complémentaires.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
              {WEB_OPTIONS.map((product, idx) => (
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
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Délai estimé</span>
                        <span className="font-black text-black">{product.delay}</span>
                      </div>
                      <button 
                        onClick={() => handleExternalLink(product.link || '')}
                        className="bg-black text-white px-8 py-4 rounded-2xl font-black hover:bg-[#c9a24d] hover:text-black transition-all transform active:scale-95 shadow-xl flex items-center space-x-3"
                      >
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        <span>COMMANDER</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual 3D Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {[
                "https://images.unsplash.com/photo-1614332284683-517b1a7b55a2?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1000&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="rounded-[2rem] overflow-hidden h-64 shadow-lg border-4 border-white">
                  <img src={img} className="w-full h-full object-cover" alt="3D Visualization" />
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

      case Page.Events:
        return (
          <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 duration-500">
            <div className="bg-black text-white p-16 rounded-[3rem] relative overflow-hidden">
               <div className="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Event" />
              </div>
              <div className="relative z-10">
                <i className="fa-solid fa-calendar-check text-7xl text-[#c9a24d] mb-6"></i>
                <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Événementiel de Prestige</h2>
                <button onClick={() => handleExternalLink('https://nexalli.com/organisation-evenement-professionnel/')} className="bg-[#c9a24d] text-black px-12 py-5 rounded-full font-black mt-8 hover:scale-110 transition-transform">RÉSERVER UN AUDIT</button>
              </div>
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
