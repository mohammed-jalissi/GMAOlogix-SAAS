import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisualDiscovery from '../components/VisualDiscovery';

const VisualDiscoveryPage = () => {
    return (
        <div className="flex flex-col min-h-screen font-inter text-slate-900 bg-slate-100">
            <Navbar />
            <main className="flex-grow pt-20">
                <VisualDiscovery />
            </main>
            <Footer />
        </div>
    );
};

export default VisualDiscoveryPage;
