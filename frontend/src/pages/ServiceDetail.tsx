import { Link, useParams } from '@tanstack/react-router';
import {
    ClipboardList,
    Target,
    Swords,
    FlaskConical,
    PieChart,
    Megaphone,
    ArrowLeft,
    CheckCircle,
    LucideIcon,
} from 'lucide-react';

interface ServiceData {
    id: string;
    title: string;
    icon: LucideIcon;
    tagline: string;
    description: string;
    benefits: string[];
    process: { step: string; title: string; description: string }[];
    deliverables: string[];
}

const serviceData: Record<string, ServiceData> = {
    'customer-satisfaction': {
        id: 'customer-satisfaction',
        title: 'Customer Satisfaction Surveys',
        icon: ClipboardList,
        tagline: 'Understand what your customers truly think',
        description: 'Our customer satisfaction research programs go beyond simple ratings to uncover the drivers of loyalty, churn, and advocacy. We design, deploy, and analyze surveys that give you a complete picture of the customer experience.',
        benefits: [
            'Identify key drivers of customer satisfaction and dissatisfaction',
            'Track NPS, CSAT, and CES metrics over time',
            'Segment results by customer type, region, or product line',
            'Benchmark against industry standards',
            'Prioritize improvements with impact analysis',
        ],
        process: [
            { step: '01', title: 'Discovery', description: 'We align on your research objectives and define the key questions to answer.' },
            { step: '02', title: 'Survey Design', description: 'Our experts craft validated survey instruments tailored to your audience.' },
            { step: '03', title: 'Deployment', description: 'Multi-channel distribution to maximize response rates and representativeness.' },
            { step: '04', title: 'Analysis', description: 'Advanced statistical analysis to surface actionable insights from the data.' },
            { step: '05', title: 'Reporting', description: 'Clear, executive-ready reports with prioritized recommendations.' },
        ],
        deliverables: ['Executive summary report', 'Detailed findings deck', 'Raw data file', 'Dashboard access', 'Recommendations roadmap'],
    },
    'brand-positioning': {
        id: 'brand-positioning',
        title: 'Brand Positioning',
        icon: Target,
        tagline: 'Own your unique space in the market',
        description: 'Brand positioning research helps you understand how your brand is perceived relative to competitors and identify opportunities to strengthen your market position. We combine qualitative depth with quantitative scale to deliver a complete brand picture.',
        benefits: [
            'Measure brand awareness, consideration, and preference',
            'Identify brand associations and perceptions',
            'Map competitive positioning landscape',
            'Track brand equity over time',
            'Inform brand strategy and messaging',
        ],
        process: [
            { step: '01', title: 'Brand Audit', description: 'Comprehensive review of current brand perceptions and market position.' },
            { step: '02', title: 'Competitive Mapping', description: 'Identify key competitors and map the positioning landscape.' },
            { step: '03', title: 'Consumer Research', description: 'Qualitative and quantitative research with target audiences.' },
            { step: '04', title: 'Positioning Analysis', description: 'Identify white space and differentiation opportunities.' },
            { step: '05', title: 'Strategy Development', description: 'Develop positioning recommendations and messaging frameworks.' },
        ],
        deliverables: ['Brand perception report', 'Competitive positioning map', 'Messaging framework', 'Brand tracking dashboard', 'Strategic recommendations'],
    },
    'competitor-analysis': {
        id: 'competitor-analysis',
        title: 'Competitor Analysis',
        icon: Swords,
        tagline: 'Know your competition inside and out',
        description: 'Our competitor analysis services provide deep intelligence on your competitive landscape. We combine primary consumer research with secondary data analysis to give you a comprehensive view of competitor strategies, strengths, and vulnerabilities.',
        benefits: [
            'Identify competitor strengths and weaknesses',
            'Understand competitor positioning and messaging',
            'Track competitive product and pricing strategies',
            'Identify market gaps and opportunities',
            'Anticipate competitive threats',
        ],
        process: [
            { step: '01', title: 'Scope Definition', description: 'Define the competitive set and key intelligence questions.' },
            { step: '02', title: 'Secondary Research', description: 'Comprehensive desk research on competitor activities and strategies.' },
            { step: '03', title: 'Consumer Perception', description: 'Survey consumers on competitor brand perceptions and preferences.' },
            { step: '04', title: 'SWOT Analysis', description: 'Structured analysis of competitive strengths, weaknesses, opportunities, threats.' },
            { step: '05', title: 'Strategic Implications', description: 'Translate findings into strategic recommendations for your business.' },
        ],
        deliverables: ['Competitive landscape report', 'SWOT analysis', 'Positioning comparison matrix', 'Opportunity assessment', 'Strategic recommendations'],
    },
    'product-testing': {
        id: 'product-testing',
        title: 'Product Testing',
        icon: FlaskConical,
        tagline: 'Validate before you launch',
        description: 'Reduce launch risk and optimize product-market fit with rigorous product testing research. From concept screening to in-home use tests, we help you understand how real consumers experience your products and what drives purchase intent.',
        benefits: [
            'Validate product concepts before development investment',
            'Identify product strengths and improvement areas',
            'Measure purchase intent and willingness to pay',
            'Compare product variants and formulations',
            'Optimize packaging and product presentation',
        ],
        process: [
            { step: '01', title: 'Test Design', description: 'Design the testing protocol based on product stage and research objectives.' },
            { step: '02', title: 'Participant Recruitment', description: 'Recruit qualified participants from your target market.' },
            { step: '03', title: 'Product Exposure', description: 'Controlled product exposure in appropriate testing environment.' },
            { step: '04', title: 'Data Collection', description: 'Collect quantitative ratings and qualitative feedback.' },
            { step: '05', title: 'Optimization Report', description: 'Detailed findings with specific product optimization recommendations.' },
        ],
        deliverables: ['Concept test report', 'Product performance scorecard', 'Consumer verbatim analysis', 'Optimization recommendations', 'Competitive benchmarking'],
    },
    'market-segmentation': {
        id: 'market-segmentation',
        title: 'Market Segmentation',
        icon: PieChart,
        tagline: 'Find and reach your best customers',
        description: 'Market segmentation research identifies distinct groups within your target market based on shared characteristics, needs, and behaviors. We use advanced statistical techniques to develop actionable segments that drive marketing effectiveness.',
        benefits: [
            'Identify the most valuable customer segments',
            'Understand segment-specific needs and motivations',
            'Enable targeted product development and marketing',
            'Optimize resource allocation across segments',
            'Develop segment-specific messaging and positioning',
        ],
        process: [
            { step: '01', title: 'Variable Selection', description: 'Identify the most relevant segmentation variables for your market.' },
            { step: '02', title: 'Data Collection', description: 'Large-scale quantitative survey with comprehensive attitudinal and behavioral measures.' },
            { step: '03', title: 'Statistical Analysis', description: 'Cluster analysis and other advanced techniques to identify natural segments.' },
            { step: '04', title: 'Segment Profiling', description: 'Rich profiles of each segment including size, value, and characteristics.' },
            { step: '05', title: 'Activation Planning', description: 'Develop strategies to reach and engage each priority segment.' },
        ],
        deliverables: ['Segmentation model', 'Segment profiles', 'Sizing and value estimates', 'Targeting recommendations', 'Activation playbook'],
    },
    'advertising-tracking': {
        id: 'advertising-tracking',
        title: 'Advertising Tracking',
        icon: Megaphone,
        tagline: 'Measure what matters in your media',
        description: 'Advertising tracking research measures the effectiveness of your campaigns in building brand awareness, driving consideration, and influencing purchase behavior. We provide continuous tracking or campaign-specific measurement to optimize your media investment.',
        benefits: [
            'Measure advertising awareness and recall',
            'Track brand metric changes driven by advertising',
            'Evaluate creative effectiveness and message takeout',
            'Optimize media mix and channel allocation',
            'Demonstrate advertising ROI to stakeholders',
        ],
        process: [
            { step: '01', title: 'Baseline Measurement', description: 'Establish pre-campaign brand and advertising metrics.' },
            { step: '02', title: 'Tracking Design', description: 'Design continuous or wave-based tracking methodology.' },
            { step: '03', title: 'Ongoing Fieldwork', description: 'Regular data collection throughout the campaign period.' },
            { step: '04', title: 'Performance Analysis', description: 'Analyze metric changes and attribute to advertising exposure.' },
            { step: '05', title: 'Optimization Insights', description: 'Provide real-time insights to optimize campaign performance.' },
        ],
        deliverables: ['Campaign effectiveness report', 'Brand metric tracking dashboard', 'Creative performance analysis', 'Media optimization recommendations', 'ROI assessment'],
    },
};

