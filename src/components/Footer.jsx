import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 text-slate-300">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <Logo className="h-10 text-white" />
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        La solution de gestion de maintenance assistée par ordinateur nouvelle génération. Simple, puissante et mobile.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Produit</h4>
                    <ul className="space-y-3">
                        <li><Link to="/features" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Fonctionnalités</Link></li>
                        <li><Link to="/pricing" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Tarifs</Link></li>
                        <li><Link to="/guide" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Guide GMAO</Link></li>
                        <li><Link to="/partners" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Partenaires</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-400 text-sm">
                            <MapPin className="text-teal-500 shrink-0" size={18} />
                            <span>Technopark Casablanca, Route de Nouaceur,<br />Angle RS 114 et CT 1029, Casablanca, Maroc</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400 text-sm">
                            <Phone className="text-teal-500 shrink-0" size={18} />
                            <span>+212 5 22 XX XX XX</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400 text-sm">
                            <Mail className="text-teal-500 shrink-0" size={18} />
                            <span>contact@gmaologix.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                    <p className="text-slate-500 text-sm mb-4">Recevez nos dernières actualités et conseils maintenance.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        />
                        <Button variant="primary" className="justify-center shadow-glow">S'abonner</Button>
                    </form>
                </div>
            </div>

            <div className="border-t border-slate-900 pt-8 text-center">
                <p className="text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} GMAOlogix SARL. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
