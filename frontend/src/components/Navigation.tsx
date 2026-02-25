import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, BarChart3 } from 'lucide-react';

const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Methodologies', href: '/research-methodologies' },
    { label: 'Research Types', href: '/research-types' },
    { label: 'Market Analysis', href: '/market-analysis' },
    { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const routerState = useRouterState();
    const currentPath = routerState.location.pathname;

    return (
        <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur-sm border-b border-gold-800/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center shadow-gold">
                            <BarChart3 className="w-5 h-5 text-navy-950" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-display font-bold text-lg text-foreground tracking-tight">
                                Insight<span className="text-gold-400">RC</span>
                            </span>
                            <span className="text-[10px] text-muted-foreground font-body tracking-widest uppercase">
                                Research &amp; Communications
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = currentPath === link.href || currentPath.startsWith(link.href + '/');
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`px-4 py-2 text-sm font-body font-medium rounded-sm transition-all duration-200 ${
                                        isActive
                                            ? 'text-gold-400 bg-gold-400/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-navy-700/50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            to="/contact"
                            className="ml-4 px-5 py-2 text-sm font-body font-semibold rounded-sm gold-gradient text-navy-950 hover:opacity-90 transition-opacity shadow-gold"
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-navy-900 border-t border-gold-800/20">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const isActive = currentPath === link.href || currentPath.startsWith(link.href + '/');
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`px-4 py-3 text-sm font-body font-medium rounded-sm transition-all ${
                                        isActive
                                            ? 'text-gold-400 bg-gold-400/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-navy-700/50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            to="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 px-4 py-3 text-sm font-body font-semibold text-center rounded-sm gold-gradient text-navy-950"
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
