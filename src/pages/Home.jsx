import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Activity, BarChart3, ShieldCheck, Quote } from 'lucide-react';
import Button from '../components/Button';
import heroBg from '../assets/hero-bg-modern.jpg';
import dashboardPreview from '../assets/dashboard-preview.png';
import founderImg from '../assets/founder.png';
import founderImg2 from '../assets/founder2.png';
import founderImg3 from '../assets/founder3.png';
import VisualDiscovery from '../components/VisualDiscovery';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-100">
            {/* ... */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={heroBg} alt="Background Usine" className="w-full h-full object-cover grayscale-[30%] brightness-[0.8]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100/98 via-slate-100/90 to-slate-200/60 backdrop-blur-[1px]"></div>
                </div>

                <div className="container relative z-10 text-center max-w-5xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary-dark text-sm font-semibold mb-8 shadow-sm animate-fade-in hover:shadow-md transition-shadow">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        La GMAO logix nouvelle génération pour votre entreprise
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] animate-fade-in text-white tracking-tight drop-shadow-lg">
                        Pilotez votre maintenance avec <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white relative pb-2">
                            Simplicité et Efficacité
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7959 1.84997 197.822 -6.44998 197.822 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                        </span>
                    </h1>

                    <p className="text-xl text-slate-100 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100 drop-shadow-md font-medium">
                        Une plateforme SaaS complète pour gérer vos équipements, planifier vos interventions et optimiser vos stocks. Centralisez tout, de la maintenance préventive aux ordres de travail.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
                        <Link to="/contact#test">
                            <Button variant="primary" icon={ArrowRight} className="w-full sm:w-auto text-lg px-8 py-4">
                                Testez le demo
                            </Button>
                        </Link>
                        <Link to="/visuel-gmaologix">
                            <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4 text-slate-700">
                                Voir les modules
                            </Button>
                        </Link>
                    </div>

                    {/* Dashboard Preview Mockup */}
                    <div className="mt-20 relative mx-auto max-w-6xl animate-fade-in delay-300 group perspective-1000">
                        <div className="absolute inset-x-0 -top-20 -bottom-20 bg-gradient-to-t from-slate-100 via-transparent to-transparent z-20"></div>

                        {/* Main App Image */}
                        <div className="relative rounded-3xl border border-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100/40 p-4 transform transition-transform duration-700 hover:rotate-x-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                            <img
                                src={dashboardPreview}
                                alt="Dashboard GMAO Interface"
                                className="rounded-2xl w-full h-auto shadow-sm border border-slate-200/80"
                            />

                            {/* Floating Stats Cards */}
                            <div className="absolute -left-12 top-20 hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
                                <div className="glass-card p-4 rounded-xl flex items-center gap-4 min-w-[200px]">
                                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Ordres de Travail</p>
                                        <p className="text-xl font-bold text-dark">Actifs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-8 bottom-32 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
                                <div className="glass-card p-4 rounded-xl flex items-center gap-4 min-w-[200px]">
                                    <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Maintenance</p>
                                        <p className="text-xl font-bold text-dark">Préventive</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By / Stats Strip */}
            <section className="py-10 border-y border-slate-200 bg-slate-100/30 backdrop-blur-sm">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                        <div className="p-4">
                            <h3 className="text-3xl font-bold text-primary mb-1">+500</h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Équipements</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl font-bold text-primary mb-1">100%</h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Traçabilité</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl font-bold text-primary mb-1">-25%</h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Temps d'Arrêt</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl font-bold text-primary mb-1">Web/Mobile</h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Multi-supports</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-24 relative bg-slate-100">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Fonctionnalités</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark">Gérez votre maintenance de A à Z</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            Une suite d'outils complète pour digitaliser vos opérations de maintenance industrielle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group bg-white/70">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">Équipements & Stocks</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Suivez l'historique complet de vos actifs et gérez vos stocks de pièces critiques en temps réel.
                            </p>
                            <Link to="/features" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Voir les modules <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group bg-white/70">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">Interventions</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Planifiez vos maintenances préventives et suivez les ordres de travail curatifs sur le terrain.
                            </p>
                            <Link to="/features" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Voir les modules <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group bg-white/70">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <BarChart3 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">Rapports & KPI</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Visualisez vos indicateurs clés (MTBF, MTTR) avec des tableaux de bord dynamiques et exportables.
                            </p>
                            <Link to="/features" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Voir les modules <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section - Enhanced Redesign */}
            {/* Founder Section - Dual Team Enhanced */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>

                <div className="container px-6 mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark flex items-center justify-center gap-3">
                            <span className="w-12 h-[2px] bg-primary/20 hidden md:block"></span>
                            L’équipe fondatrice
                            <span className="w-12 h-[2px] bg-primary/20 hidden md:block"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {/* Achraf Assioui */}
                        <div className="relative rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden bg-slate-900 p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">
                            <Quote className="absolute top-0 right-0 text-white/5 w-32 h-32 -mr-8 -mt-8 pointer-events-none" />
                            <div className="mb-6 relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative w-24 h-24 rounded-full border-4 border-white/10 overflow-hidden shadow-xl bg-slate-800">
                                    <img src={founderImg2} alt="Achraf Assioui" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-white text-[10px] md:text-[11px] leading-relaxed italic font-medium opacity-90 mb-6 quotes flex-grow">
                                    « En tant qu’ingénieur spécialisé en paramétrage et déploiement de systèmes GMAO, j’ai assuré la structuration des référentiels techniques, la modélisation des équipements, ainsi que l’intégration des processus de maintenance et de gestion des pièces de rechange dans la plateforme GMAOlogix. Mon rôle a été de garantir que la solution reflète fidèlement les réalités opérationnelles de la maintenance industrielle, tout en offrant une expérience utilisateur fluide et performante. »
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <h4 className="text-lg font-bold text-white leading-tight">Achraf Assiouj</h4>
                                    <p className="text-primary font-bold tracking-wide uppercase text-[9px] mt-1.5 leading-tight">
                                        Ingénieur en Paramétrage GMAO & Digitalisation Maintenance — Co-fondateur
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mohammed El Habib Jalissi */}
                        <div className="relative rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden bg-slate-900 p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 transform lg:scale-105 z-20">
                            <Quote className="absolute top-0 right-0 text-white/5 w-32 h-32 -mr-8 -mt-8 pointer-events-none" />
                            <div className="mb-6 relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative w-24 h-24 rounded-full border-4 border-white/10 overflow-hidden shadow-xl bg-slate-800">
                                    <img src={founderImg} alt="Mohammed El Habib Jalissi" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-white text-[10px] md:text-[11px] leading-relaxed italic font-medium opacity-90 mb-6 quotes flex-grow">
                                    « En tant qu’ingénieur en planification industrielle, j’ai conçu et piloté le développement de la solution SaaS GMAO GMAOlogix en collaboration avec mon équipe. En m’appuyant sur notre expérience terrain et sur l’analyse des processus industriels, notre objectif a été de créer une plateforme intelligente, capable de structurer la maintenance, d’optimiser la planification des interventions et d’améliorer la disponibilité des équipements. Cette solution permet aux PME de passer d’une maintenance réactive à une maintenance pilotée par la donnée et la prévision. »
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <h4 className="text-lg font-bold text-white leading-tight">Mohammed El Habib Jalissi</h4>
                                    <p className="text-primary font-bold tracking-wide uppercase text-[9px] mt-1.5 leading-tight">
                                        Ingénieur en Planification Industrielle — Co-fondateur de GMAOlogix
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Zakaria El Sahraoui */}
                        <div className="relative rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden bg-slate-900 p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">
                            <Quote className="absolute top-0 right-0 text-white/5 w-32 h-32 -mr-8 -mt-8 pointer-events-none" />
                            <div className="mb-6 relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative w-24 h-24 rounded-full border-4 border-white/10 overflow-hidden shadow-xl bg-slate-800">
                                    <img src={founderImg3} alt="Zakaria El Sahraoui" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-white text-[10px] md:text-[11px] leading-relaxed italic font-medium opacity-90 mb-4 quotes flex-grow">
                                    « En tant qu’ingénieur maintenance, j’ai contribué à la définition des workflows opérationnels, à la structuration des plans de maintenance préventive et à l’optimisation des interventions techniques intégrées dans GMAOlogix. Mon objectif a été de traduire les besoins réels des équipes terrain en fonctionnalités concrètes, permettant de fiabiliser les équipements, réduire les arrêts non planifiés et améliorer durablement la performance industrielle. »
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <h4 className="text-lg font-bold text-white leading-tight">Zakaria El Sahraoui</h4>
                                    <p className="text-primary font-bold tracking-wide uppercase text-[9px] mt-1.5 leading-tight">
                                        Ingénieur Maintenance & Performance des Équipements — Co-fondateur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
