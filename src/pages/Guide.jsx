import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrench, ClipboardList, Headphones, TrendingUp, Award, BarChart3, Cloud, Zap, Monitor, DollarSign } from 'lucide-react';

const Guide = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const gmaoBenefits = [
        {
            icon: Wrench,
            title: 'Les techniciens',
            description: 'Faciliter les interventions. Documentation, historique et planning seront centralisés dans une application rapidement accessible.'
        },
        {
            icon: ClipboardList,
            title: 'Le responsable',
            description: 'Assister le responsable maintenance dans sa gestion des interventions, du stock, du préventif, des sous-traitants et de ses ressources humaines.'
        },
        {
            icon: Headphones,
            title: 'Les services satellites',
            description: 'Éviter les relances et oublis en standardisant les demandes dans la GMAO, les services seront alertés de l\'évolution de leurs demandes.'
        },
        {
            icon: TrendingUp,
            title: 'La direction',
            description: 'Afin de prendre des décisions (investissement, suppression, remplacement...), les indicateurs aideront à l\'analyse du parc.'
        },
        {
            icon: Award,
            title: 'La qualité',
            description: 'Support, suivi, et planification sont des points incontournables pour améliorer votre qualité et vos audits pour une certification ISO 9001.'
        },
        {
            icon: BarChart3,
            title: 'La production',
            description: 'Allonger la durée de vie des équipements, diminuer le délai de prise en charge, gérer les stocks : améliorer les performances.'
        }
    ];

    const saasBenefits = [
        {
            icon: Zap,
            title: 'DEPLOIEMENT IMMEDIAT',
            description: 'Plus besoin d\'infrastructure, profitez des performances et de la facilité d\'accès via Internet !'
        },
        {
            icon: Cloud,
            title: 'FACILITÉ DE GESTION',
            description: 'Libérez-vous des contraintes informatique de maintenance et de mise à jour des serveurs.'
        },
        {
            icon: Monitor,
            title: 'MULTI-SUPPORT',
            description: 'PC, tablette, smartphone, iOS... l\'intercompatibilité idéale des systèmes et équipements.'
        },
        {
            icon: DollarSign,
            title: 'ECONOMIQUE',
            description: 'Maîtrisez votre budget selon le nombre d\'utilisateurs. Aucun investissement initial.'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* GMAO Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 hero-pattern"></div>
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            GMAO : <span className="text-teal-400">Définition et objectif</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                            La Gestion de la Maintenance Assistée par ordinateur (souvent abrégée GMAO) a pour principal objectif d'aider les services maintenance dans leurs missions (réparer et maintenir des équipements). Également utile pour d'autres services, elle aide à améliorer les performances de l'entreprise.
                        </p>
                    </div>
                </div>
            </section>

            {/* GMAO Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            GMAO : <span className="text-teal-600">Les bénéfices</span>
                        </h2>
                        <p className="text-xl text-slate-600">Pour qui, pour quoi ?</p>
                        <p className="text-md text-slate-500 mt-2">Les 6 bonnes raisons de mettre en place une GMAO</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {gmaoBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group bg-slate-50 p-8 rounded-2xl border border-slate-200/50 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                                    <benefit.icon className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SaaS Section */}
            <section id="saas" className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <div className="container">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Le SaaS, qu'est-ce que c'est ?
                        </h2>
                        <p className="text-lg leading-relaxed text-white/90">
                            Le SaaS (Software as a Service) désigne une solution logicielle hébergée sur des serveurs distants de l'entreprise et accessible via une connexion Internet. Le mode SaaS, dit aussi Full Web, est un mode de location de logiciel en plein essor depuis quelques années grâce aux nombreux avantages qu'il apporte aux entreprises.
                        </p>
                    </div>
                </div>
            </section>

            {/* SaaS Benefits Section */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {saasBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                            >
                                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100 transition-colors">
                                    <benefit.icon className="w-10 h-10 text-orange-500" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guide;