export default function ServiceDetail() {
    const { serviceId } = useParams({ from: '/services/$serviceId' });
    const service = serviceData[serviceId];

    if (!service) {
        return (
            <div className="min-h-screen bg-navy-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="font-display text-2xl text-foreground mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-gold-400 hover:text-gold-300 font-body">
                        ← Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-navy-900">
            {/* Header */}
            <div className="bg-navy-950 border-b border-navy-800/60 py-16 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-400 font-body text-sm transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Link>

                    <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-sm gold-gradient flex items-center justify-center shadow-gold flex-shrink-0">
                            <Icon className="w-7 h-7 text-navy-950" />
                        </div>
                        <div>
                            <h1 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-2">
                                {service.title}
                            </h1>
                            <p className="text-gold-400 font-body text-lg">{service.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main content */}
                    <div className="lg:col-span-2 flex flex-col gap-12">
                        {/* Overview */}
                        <div>
                            <h2 className="font-display font-bold text-2xl text-foreground mb-4">Overview</h2>
                            <p className="text-muted-foreground font-body leading-relaxed text-base">
                                {service.description}
                            </p>
                        </div>

                        {/* Process */}
                        <div>
                            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Our Process</h2>
                            <div className="flex flex-col gap-4">
                                {service.process.map((step, index) => (
                                    <div key={step.step} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center text-navy-950 font-body font-bold text-sm flex-shrink-0">
                                                {step.step}
                                            </div>
                                            {index < service.process.length - 1 && (
                                                <div className="w-px flex-1 bg-gold-800/30 mt-2" />
                                            )}
                                        </div>
                                        <div className="pb-4">
                                            <h3 className="font-body font-semibold text-foreground mb-1">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="flex flex-col gap-6">
                        {/* Benefits */}
                        <div className="bg-navy-800/60 border border-navy-700/50 rounded-sm p-6">
                            <h3 className="font-display font-semibold text-lg text-foreground mb-4">Key Benefits</h3>
                            <ul className="flex flex-col gap-3">
                                {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground font-body">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Deliverables */}
                        <div className="bg-navy-800/60 border border-gold-700/30 rounded-sm p-6">
                            <h3 className="font-display font-semibold text-lg text-foreground mb-4">Deliverables</h3>
                            <ul className="flex flex-col gap-2">
                                {service.deliverables.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-navy-800/60 border border-navy-700/50 rounded-sm p-6 text-center">
                            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                                Ready to Get Started?
                            </h3>
                            <p className="text-sm text-muted-foreground font-body mb-4">
                                Contact us to discuss your research needs.
                            </p>
                            <Link
                                to="/contact"
                                className="block w-full py-2.5 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-sm hover:opacity-90 transition-opacity text-center"
                            >
                                Request a Proposal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
