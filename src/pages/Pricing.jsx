import React, { useRef, useState } from 'react';
import { Check, HelpCircle, HardDrive, Phone, RefreshCw, Shield, Zap, Users, Building, Mail, Smartphone, FileText, Settings, Rocket, Wrench } from 'lucide-react';
import jsPDF from 'jspdf';
import Button from '../components/Button';

const Pricing = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        civility: 'M.',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        plan: '',
        message: ''
    });

    const plans = [
        {
            name: "STARTER",
            price: "1 200",
            rawValue: 1200,
            monthly: true,
            color: "from-blue-500 to-cyan-500",
            glow: "shadow-cyan-500/20",
            features: [
                "3 utilisateurs",
                "Fonctions de base",
                "500 équipements",
                "Support Email"
            ],
            id: "starter"
        },
        {
            name: "BUSINESS",
            price: "2 800",
            rawValue: 2800,
            monthly: true,
            color: "from-violet-600 to-purple-600",
            glow: "shadow-purple-500/20",
            features: [
                "10 utilisateurs",
                "Toutes les fonctionnalités",
                "2000 équipements",
                "Support Prioritaire"
            ],
            recommended: true,
            id: "business"
        },
        {
            name: "PREMIUM",
            price: "5 500",
            rawValue: 5500,
            monthly: true,
            color: "from-amber-500 to-orange-600",
            glow: "shadow-orange-500/20",
            features: [
                "Utilisateurs illimités",
                "Toutes fonctions + API",
                "Équipements illimités",
                "Support 24/7",
                "Personnalisation"
            ],
            id: "premium"
        }
    ];

    const services = [
        {
            title: "Paramétrage initial",
            price: "3 500 DH",
            type: "one-time",
            icon: Settings
        },
        {
            title: "Formation on-site",
            price: "2 500 DH",
            type: "1 jour",
            icon: Users
        },
        {
            title: "Développement sur-mesure",
            price: "450 DH",
            type: "par heure",
            icon: Wrench
        },
        {
            title: "Intégration ERP/Autre",
            price: "Sur devis",
            type: "Personnalisé",
            icon: Rocket
        }
    ];

    const scrollToForm = (planId) => {
        setFormData(prev => ({ ...prev, plan: planId }));
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const generatePDF = (e) => {
        e.preventDefault();

        const selectedPlan = plans.find(p => p.id === formData.plan);
        if (!selectedPlan) {
            alert('Veuillez sélectionner un forfait');
            return;
        }

        const today = new Date().toLocaleDateString('fr-FR');
        // Calculate Annual Total (rawValue is now Annual Price)
        const annualPrice = selectedPlan.rawValue;
        const totalHT = annualPrice;
        const tva = (totalHT * 0.2);
        const totalTTC = (totalHT * 1.2);

        // Create PDF
        const doc = new jsPDF();

        // Header with teal background
        doc.setFillColor(20, 184, 166);
        doc.rect(0, 0, 210, 35, 'F');

        // Logo text
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont("helvetica", "bold");
        doc.text("GMAOlogix", 15, 20);

        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text("Devis Officiel - Solution GMAO SaaS", 15, 28);

        // Date
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        doc.text(`Date: ${today}`, 160, 15);

        // Client Information Section
        let y = 50;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(20, 184, 166);
        doc.text("Informations Client", 15, y);

        y += 10;
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`Client: ${formData.civility} ${formData.firstName} ${formData.lastName}`, 15, y);

        y += 6;
        doc.text(`Societe: ${formData.company}`, 15, y);
        y += 6;
        doc.text(`Email: ${formData.email}`, 15, y);
        y += 6;
        doc.text(`Telephone: +212 ${formData.phone}`, 15, y);

        // Plan Details Section
        y += 15;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(20, 184, 166);
        doc.text("Details du Forfait (Annuel)", 15, y);

        // Table header
        y += 10;
        doc.setFillColor(20, 184, 166);
        doc.rect(15, y - 5, 180, 8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("Description", 17, y);
        doc.text("Prix Unitaire HT", 100, y);
        doc.text("Duree", 140, y);
        doc.text("Total HT", 170, y);

        // Table row 1 - Subscription
        y += 8;
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        const description = `Abonnement Pack ${selectedPlan.name}`;

        doc.text(description, 17, y);
        doc.text(`${formatCurrency(selectedPlan.price)} MAD/an`, 100, y);
        doc.text("12 Mois", 140, y);
        doc.text(`${formatCurrency(annualPrice)} MAD`, 170, y);

        // Features list small print
        y += 5;
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        // doc.text(`Inclus: ${selectedPlan.features.slice(0, 3).join(', ')}...`, 17, y);

        // Totals Section
        y += 15;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);

        // Draw line
        doc.setDrawColor(200, 200, 200);
        doc.line(15, y, 195, y);
        y += 10;

        doc.text(`Sous-total HT:`, 115, y);
        doc.setFont("helvetica", "bold");
        doc.text(`${formatCurrency(totalHT)} MAD`, 195, y, { align: 'right' });

        y += 7;
        doc.setFont("helvetica", "normal");
        doc.text(`TVA (20%):`, 115, y);
        doc.setFont("helvetica", "bold");
        doc.text(`${formatCurrency(tva.toFixed(2))} MAD`, 195, y, { align: 'right' });

        y += 10;
        doc.setFontSize(12);
        doc.setTextColor(20, 184, 166);
        doc.text(`Total TTC (Annuel):`, 110, y);
        doc.setFont("helvetica", "bold");
        doc.text(`${formatCurrency(totalTTC.toFixed(2))} MAD`, 195, y, { align: 'right' });

        // Information note
        y += 20;
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.setFont("helvetica", "normal");
        doc.text("Note: Ce devis est calculé sur une base annuelle incluant 12 mois d'abonnement.", 15, y);

        // Footer
        doc.setTextColor(100, 100, 100);
        doc.text("GMAOlogix SARL", 105, 270, { align: 'center' });
        doc.text("Technopark Casablanca, Route de Nouaceur, Casablanca, Maroc", 105, 275, { align: 'center' });
        doc.text("Email: contact@gmaologix.com | www.gmaologix.com", 105, 280, { align: 'center' });
        doc.setFont("helvetica", "italic");
        doc.text("Ce devis est valable 30 jours a compter de la date d'emission.", 105, 287, { align: 'center' });

        // Save the PDF
        doc.save(`Devis_GMAOlogix_${formData.company || 'Client'}.pdf`);

        // Show success message
        alert('Le devis PDF a ete genere avec succes!');
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Header */}
            <div className="container text-center mb-20 animate-fade-in">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
                    Tarification
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                    Choisissez la formule <span className="text-gradient">adaptée à vos besoins</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                    Des solutions flexibles pour les équipes de toutes tailles.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="container max-w-7xl mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-2 flex flex-col ${plan.recommended ? 'ring-2 ring-primary shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-xl hover:shadow-2xl'}`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                            )}
                            {plan.recommended && (
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Recommandé
                                </div>
                            )}

                            <div className="p-8 pb-0">
                                <h3 className="font-bold text-2xl text-slate-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    <span className="text-lg font-bold text-primary">DH</span>
                                    <span className="text-slate-500 font-medium">/ an HT</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
                                    Facturation annuelle
                                </p>
                            </div>

                            <div className="p-8 pt-0 flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 pt-0 mt-auto">
                                <Button
                                    onClick={() => scrollToForm(plan.id)}
                                    className={`w-full justify-center py-4 text-base font-bold ${plan.recommended ? 'shadow-lg shadow-primary/30' : '!bg-slate-100 !text-slate-900 hover:!bg-slate-200'}`}
                                    variant={plan.recommended ? 'primary' : 'secondary'}
                                >
                                    Choisir ce forfait
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Services */}
            <div className="container max-w-6xl mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Services Additionnels</h2>
                    <p className="text-slate-500">Un accompagnement sur-mesure pour votre réussite</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                                <span className="font-bold text-primary">{service.price}</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wide font-medium">{service.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quote Form */}
            <div ref={formRef} className="container max-w-4xl scroll-mt-32">
                <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-200 bg-white/80 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 blur-[80px] rounded-full -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10"></div>

                    <h2 className="text-3xl font-bold text-center text-dark mb-10">
                        Demander un <span className="text-gradient">devis</span>
                    </h2>

                    <form onSubmit={generatePDF} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl flex items-center px-4 py-3">
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mr-4 border-r border-slate-200 pr-4">Civilité</span>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="radio" name="civility" value="M."
                                            checked={formData.civility === 'M.'} onChange={handleInputChange}
                                            className="accent-primary"
                                        />
                                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">M.</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="radio" name="civility" value="Mme"
                                            checked={formData.civility === 'Mme'} onChange={handleInputChange}
                                            className="accent-primary"
                                        />
                                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">Mme</span>
                                    </label>
                                </div>
                            </div>
                            <input type="text" name="firstName" placeholder="Prénom" onChange={handleInputChange} required className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400" />
                            <input type="text" name="lastName" placeholder="Nom" onChange={handleInputChange} required className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex">
                                <div className="bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl px-4 py-3 text-slate-500 flex items-center text-sm font-medium">
                                    +212
                                </div>
                                <input type="tel" name="phone" placeholder="Téléphone" onChange={handleInputChange} required className="w-full bg-white border border-slate-200 rounded-r-xl px-4 py-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400" />
                            </div>
                            <input type="email" name="email" placeholder="Email professionnel" onChange={handleInputChange} required className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400" />
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <input type="text" name="company" placeholder="Société" onChange={handleInputChange} required className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400" />

                            <div className="relative">
                                <select name="plan" value={formData.plan} onChange={handleInputChange} required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                                    <option value="" disabled>Choisir votre formule</option>
                                    {plans.map((p) => (
                                        <option key={p.id} value={p.id}>{p.name} - {p.price} DH/an</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <HelpCircle size={18} />
                                </div>
                            </div>

                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3 text-sm text-amber-800">
                                <div className="shrink-0 mt-0.5"><Users size={18} /></div>
                                <div>
                                    <span className="font-bold">Attention:</span> Le devis sera généré pour un engagement annuel (12 mois). Pour d'autres durées, contactez-nous.
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <Button type="submit" variant="primary" className="text-lg px-12 py-3 shadow-glow gap-2">
                                <FileText className="w-5 h-5" />
                                Générer mon Devis (PDF)
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
