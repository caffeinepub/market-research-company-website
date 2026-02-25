import { Link } from '@tanstack/react-router';
import { BarChart3, Heart, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
    Services: [
        { label: 'Customer Satisfaction', href: '/services/customer-satisfaction' },
        { label: 'Brand Positioning', href: '/services/brand-positioning' },
        { label: 'Competitor Analysis', href: '/services/competitor-analysis' },
        { label: 'Product Testing', href: '/services/product-testing' },
        { label: 'Market Segmentation', href: '/services/market-segmentation' },
        { label: 'Advertising Tracking', href: '/services/advertising-tracking' },
    ],
    Research: [
        { label: 'Methodologies', href: '/research-methodologies' },
        { label: 'Research Types', href: '/research-types' },
        { label: 'Market Analysis', href: '/market-analysis' },
    ],
    Company: [
        { label: 'About Us', href: '/' },
        { label: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'insight-research-communications');

    return (
        <footer className="bg-navy-950 border-t border-gold-800/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-navy-950" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-display font-bold text-lg text-foreground">
                                    Insight<span className="text-gold-400">RC</span>
                                </span>
                                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                                    Research &amp; Communications
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-xs">
                            Empowering businesses with data-driven insights through rigorous market research, customer analysis, and strategic intelligence.
                        </p>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gold-600" />
                                <a
                                    href="mailto:insightresearchblr@gmail.com"
                                    className="hover:text-gold-400 transition-colors"
                                >
                                    insightresearchblr@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gold-600" />
                                <span>+91 9353172674</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gold-600" />
                                <span>Bangalore, India 560001</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-body font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-muted-foreground hover:text-gold-400 transition-colors font-body"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section-divider my-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
                    <p>© {year} Insight Research and Communications. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with{' '}
                        <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-500 mx-0.5" />
                        {' '}using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-500 hover:text-gold-400 transition-colors"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
