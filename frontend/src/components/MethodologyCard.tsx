import { LucideIcon } from 'lucide-react';

interface Method {
    name: string;
    description: string;
}

interface MethodologyCardProps {
    type: 'qualitative' | 'quantitative';
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    methods: Method[];
    accentColor: string;
}

export default function MethodologyCard({
    type,
    title,
    subtitle,
    description,
    icon: Icon,
    methods,
    accentColor,
}: MethodologyCardProps) {
    const isQualitative = type === 'qualitative';

    return (
        <div className={`relative bg-navy-800/60 border rounded-sm p-8 overflow-hidden ${
            isQualitative ? 'border-gold-700/40' : 'border-navy-600/60'
        }`}>
            {/* Background accent */}
            <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 ${accentColor}`} />

            <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-body font-medium tracking-wider uppercase mb-4 ${
                    isQualitative
                        ? 'bg-gold-400/10 text-gold-400 border border-gold-700/30'
                        : 'bg-navy-600/40 text-navy-200 border border-navy-500/40'
                }`}>
                    <Icon className="w-3.5 h-3.5" />
                    {subtitle}
                </div>

                <h3 className="font-display font-bold text-2xl text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{description}</p>

                <div className="section-divider mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {methods.map((method) => (
                        <div key={method.name} className="flex gap-3">
                            <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                isQualitative ? 'bg-gold-400' : 'bg-navy-300'
                            }`} />
                            <div>
                                <div className="text-sm font-body font-semibold text-foreground mb-0.5">
                                    {method.name}
                                </div>
                                <div className="text-xs text-muted-foreground font-body leading-relaxed">
                                    {method.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
