import AnalysisSection from '../components/AnalysisSection';
import { TrendingUp, Users, Swords, Globe, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const analysisSections = [
    {
        icon: TrendingUp,
        category: 'Market Trends',
        title: 'Identify and Capitalize on Market Trends',
        description: 'Our market trend analysis helps you understand where your industry is heading, identify emerging opportunities, and anticipate disruptions before they impact your business.',
        items: [
            {
                title: 'Trend Identification',
                description: 'Systematic scanning of market signals, consumer behavior shifts, and industry developments.',
            },
            {
                title: 'Growth Opportunity Mapping',
                description: 'Quantify the size and attractiveness of emerging market opportunities.',
            },
            {
                title: 'Disruption Assessment',
                description: 'Evaluate the potential impact of technological, regulatory, and competitive disruptions.',
            },
        ],
        reversed: false,
    },
    {
        icon: Users,
        category: 'Customer Analysis',
        title: 'Deep Understanding of Your Customers',
        description: 'Customer analysis goes beyond demographics to understand the motivations, needs, and decision-making processes of your target audience. We build rich customer profiles that drive effective strategy.',
        items: [
            {
                title: 'Customer Journey Mapping',
                description: 'Map the complete customer experience from awareness through purchase and loyalty.',
            },
            {
                title: 'Needs & Motivations Analysis',
                description: 'Uncover the functional and emotional drivers behind customer decisions.',
            },
            {
                title: 'Behavioral Segmentation',
                description: 'Identify distinct customer groups based on purchase behavior and engagement patterns.',
            },
        ],
        reversed: true,
    },
    {
        icon: Swords,
        category: 'Competitive Landscape',
        title: 'Navigate the Competitive Landscape',
        description: 'A thorough understanding of your competitive environment is essential for strategic planning. We provide comprehensive competitive intelligence that informs positioning, product, and go-to-market decisions.',
        items: [
            {
                title: 'Competitive Benchmarking',
                description: 'Measure your performance against key competitors on critical dimensions.',
            },
            {
                title: 'White Space Analysis',
                description: 'Identify unmet needs and underserved segments in the competitive landscape.',
            },
            {
                title: 'Threat & Opportunity Assessment',
                description: 'Evaluate competitive threats and identify strategic opportunities for differentiation.',
            },
        ],
        reversed: false,
    },
];

const capabilities = [
    { icon: Globe, title: 'Global Reach', description: 'Research capabilities across 50+ countries and markets' },
    { icon: TrendingUp, title: 'Trend Forecasting', description: 'Predictive analytics to anticipate market shifts' },
    { icon: Users, title: 'Consumer Panels', description: 'Access to proprietary panels of 2M+ consumers' },
    { icon: Swords, title: 'Competitive Intel', description: 'Continuous monitoring of competitive activities' },
];

export default function MarketAnalysis() {
    return (
        <div className="min-h-screen bg-navy-900">
            {/* Header */}
            <div className="bg-navy-950 border-b border-navy-800/60 py-16 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                        Market & Customer Analysis
                    </div>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                        Market & Customer Analysis
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl leading-relaxed">
                        Transform complex market data into clear strategic direction. Our analysis frameworks help you understand your market, your customers, and your competition with precision.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Capabilities bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {capabilities.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="p-5 bg-navy-800/60 border border-navy-700/50 rounded-sm text-center">
                            <div className="w-10 h-10 rounded-sm bg-gold-400/10 border border-gold-700/30 flex items-center justify-center mx-auto mb-3">
                                <Icon className="w-5 h-5 text-gold-400" />
                            </div>
                            <div className="text-sm font-body font-semibold text-foreground mb-1">{title}</div>
                            <div className="text-xs text-muted-foreground font-body leading-relaxed">{description}</div>
                        </div>
                    ))}
                </div>

                {/* Analysis sections */}
                <div className="flex flex-col gap-20">
                    {analysisSections.map((section) => (
                        <div key={section.category}>
                            <AnalysisSection {...section} />
                            <div className="section-divider mt-20" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 bg-navy-800/60 border border-gold-700/20 rounded-sm p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
                                Ready for Deeper Market Intelligence?
                            </h2>
                            <p className="text-muted-foreground font-body leading-relaxed">
                                Our analysts are ready to design a custom market and customer analysis program tailored to your strategic priorities.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold group"
                            >
                                Request a Proposal
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm border border-gold-700/50 text-gold-400 font-body font-medium text-sm hover:bg-gold-400/5 transition-colors"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
