import { Link } from '@tanstack/react-router';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    tags?: string[];
}

export default function ServiceCard({ id, title, description, icon: Icon, tags }: ServiceCardProps) {
    return (
        <Link
            to="/services/$serviceId"
            params={{ serviceId: id }}
            className="group block bg-navy-800/60 border border-navy-700/60 rounded-sm p-6 card-hover cursor-pointer"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-sm bg-gold-400/10 border border-gold-700/30 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
            </div>

            <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-gold-300 transition-colors">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {description}
            </p>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-sm bg-navy-700/60 text-muted-foreground border border-navy-600/40 font-body"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </Link>
    );
}
