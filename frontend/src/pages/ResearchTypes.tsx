import ResearchTypeCard from '../components/ResearchTypeCard';
import {
    Search,
    BookOpen,
    MessageSquare,
    BarChart2,
    FileText,
    Compass,
} from 'lucide-react';

const researchTypes = [
    {
        number: '01',
        title: 'Primary Research',
        icon: Search,
        description: 'Primary research involves collecting original data directly from sources for a specific research purpose. It provides first-hand, current information tailored precisely to your research questions.',
        keyPoints: [
            'Original data collected specifically for your study',
            'Surveys, interviews, focus groups, observations',
            'Higher cost but highly relevant and current',
            'Full control over methodology and data quality',
        ],
    },
    {
        number: '02',
        title: 'Secondary Research',
        icon: BookOpen,
        description: 'Secondary research analyzes existing data and published information from external sources. It provides context, benchmarks, and background intelligence efficiently and cost-effectively.',
        keyPoints: [
            'Analysis of existing published data and reports',
            'Industry reports, government data, academic studies',
            'Cost-effective and fast to execute',
            'Ideal for market sizing and trend analysis',
        ],
    },
    {
        number: '03',
        title: 'Qualitative Research',
        icon: MessageSquare,
        description: 'Qualitative research explores the depth and richness of human experience through non-numerical data. It uncovers motivations, attitudes, and the "why" behind consumer behavior.',
        keyPoints: [
            'Focus groups, in-depth interviews, ethnography',
            'Rich, nuanced insights into consumer psychology',
            'Smaller samples, exploratory in nature',
            'Generates hypotheses for quantitative testing',
        ],
    },
    {
        number: '04',
        title: 'Quantitative Research',
        icon: BarChart2,
        description: 'Quantitative research collects and analyzes numerical data to identify patterns, test hypotheses, and make statistically valid generalizations about a population.',
        keyPoints: [
            'Surveys, experiments, observational data',
            'Large representative samples',
            'Statistical analysis and modeling',
            'Generalizable, measurable findings',
        ],
    },
    {
        number: '05',
        title: 'Descriptive Research',
        icon: FileText,
        description: 'Descriptive research accurately describes characteristics of a population or phenomenon. It answers "what" questions and provides a snapshot of the current state of the market.',
        keyPoints: [
            'Describes market characteristics and behaviors',
            'Cross-sectional or longitudinal designs',
            'Surveys, observational studies, case studies',
            'Foundation for further analytical research',
        ],
    },
    {
        number: '06',
        title: 'Exploratory Research',
        icon: Compass,
        description: 'Exploratory research investigates new or poorly understood phenomena to generate insights and hypotheses. It is flexible, open-ended, and ideal for early-stage research questions.',
        keyPoints: [
            'Investigates new or undefined problems',
            'Flexible, iterative research design',
            'Focus groups, expert interviews, literature review',
            'Informs the design of subsequent research',
        ],
    },
];

export default function ResearchTypes() {
    return (
        <div className="min-h-screen bg-navy-900">
            {/* Header */}
            <div className="bg-navy-950 border-b border-navy-800/60 py-16 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                        Research Types
                    </div>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                        Types of Market Research
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl leading-relaxed">
                        Understanding the different types of research helps us select the right approach for your specific business questions and objectives.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {researchTypes.map((type) => (
                        <ResearchTypeCard key={type.number} {...type} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 bg-navy-800/60 border border-gold-700/20 rounded-sm p-8 lg:p-12 text-center">
                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
                        Not Sure Which Research Type You Need?
                    </h2>
                    <p className="text-muted-foreground font-body max-w-xl mx-auto mb-6">
                        Our research consultants will help you identify the right approach based on your business objectives, timeline, and budget.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold"
                    >
                        Speak with a Research Consultant
                    </a>
                </div>
            </div>
        </div>
    );
}
