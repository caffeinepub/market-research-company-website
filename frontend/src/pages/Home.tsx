import { Link } from '@tanstack/react-router';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import {
    ClipboardList,
    Target,
    Swords,
    FlaskConical,
    PieChart,
    Megaphone,
    Users,
    BarChart2,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';

const featuredServices = [
    {
        id: 'customer-satisfaction',
        title: 'Customer Satisfaction Surveys',
        description: 'Measure and track customer experience across all touchpoints to drive loyalty and retention.',
        icon: ClipboardList,
        tags: ['NPS', 'CSAT', 'CES'],
    },
    {
        id: 'brand-positioning',
        title: 'Brand Positioning',
        description: 'Define and strengthen your brand\'s unique position in the market relative to competitors.',
        icon: Target,
        tags: ['Brand Equity', 'Perception'],
    },
    {
        id: 'competitor-analysis',
        title: 'Competitor Analysis',
        description: 'Gain strategic intelligence on competitors\' strengths, weaknesses, and market positioning.',
        icon: Swords,
        tags: ['SWOT', 'Benchmarking'],
    },
    {
        id: 'product-testing',
        title: 'Product Testing',
        description: 'Validate product concepts and features with real users before launch to minimize risk.',
        icon: FlaskConical,
        tags: ['Concept Testing', 'UX'],
    },
    {
        id: 'market-segmentation',
        title: 'Market Segmentation',
        description: 'Identify and profile distinct customer segments to enable targeted marketing strategies.',
        icon: PieChart,
        tags: ['Demographics', 'Psychographics'],
    },
    {
        id: 'advertising-tracking',
        title: 'Advertising Tracking',
        description: 'Measure the effectiveness and ROI of advertising campaigns across all channels.',
        icon: Megaphone,
        tags: ['Ad Recall', 'ROI', 'Attribution'],
    },
];

const whyChooseUs = [
    'Rigorous mixed-methods research design',
    'Expert analysts with 15+ years experience',
    'Actionable insights, not just raw data',
    'Custom research tailored to your goals',
    'Fast turnaround without sacrificing quality',
    'Confidential and secure data handling',
];

export default function Home() {
    return (
        <div>
            <Hero />

            {/* Services Section */}
            <section className="py-20 bg-navy-900 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                            Our Services
                        </div>
                        <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                            Comprehensive Research Solutions
                        </h2>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                            From customer insights to competitive intelligence, we offer a full suite of market research services designed to inform your most critical business decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {featuredServices.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-gold-700/50 text-gold-400 font-body font-medium text-sm hover:bg-gold-400/5 transition-colors group"
                        >
                            View All Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Methodologies Preview */}
            <section className="py-20 bg-navy-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                                Research Approach
                            </div>
                            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                                Qualitative & Quantitative Excellence
                            </h2>
                            <p className="text-muted-foreground font-body leading-relaxed mb-6">
                                We combine the depth of qualitative research with the statistical power of quantitative methods to deliver a complete picture of your market.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-navy-800/60 border border-gold-700/30 rounded-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users className="w-4 h-4 text-gold-400" />
                                        <span className="text-sm font-body font-semibold text-foreground">Qualitative</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-body">Focus groups, in-depth interviews, ethnographic studies</p>
                                </div>
                                <div className="p-4 bg-navy-800/60 border border-navy-600/40 rounded-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BarChart2 className="w-4 h-4 text-navy-300" />
                                        <span className="text-sm font-body font-semibold text-foreground">Quantitative</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-body">Large-scale surveys, statistical analysis, data modeling</p>
                                </div>
                            </div>
                            <Link
                                to="/research-methodologies"
                                className="inline-flex items-center gap-2 text-gold-400 font-body font-medium text-sm hover:text-gold-300 transition-colors group"
                            >
                                Learn About Our Methodologies
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-navy-800/60 border border-navy-700/50 rounded-sm p-8 geo-dots">
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {[85, 72, 91, 68, 79, 88].map((val, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1">
                                            <div className="w-full bg-navy-700/60 rounded-sm overflow-hidden h-16 flex items-end">
                                                <div
                                                    className="w-full gold-gradient rounded-sm"
                                                    style={{ height: `${val}%`, opacity: 0.7 + (i % 3) * 0.1 }}
                                                />
                                            </div>
                                            <span className="text-xs text-muted-foreground font-body">{val}%</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center text-xs text-muted-foreground font-body">
                                    Sample Research Data Visualization
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-navy-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                            Why InsightPro
                        </div>
                        <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                            Research You Can Trust
                        </h2>
                        <p className="text-muted-foreground font-body max-w-xl mx-auto">
                            Our commitment to methodological rigor and actionable insights sets us apart.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {whyChooseUs.map((point) => (
                            <div key={point} className="flex items-start gap-3 p-4 bg-navy-800/40 border border-navy-700/40 rounded-sm">
                                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground font-body">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-gold group"
                        >
                            Start Your Research Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
