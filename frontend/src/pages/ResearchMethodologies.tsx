import MethodologyCard from '../components/MethodologyCard';
import { Users, BarChart2, Link as LinkIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const qualitativeMethods = [
    {
        name: 'Focus Groups',
        description: 'Moderated group discussions (6–10 participants) that explore attitudes, perceptions, and motivations in depth.',
    },
    {
        name: 'In-Depth Interviews',
        description: 'One-on-one conversations that uncover individual perspectives, experiences, and decision-making processes.',
    },
    {
        name: 'Ethnographic Studies',
        description: 'Observational research in natural settings to understand real-world behaviors and contexts.',
    },
    {
        name: 'Online Communities',
        description: 'Extended engagement with target consumers over days or weeks to explore evolving opinions.',
    },
];

const quantitativeMethods = [
    {
        name: 'Online Surveys',
        description: 'Large-scale structured questionnaires deployed digitally to collect statistically representative data.',
    },
    {
        name: 'Data Analytics',
        description: 'Advanced statistical modeling, regression analysis, and machine learning applied to research data.',
    },
    {
        name: 'Tracking Studies',
        description: 'Continuous or wave-based measurement of key metrics over time to identify trends and changes.',
    },
    {
        name: 'Conjoint Analysis',
        description: 'Sophisticated trade-off analysis to understand how consumers value different product attributes.',
    },
];

export default function ResearchMethodologies() {
    return (
        <div className="min-h-screen bg-navy-900">
            {/* Header */}
            <div className="bg-navy-950 border-b border-navy-800/60 py-16 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                        Research Methodologies
                    </div>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                        How We Conduct Research
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl leading-relaxed">
                        We employ both qualitative and quantitative research methodologies, selecting and combining approaches based on your specific research objectives.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-muted-foreground font-body leading-relaxed text-base">
                        The choice between qualitative and quantitative research—or a mixed-methods approach—depends on your research questions. We guide you to the right methodology and execute it with precision.
                    </p>
                </div>

                {/* Methodology cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <MethodologyCard
                        type="qualitative"
                        title="Qualitative Research"
                        subtitle="Depth & Understanding"
                        description="Qualitative research explores the 'why' behind consumer behavior. Through rich, open-ended conversations and observations, we uncover motivations, attitudes, and emotional drivers that quantitative data alone cannot reveal."
                        icon={Users}
                        methods={qualitativeMethods}
                        accentColor="bg-gold-400"
                    />
                    <MethodologyCard
                        type="quantitative"
                        title="Quantitative Research"
                        subtitle="Scale & Precision"
                        description="Quantitative research answers 'how many' and 'how much' questions with statistical confidence. Large representative samples and rigorous analytical techniques deliver reliable, generalizable insights."
                        icon={BarChart2}
                        methods={quantitativeMethods}
                        accentColor="bg-navy-300"
                    />
                </div>

                {/* Mixed methods section */}
                <div className="bg-navy-800/60 border border-gold-700/20 rounded-sm p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                                Best of Both Worlds
                            </div>
                            <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
                                Mixed-Methods Research
                            </h2>
                            <p className="text-muted-foreground font-body leading-relaxed mb-6">
                                Many of our most impactful projects combine qualitative and quantitative methods. Qualitative research generates hypotheses and uncovers nuance; quantitative research validates and quantifies. Together, they deliver a complete picture.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold"
                            >
                                Discuss Your Research Needs
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Qual → Quant', desc: 'Explore then validate' },
                                { label: 'Quant → Qual', desc: 'Quantify then explain' },
                                { label: 'Parallel', desc: 'Simultaneous methods' },
                                { label: 'Sequential', desc: 'Phased approach' },
                            ].map((item) => (
                                <div key={item.label} className="p-4 bg-navy-700/40 border border-navy-600/40 rounded-sm">
                                    <div className="text-sm font-body font-semibold text-gold-400 mb-1">{item.label}</div>
                                    <div className="text-xs text-muted-foreground font-body">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
