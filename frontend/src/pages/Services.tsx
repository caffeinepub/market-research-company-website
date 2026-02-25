import ServiceCard from '../components/ServiceCard';
import {
    ClipboardList,
    Target,
    Swords,
    FlaskConical,
    PieChart,
    Megaphone,
} from 'lucide-react';

const services = [
    {
        id: 'customer-satisfaction',
        title: 'Customer Satisfaction Surveys',
        description: 'Measure and track customer experience across all touchpoints. Our comprehensive survey programs capture NPS, CSAT, and CES metrics to help you understand what drives loyalty and where to improve.',
        icon: ClipboardList,
        tags: ['NPS', 'CSAT', 'CES', 'Loyalty'],
    },
    {
        id: 'brand-positioning',
        title: 'Brand Positioning',
        description: 'Define and strengthen your brand\'s unique position in the market. We analyze brand perception, equity, and competitive differentiation to help you craft a compelling brand narrative.',
        icon: Target,
        tags: ['Brand Equity', 'Perception', 'Differentiation'],
    },
    {
        id: 'competitor-analysis',
        title: 'Competitor Analysis',
        description: 'Gain strategic intelligence on your competitors\' strengths, weaknesses, strategies, and market positioning. Stay ahead with comprehensive competitive landscape mapping.',
        icon: Swords,
        tags: ['SWOT', 'Benchmarking', 'Intelligence'],
    },
    {
        id: 'product-testing',
        title: 'Product Testing',
        description: 'Validate product concepts, features, and user experiences with real target audiences before launch. Reduce risk and optimize product-market fit through rigorous testing protocols.',
        icon: FlaskConical,
        tags: ['Concept Testing', 'UX Research', 'Beta Testing'],
    },
    {
        id: 'market-segmentation',
        title: 'Market Segmentation',
        description: 'Identify and profile distinct customer segments based on demographics, psychographics, behaviors, and needs. Enable precision targeting and personalized marketing strategies.',
        icon: PieChart,
        tags: ['Demographics', 'Psychographics', 'Behavioral'],
    },
    {
        id: 'advertising-tracking',
        title: 'Advertising Tracking',
        description: 'Measure the effectiveness, reach, and ROI of your advertising campaigns across all channels. Track brand awareness, ad recall, and purchase intent to optimize your media spend.',
        icon: Megaphone,
        tags: ['Ad Recall', 'ROI', 'Attribution', 'Awareness'],
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-navy-900">
            {/* Page header */}
            <div className="bg-navy-950 border-b border-navy-800/60 py-16 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                        Our Services
                    </div>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                        Market Research Services
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl leading-relaxed">
                        A comprehensive suite of research services designed to deliver the insights you need to make confident, data-driven business decisions.
                    </p>
                </div>
            </div>

            {/* Services grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
