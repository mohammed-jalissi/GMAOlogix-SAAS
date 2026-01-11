import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Building2, Briefcase, Users, ShieldCheck, Globe, Send, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Informations générales',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (location.hash === '#test') {
            setFormData(prev => ({ ...prev, subject: 'Demande de test' }));
            const element = document.getElementById('contact-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    const activities = [
        "Édition, développement et commercialisation de progiciels et solutions logicielles en mode SaaS (GMAO)",
        "Conception, développement et commercialisation de solutions informatiques dédiées aux TPE et PME",
        "Fourniture de services d'hébergement, de maintenance et d'assistance technique",
        "Conseil, audit et formation dans le domaine des systèmes d'information et de la digitalisation",
        "Prestation de services informatiques et technologiques"
    ];

    if (submitted) {
        return (
            <div className="pt-40 pb-20 container max-w-2xl text-center">
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-teal-100 flex flex-col items-center gap-6 animate-fade-in">
                    <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Message envoyé !</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais.
                        {formData.subject === 'Demande de test' && (
                            <span className="block mt-4 font-semibold text-teal-600">
                                Vos identifiants de test vous seront envoyés par email après validation.
                            </span>
                        )}
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-4">
                        Retour au formulaire
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-inter">Contactez-nous</h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Vous avez des questions ou souhaitez une démo personnalisée ? Notre équipe est à votre disposition pour vous accompagner dans votre transformation digitale.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 order-2 lg:order-1" id="contact-form">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Send className="text-teal-600" size={28} />
                                Envoyez-nous un message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Nom complet</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ex: Jean Dupont"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Email professionnel</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Ex: jean@entreprise.com"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Ex: +212 6..."
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Société</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Ex: GMAOlogix"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Objet de votre demande</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50/50 appearance-none"
                                    >
                                        <option value="Informations générales">Informations générales</option>
                                        <option value="Demande de test">Demande de test (Essai gratuit)</option>
                                        <option value="Support technique">Support technique</option>
                                        <option value="Partenariat">Partenariat</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50/50 resize-none"
                                    ></textarea>
                                </div>

                                {formData.subject === 'Demande de test' && (
                                    <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 flex items-start gap-4">
                                        <ShieldCheck className="text-teal-600 shrink-0 mt-1" size={20} />
                                        <p className="text-sm text-teal-800">
                                            <strong>Note :</strong> Pour des raisons de sécurité, vos identifiants d'accès personnalisés vous seront transmis par email après vérification de votre demande par nos administrateurs.
                                        </p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    variant="primary"
                                    className="w-full py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-teal-500/25"
                                >
                                    {submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="lg:col-span-1 space-y-8 order-1 lg:order-2">
                        {/* Quick Contact */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Mail className="text-teal-600" size={24} />
                                Coordonnées
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                                        <MapPin className="text-teal-600" size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Siège social</p>
                                        <p className="text-slate-600 text-sm mt-1">Technopark Casablanca, Route de Nouaceur, Casablanca, Maroc</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                                        <Mail className="text-teal-600" size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Email</p>
                                        <a href="mailto:contact@gmaologix.com" className="text-teal-600 hover:underline text-sm font-semibold mt-1 block">contact@gmaologix.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legal Info */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Building2 className="text-teal-600" size={24} />
                                Informations Légales
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                                    <span className="text-slate-500 text-sm">Dénomination</span>
                                    <span className="font-bold text-slate-900 text-sm">GMAOlogix SARL</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                                    <span className="text-slate-500 text-sm">Capital social</span>
                                    <span className="font-bold text-slate-900 text-sm">100.000,00 DH</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                                    <span className="text-slate-500 text-sm">Engagements</span>
                                    <span className="font-bold text-teal-600 text-xs px-2 py-1 bg-teal-50 rounded-lg">Loi 09-08 (CNDP)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
