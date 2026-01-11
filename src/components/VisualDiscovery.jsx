import React, { useState } from 'react';
import {
    LayoutDashboard,
    Wrench,
    Package,
    Calendar,
    BarChart2,
    Smartphone,
    Users,
    Settings,
    FileText,
    ShieldCheck,
    Zap,
    X,
    Maximize2,
    Truck,
    Cpu,
    BrainCircuit
} from 'lucide-react';

// Importing images from assets/pic_gmao4
import img1 from '../assets/pic_gmao4/AdobeExpressPhotos_17ff37947d67430e9db79903085acf6d_CopyEdited.png';
import img2 from '../assets/pic_gmao4/AdobeExpressPhotos_518deac5439b428ea248a404c91487a0_CopyEdited.png';
import img3 from '../assets/pic_gmao4/AdobeExpressPhotos_6b8b92fb021248029d0f3f37d86ce292_CopyEdited.png';
import img4 from '../assets/pic_gmao4/AdobeExpressPhotos_7cfa736e113948568dd43a5495285166_CopyEdited.png';
import img5 from '../assets/pic_gmao4/AdobeExpressPhotos_9bb81d50c2f44d698ed62bec51579be9_CopyEdited.png';
import img6 from '../assets/pic_gmao4/AdobeExpressPhotos_9eb13fea1e72476d9cbad68334ac6e78_CopyEdited.png';
import img7 from '../assets/pic_gmao4/AdobeExpressPhotos_b0ec8de626af4964b8bcf31934312d70_CopyEdited.png';
import img8 from '../assets/pic_gmao4/AdobeExpressPhotos_c1bf972979ba46a29b355b5ff78dfd1e_CopyEdited.png';
import img9 from '../assets/pic_gmao4/AdobeExpressPhotos_d84a72573d0743c1aaf7c0d74f2c600a_CopyEdited.png';
import img10 from '../assets/pic_gmao4/AdobeExpressPhotos_eb76ee5c6ced429384e123cf2bc6311d_CopyEdited.png';
import img11 from '../assets/pic_gmao4/AdobeExpressPhotos_f4bc004b33e7484aad230229ac98b393_CopyEdited.png';

const visuals = [
    {
        id: 1,
        title: "Gestion des Équipements",
        description: "Inventaire complet de votre parc machine avec classification par site, catégorie et statut critique en temps réel.",
        icon: Wrench,
        image: img1,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        id: 2,
        title: "Demandes d'Intervention",
        description: "Centralisation des demandes avec suivi de statut (Nouvelle, En cours, Validée) pour une réactivité optimale.",
        icon: FileText,
        image: img2,
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        id: 3,
        title: "Gestion des Stocks",
        description: "Suivi précis de la valeur de votre stock, alertes de seuil critique et inventaire des pièces de rechange.",
        icon: Package,
        image: img3,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        id: 4,
        title: "Tableau de Bord Premium",
        description: "Vue synthétique des indicateurs clés : disponibilité globale, ordres de travail actifs et alertes prioritaires.",
        icon: LayoutDashboard,
        image: img4,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    {
        id: 5,
        title: "Détails Intervention",
        description: "Fiche complète par intervention avec description du problème, équipement concerné et historique des actions.",
        icon: FileText,
        image: img5,
        color: "text-cyan-600",
        bg: "bg-cyan-50"
    },
    {
        id: 6,
        title: "Planning de Maintenance",
        description: "Calendrier visuel pour organiser et suivre les tâches de maintenance préventive et curative sur le mois.",
        icon: Calendar,
        image: img6,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        id: 7,
        title: "Gestion des Fournisseurs",
        description: "Annuaire intégré de vos fournisseurs avec historique des commandes et contacts directs.",
        icon: Truck,
        image: img7,
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        id: 8,
        title: "Modules GMAO",
        description: "Accès rapide à l'ensemble des fonctionnalités : Techniciens, Préventif, Curatif et Analyses IA.",
        icon: Settings,
        image: img8,
        color: "text-slate-600",
        bg: "bg-slate-100"
    },
    {
        id: 9,
        title: "Gestion des Techniciens",
        description: "Profils détaillés de vos équipes techniques avec suivi de disponibilité et compétences.",
        icon: Users,
        image: img9,
        color: "text-teal-600",
        bg: "bg-teal-50"
    },
    {
        id: 10,
        title: "Ordres de Travail",
        description: "Liste des OTs avec priorisation (Urgente, Normale) et assignation aux techniciens qualifiés.",
        icon: ShieldCheck,
        image: img10,
        color: "text-rose-600",
        bg: "bg-rose-50"
    },
    {
        id: 11,
        title: "Prévisions IA & Maintenance Prédictive",
        description: "Analyse prédictive basée sur les données capteurs (vibrations, température) pour anticiper les pannes.",
        icon: BrainCircuit,
        image: img11,
        color: "text-violet-600",
        bg: "bg-violet-50"
    }
];

const VisualDiscovery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="visual-discovery">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-[60%] -left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
                        Aperçu de l'interface
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Découvrez <span className="text-primary">Visuel GMAOlogix</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Une interface moderne et ergonomique conçue pour simplifier le quotidien de vos équipes de maintenance.
                        Puissance, clarté et efficacité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {visuals.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden bg-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        <Maximize2 size={18} /> Agrandir
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white">
                            <div className="lg:col-span-2 bg-slate-100 relative min-h-[300px] lg:min-h-[500px] flex items-center justify-center p-4 lg:p-8">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="rounded-lg shadow-lg max-h-[80vh] max-w-full object-contain"
                                />
                            </div>
                            <div className="p-6 lg:p-10 flex flex-col justify-center bg-white border-l border-slate-100">
                                <div className={`w-16 h-16 rounded-2xl ${selectedImage.bg} ${selectedImage.color} flex items-center justify-center mb-6`}>
                                    <selectedImage.icon size={32} />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                    {selectedImage.title}
                                </h3>
                                <div className="w-12 h-1 bg-primary/20 mb-6"></div>
                                <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
                                    {selectedImage.description}
                                </p>
                                <button
                                    className="w-full py-4 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-colors"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    Fermer l'aperçu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default VisualDiscovery;
