import { Link } from '@tanstack/react-router';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const stats = [
    { value: '500+', label: 'Research Projects', icon: TrendingUp },
    { value: '98%', label: 'Client Satisfaction', icon: Users },
    { value: '40+', label: 'Industries Served', icon: Target },
];

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-950">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x800.png')" }}
            />

            {/* Geometric overlay */}
            <div className="absolute inset-0 geo-pattern opacity-60" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />

            {/* Decorative gold lines */}
            <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-transparent via-gold-600/40 to-transparent" />
            <div className="absolute top-1/3 right-16 w-px h-32 bg-gradient-to-b from-transparent via-gold-600/20 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-gold-700/40 bg-gold-400/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                        <span className="text-xs font-body font-medium text-gold-400 tracking-wider uppercase">
                            Data-Driven Market Intelligence
                        </span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                        Uncover the{' '}
                        <span className="gold-text-gradient">Insights</span>
                        {' '}That Drive Growth
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl">
                        From customer satisfaction surveys to competitive intelligence, we deliver rigorous qualitative and quantitative research that transforms data into strategic advantage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-gold group"
                        >
                            Explore Our Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border border-gold-700/50 text-foreground font-body font-medium text-base hover:border-gold-500 hover:bg-gold-400/5 transition-all"
                        >
                            Request a Consultation
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8">
                        {stats.map(({ value, label, icon: Icon }) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-sm bg-gold-400/10 border border-gold-700/30 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-gold-400" />
                                </div>
                                <div>
                                    <div className="font-display font-bold text-xl text-foreground">{value}</div>
                                    <div className="text-xs text-muted-foreground font-body">{label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
