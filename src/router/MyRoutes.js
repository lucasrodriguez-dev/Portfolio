import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/pages/HomePage';
import { PortfolioPage } from '../components/pages/PortfolioPage';
import { ContactPage } from '../components/pages/ContactPage';
import { ServicesPage } from '../components/pages/ServicesPage';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { ProjectPage } from '../components/pages/ProjectPage';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <section className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    );
}
