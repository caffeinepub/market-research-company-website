import { LucideIcon } from 'lucide-react';

interface AnalysisItem {
    title: string;
    description: string;
}

interface AnalysisSectionProps {
    icon: LucideIcon;
    category: string;
    title: string;
    description: string;
    items: AnalysisItem[];
    reversed?: boolean;
}

export default function AnalysisSection({ icon: Icon, category, title, description, items, reversed }: AnalysisSectionProps) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text content */}
            <div className={reversed ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                    <Icon className="w-3.5 h-3.5" />
                    {category}
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{description}</p>

                <div className="flex flex-col gap-4">
                    {items.map((item) => (
                        <div key={item.title} className="flex gap-4 p-4 bg-navy-800/40 border border-navy-700/40 rounded-sm">
                            <div className="mt-0.5 w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                            <div>
                                <div className="text-sm font-body font-semibold text-foreground mb-1">{item.title}</div>
                                <div className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual panel */}
            <div className={`${reversed ? 'lg:order-1' : ''} relative`}>
                <div className="bg-navy-800/60 border border-navy-700/50 rounded-sm p-8 geo-dots">
                    <div className="w-16 h-16 rounded-sm gold-gradient flex items-center justify-center mb-6 shadow-gold">
                        <Icon className="w-8 h-8 text-navy-950" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {items.map((item, i) => (
                            <div
                                key={item.title}
                                className={`p-3 rounded-sm border ${
                                    i === 0
                                        ? 'bg-gold-400/10 border-gold-700/30 col-span-2'
                                        : 'bg-navy-700/40 border-navy-600/40'
                                }`}
                            >
                                <div className="text-xs font-body font-medium text-foreground">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold-700/30 rounded-br-sm" />
            </div>
        </div>
    );
}
