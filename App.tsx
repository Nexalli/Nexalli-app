
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { SOCIAL_LINKS, WEB_PRODUCTS, WEB_OPTIONS, FORMATIONS_PRODUCTS, EVENT_TYPES, EVENT_ENTERPRISE_PACKS, EVENT_ASSOCIATION_PACKS, BRANDING_SERVICES, BRANDING_PACKS, SOCIAL_PLATFORMS, SOCIAL_ENTERPRISE_PACKS, SOCIAL_ASSOCIATION_PACKS, NAV_ITEMS } from './constants';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const contactEmail = "contact@nexalli.com";

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-20 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
      <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
        {title}<span className="text-[#c9a24d]">.</span>
      </h2>
      <p className="text-[#c9a24d] font-bold uppercase tracking-[0.5em] text-[10px] md:text-sm">{subtitle}</p>
    </div>
  );

  const renderProductCard = (product: any) => (
    <div className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col h-full gold-glow">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
        {product.priceInfo && (
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="text-white text-[10px] font-black uppercase tracking-widest">{product.priceInfo}</span>
          </div>
        )}
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#c9a24d] flex items-center justify-center text-black">
            <i className={`fa-solid ${product.icon || 'fa-star'} text-xl`}></i>
          </div>
          <h3 className="text-xl font-black uppercase tracking-tighter text-white">{product.title}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">{product.description}</p>
        <div className="space-y-3 mb-10 flex-grow">
          {product.points.map((pt: string, i: number) => (
            <div key={i} className="flex items-start text-[11px] font-bold text-gray-500 uppercase tracking-tight">
              <i className="fa-solid fa-chevron-right text-[#c9a24d] mr-3 mt-1 text-[8px]"></i>
              {pt}
            </div>
          ))}
        </div>
        <button 
          onClick={() => handleExternalLink(product.link || SOCIAL_LINKS.whatsapp)}
          className="w-full bg-[#c9a24d] text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all transform active:scale-95 shadow-2xl flex items-center justify-center space-x-3"
        >
          <span>{product.ctaText || 'Commander'}</span>
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div className="animate-in fade-in zoom-in duration-1000 min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="max-w-6xl px-4 hero-gradient p-12 rounded-[5rem]">
              <span className="text-[#c9a24d] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block animate-pulse">L'agence Numérique Haute Couture</span>
              <h1 className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
                Dominez <br/><span className="text-[#c9a24d]">le digital.</span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-500 max-w-3xl mx-auto mb-16 font-light leading-relaxed uppercase tracking-tighter">
                Stratégie, design et ingénierie pour les marques qui refusent la médiocrité.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button onClick={() => setCurrentPage(Page.Services)} className="bg-white text-black px-12 py-7 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#c9a24d] transition-all transform hover:scale-105">
                  Explorer l'univers
                </button>
                <button onClick={() => setCurrentPage(Page.Contact)} className="border-2 border-white/20 text-white px-12 py-7 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                  Contact Direct
                </button>
              </div>
            </div>
          </div>
        );

      case Page.Services:
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <PageHeader title="Le Cercle" subtitle="Nos domaines d'expertise stratégique" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: Page.WebDev, t: 'Ingénierie Web', d: 'Architectures robustes et interfaces immersives.', i: 'fa-terminal' },
                { id: Page.Branding, t: 'Brand Identity', d: 'Identités visuelles mémorables et charismatiques.', i: 'fa-signature' },
                { id: Page.SocialMedia, t: 'Social Growth', d: 'Stratégies de croissance et influence organique.', i: 'fa-bolt' }
              ].map(s => (
                <div key={s.id} onClick={() => setCurrentPage(s.id)} className="glass-card rounded-[3rem] p-12 cursor-pointer group text-center hover:bg-[#c9a24d]">
                  <div className="w-20 h-20 rounded-full bg-[#c9a24d] group-hover:bg-black flex items-center justify-center mx-auto mb-10 transition-colors">
                    <i className={`fa-solid ${s.i} text-3xl text-black group-hover:text-[#c9a24d]`}></i>
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white group-hover:text-black mb-4">{s.t}</h3>
                  <p className="text-gray-500 group-hover:text-black/70 font-medium text-sm leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case Page.WebDev:
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <PageHeader title="Web Build" subtitle="Performance, Sécurité & Design Immersif" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-24">
              {WEB_PRODUCTS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
            <PageHeader title="Options" subtitle="Évolutivité & Maintenance" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WEB_OPTIONS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
          </div>
        );

      case Page.Branding:
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <PageHeader title="Branding" subtitle="L'art de la distinction visuelle" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-24">
              {BRANDING_SERVICES.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
            <PageHeader title="Elite Packs" subtitle="Solutions d'identité complètes" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BRANDING_PACKS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
          </div>
        );

      case Page.SocialMedia:
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <PageHeader title="Social" subtitle="Influence & Domination Sociale" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              {SOCIAL_PLATFORMS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>

            {/* Nouveau Bloc : Création à la carte */}
            <div className="mb-24">
              <PageHeader title="À La Carte" subtitle="Solutions sur-mesure pour vos réseaux" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="glass-card rounded-[3rem] p-10 md:p-14 border-l-4 border-l-[#c9a24d]">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center">
                    <i className="fa-solid fa-palette text-[#c9a24d] mr-4"></i>
                    Contenu Individuel
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Vidéo TikTok", price: "30 € / vidéo" },
                      { label: "Reel Instagram", price: "30 € / vidéo" },
                      { label: "Visuel post", price: "20 €" },
                      { label: "Story (lot de 5)", price: "25 €" },
                      { label: "Texte / légende optimisée", price: "10 €" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 group hover:border-[#c9a24d]/30 transition-colors">
                        <span className="text-gray-400 font-bold uppercase text-[11px] tracking-widest">{item.label}</span>
                        <span className="text-white font-black text-sm">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)}
                    className="mt-10 w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#c9a24d] transition-all flex items-center justify-center space-x-3"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>Commander via WhatsApp</span>
                  </button>
                </div>

                <div className="glass-card rounded-[3rem] p-10 md:p-14 border-l-4 border-l-white/20">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center">
                    <i className="fa-solid fa-clock text-[#c9a24d] mr-4"></i>
                    Délais d'exécution
                  </h3>
                  <div className="space-y-8">
                    {[
                      { title: "Mise en place des comptes", desc: "Configuration technique et optimisation", time: "3 à 5 jours" },
                      { title: "Première publication", desc: "Lancement de votre nouvelle ligne éditoriale", time: "Sous 7 jours" },
                      { title: "Contenus mensuels", desc: "Production continue et planification", time: "Planifiés à l’avance" }
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-8 border-l border-white/10">
                        <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-[#c9a24d]"></div>
                        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-tight mb-2">{item.desc}</p>
                        <span className="text-[#c9a24d] font-black text-xs uppercase tracking-widest">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <PageHeader title="Stratégie" subtitle="Plans d'action Entreprises & Associations" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {SOCIAL_ENTERPRISE_PACKS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SOCIAL_ASSOCIATION_PACKS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
          </div>
        );

      case Page.Training:
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <PageHeader title="Academy" subtitle="Maîtrisez les outils de demain" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {FORMATIONS_PRODUCTS.map((p, i) => <div key={i}>{renderProductCard({...p, ctaText: 'Voir le programme'})}</div>)}
            </div>
          </div>
        );

      case Page.Events:
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <PageHeader title="Events" subtitle="Des expériences qui marquent les esprits" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {EVENT_TYPES.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
            <PageHeader title="Event Packs" subtitle="Coordination & Design Événementiel" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENT_ENTERPRISE_PACKS.map((p, i) => <div key={i}>{renderProductCard(p)}</div>)}
            </div>
          </div>
        );

      case Page.Contact:
        return (
          <div className="animate-in zoom-in duration-700 flex flex-col items-center justify-center min-h-[70vh]">
            <div className="glass-card rounded-[4rem] p-12 md:p-24 text-center max-w-4xl w-full gold-glow">
              <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">Parlons <br/><span className="text-[#c9a24d]">Futur.</span></h2>
              <p className="text-xl text-gray-500 mb-16 font-light uppercase tracking-widest">Une question ? Un projet ambitieux ? Contactez l'élite.</p>
              <button 
                onClick={() => handleExternalLink(SOCIAL_LINKS.whatsapp)} 
                className="w-full bg-white text-black py-8 rounded-3xl font-black text-xs uppercase tracking-[0.5em] hover:bg-[#c9a24d] transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center space-x-6"
              >
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                <span>Ouvrir WhatsApp</span>
              </button>
              <div className="mt-20 pt-16 border-t border-white/5 flex justify-center space-x-12 opacity-40">
                <a href={SOCIAL_LINKS.instagram} className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-instagram text-2xl"></i></a>
                <a href={SOCIAL_LINKS.tiktok} className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-tiktok text-2xl"></i></a>
                <a href={SOCIAL_LINKS.youtube} className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-youtube text-2xl"></i></a>
                <a href={SOCIAL_LINKS.facebook} className="hover:text-[#c9a24d] transition-colors"><i className="fa-brands fa-facebook text-2xl"></i></a>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="text-white text-center py-40">Section en construction...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#c9a24d]/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 blur-[150px] rounded-full"></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-[100] nav-blur px-8 py-6 flex justify-between items-center">
        <h1 
          onClick={() => setCurrentPage(Page.Home)} 
          className="text-2xl font-black tracking-tighter cursor-pointer hover:text-[#c9a24d] transition-colors"
        >
          NEXALLI<span className="text-[#c9a24d]">.</span>
        </h1>
        <button 
          onClick={() => setCurrentPage(Page.Contact)}
          className="hidden md:block bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#c9a24d] transition-colors"
        >
          Project Inquiry
        </button>
      </header>

      <main className="pt-40 pb-40 container mx-auto px-6 max-w-7xl">
        {renderContent()}
      </main>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Modern Footer */}
      <footer className="py-24 bg-black border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black uppercase mb-8">NEXALLI<span className="text-[#c9a24d]">.</span></h2>
            <p className="text-gray-500 font-medium max-w-sm leading-relaxed">Redéfinir les standards du luxe digital et de la performance algorithmique pour les acteurs de demain.</p>
          </div>
          <div>
            <h4 className="text-[#c9a24d] font-black uppercase text-[10px] tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
              {NAV_ITEMS.slice(1, 5).map(item => (
                <li key={item.id}><button onClick={() => setCurrentPage(item.id)} className="hover:text-white transition-colors">{item.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#c9a24d] font-black uppercase text-[10px] tracking-[0.3em] mb-8">Direct</h4>
            <p className="text-white font-black text-xs break-all mb-4 uppercase">{contactEmail}</p>
            <div className="flex space-x-6 text-gray-500">
               <a href={SOCIAL_LINKS.instagram} className="hover:text-white"><i className="fa-brands fa-instagram"></i></a>
               <a href={SOCIAL_LINKS.tiktok} className="hover:text-white"><i className="fa-brands fa-tiktok"></i></a>
               <a href={SOCIAL_LINKS.whatsapp} className="hover:text-white"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-gray-700">© 2026 NEXALLI DIGITAL GROUP. ALL RIGHTS RESERVED.</p>
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-gray-700">Paris / Dubai / Abidjan</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
