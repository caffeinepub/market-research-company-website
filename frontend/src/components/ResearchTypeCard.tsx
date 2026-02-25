import { LucideIcon } from 'lucide-react';

interface ResearchTypeCardProps {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
    keyPoints: string[];
}

export default function ResearchTypeCard({ number, title, description, icon: Icon, keyPoints }: ResearchTypeCardProps) {
    return (
        <div className="group bg-navy-800/50 border border-navy-700/50 rounded-sm p-6 card-hover">
            <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-gold-400/10 border border-gold-700/30 flex items-center justify-center group-hover:bg-gold-400/15 transition-colors">
                    <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-xs font-body text-gold-600 font-medium tracking-wider uppercase mb-1">
                        {number}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-gold-300 transition-colors">
                        {title}
                    </h3>
                </div>
            </div>

            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {description}
            </p>

            <ul className="flex flex-col gap-1.5">
                {keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-600 flex-shrink-0" />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}
