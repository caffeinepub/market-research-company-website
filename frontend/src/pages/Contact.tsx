import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'insights@insightrc.com',
        description: 'Send us your research brief',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 9353172674',
        description: 'Mon–Fri, 9am–6pm IST',
    },
    {
        icon: MapPin,
        label: 'Office',
        value: 'Bangalore, India 560001',
        description: 'Headquarters',
    },
    {
        icon: Clock,
        label: 'Response Time',
        value: '1–2 Business Days',
        description: 'We respond promptly to all inquiries',
    },
];

export default function Contact() {
    return (
        <div className="min-h-screen bg-navy-900">
            {/* Header */}
            <div className="bg-navy-950 border-b border-navy-800/60 py-16 geo-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold-400/10 border border-gold-700/30 text-xs font-body font-medium text-gold-400 tracking-wider uppercase mb-4">
                        Contact Us
                    </div>
                    <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                        Let's Talk Research
                    </h1>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl leading-relaxed">
                        Tell us about your research needs and we'll design a custom solution to deliver the insights you need.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact info */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="font-display font-bold text-xl text-foreground mb-2">Get in Touch</h2>
                            <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                Whether you have a specific research brief or just want to explore possibilities, our team is ready to help.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {contactInfo.map(({ icon: Icon, label, value, description }) => (
                                <div key={label} className="flex gap-4 p-4 bg-navy-800/50 border border-navy-700/40 rounded-sm">
                                    <div className="w-9 h-9 rounded-sm bg-gold-400/10 border border-gold-700/30 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-gold-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-0.5">{label}</div>
                                        <div className="text-sm font-body font-medium text-foreground">{value}</div>
                                        <div className="text-xs text-muted-foreground font-body">{description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* What to expect */}
                        <div className="p-5 bg-navy-800/60 border border-gold-700/20 rounded-sm">
                            <h3 className="font-display font-semibold text-base text-foreground mb-3">What to Expect</h3>
                            <ol className="flex flex-col gap-2">
                                {[
                                    'We review your inquiry within 1–2 business days',
                                    'A research consultant will reach out to discuss your needs',
                                    'We prepare a custom research proposal',
                                    'Project kickoff within your desired timeline',
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground font-body">
                                        <span className="w-4 h-4 rounded-full bg-gold-400/20 text-gold-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-navy-800/60 border border-navy-700/50 rounded-sm p-6 lg:p-8">
                            <h2 className="font-display font-bold text-xl text-foreground mb-6">Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
