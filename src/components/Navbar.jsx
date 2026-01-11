import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const navItems = [
        { name: 'LA GMAO', path: '/' },
        {
            name: 'DÉCOUVREZ',
            submenu: [
                { name: 'GMAO : Définition et bénéfices', path: '/guide' },
                { name: "Qu'est-ce que le SaaS ?", path: '/guide#saas' },
                { name: 'Visuel de GMAOlogix', path: '/visuel-gmaologix' }
            ]
        },
        {
            name: 'TESTEZ',
            submenu: [
                { name: 'Demander le test', path: '/contact#test' },
                { name: 'Accéder au démo', path: 'https://gmaologixxdemo.netlify.app/', external: true }
            ]
        },
        { name: 'TARIFS', path: '/pricing' },
        { name: 'CONTACT', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-5'}`}>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <Logo className="h-10 text-primary" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.submenu ? (
                                <>
                                    <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-teal-500 transition-colors uppercase">
                                        {item.name} <ChevronDown className="w-4 h-4" />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        {item.submenu.map((sub) => (
                                            sub.external ? (
                                                <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-teal-600 border-l-2 border-transparent hover:border-teal-500 transition-all">
                                                    {sub.name}
                                                </a>
                                            ) : (
                                                <Link key={sub.name} to={sub.path} className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-teal-600 border-l-2 border-transparent hover:border-teal-500 transition-all">
                                                    {sub.name}
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`text-sm font-medium hover:text-teal-500 transition-colors uppercase ${location.pathname === item.path ? 'text-teal-600 font-bold' : 'text-slate-600'}`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/contact#test">
                        <Button variant="danger" className="shadow-lg shadow-red-500/30">Démonstration</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-slate-200/50 p-6 flex flex-col gap-4 animate-fade-in bg-white/95 overflow-y-auto max-h-[80vh]">
                    {navItems.map((item) => (
                        <div key={item.name} className="flex flex-col">
                            {item.submenu ? (
                                <>
                                    <button
                                        className="text-slate-700 text-lg py-3 border-b border-slate-100 font-semibold flex justify-between items-center"
                                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                    {activeDropdown === item.name && (
                                        <div className="bg-slate-50/50 rounded-lg mt-2 flex flex-col">
                                            {item.submenu.map((sub) => (
                                                sub.external ? (
                                                    <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-slate-600 border-b border-slate-50 last:border-none">
                                                        {sub.name}
                                                    </a>
                                                ) : (
                                                    <Link key={sub.name} to={sub.path} className="px-6 py-3 text-slate-600 border-b border-slate-50 last:border-none">
                                                        {sub.name}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="text-slate-700 text-lg py-3 border-b border-slate-100 font-semibold"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link to="/contact#test" className="mt-4">
                        <Button variant="danger" className="w-full">Démonstration</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
