import { useState } from 'react';
import { useSubmitContactForm } from '../hooks/useQueries';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Loader2, Send } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const submitMutation = useSubmitContactForm();

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await submitMutation.mutateAsync(formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (err) {
            console.error('Failed to submit form:', err);
        }
    };

    const handleChange = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gold-400/15 border border-gold-600/40 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    Thank You for Reaching Out!
                </h3>
                <p className="text-muted-foreground font-body max-w-md leading-relaxed mb-6">
                    Your inquiry has been received. Our research team will review your message and get back to you within 1–2 business days.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-sm border border-gold-700/50 text-gold-400 text-sm font-body font-medium hover:bg-gold-400/5 transition-colors"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-sm font-body font-medium text-foreground">
                        Full Name <span className="text-gold-500">*</span>
                    </Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange('name')}
                        placeholder="John Smith"
                        className={`bg-navy-800/60 border-navy-600/60 text-foreground placeholder:text-muted-foreground focus:border-gold-600 focus:ring-gold-600/20 ${
                            errors.name ? 'border-destructive' : ''
                        }`}
                    />
                    {errors.name && (
                        <p className="text-xs text-destructive font-body">{errors.name}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="text-sm font-body font-medium text-foreground">
                        Email Address <span className="text-gold-500">*</span>
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        placeholder="john@company.com"
                        className={`bg-navy-800/60 border-navy-600/60 text-foreground placeholder:text-muted-foreground focus:border-gold-600 focus:ring-gold-600/20 ${
                            errors.email ? 'border-destructive' : ''
                        }`}
                    />
                    {errors.email && (
                        <p className="text-xs text-destructive font-body">{errors.email}</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <Label htmlFor="company" className="text-sm font-body font-medium text-foreground">
                    Company <span className="text-gold-500">*</span>
                </Label>
                <Input
                    id="company"
                    value={formData.company}
                    onChange={handleChange('company')}
                    placeholder="Acme Corporation"
                    className={`bg-navy-800/60 border-navy-600/60 text-foreground placeholder:text-muted-foreground focus:border-gold-600 focus:ring-gold-600/20 ${
                        errors.company ? 'border-destructive' : ''
                    }`}
                />
                {errors.company && (
                    <p className="text-xs text-destructive font-body">{errors.company}</p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label htmlFor="message" className="text-sm font-body font-medium text-foreground">
                    Message <span className="text-gold-500">*</span>
                </Label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange('message')}
                    placeholder="Tell us about your research needs..."
                    rows={5}
                    className={`bg-navy-800/60 border-navy-600/60 text-foreground placeholder:text-muted-foreground focus:border-gold-600 focus:ring-gold-600/20 resize-none ${
                        errors.message ? 'border-destructive' : ''
                    }`}
                />
                {errors.message && (
                    <p className="text-xs text-destructive font-body">{errors.message}</p>
                )}
            </div>

            {submitMutation.isError && (
                <div className="p-3 rounded-sm bg-destructive/10 border border-destructive/30 text-sm text-destructive font-body">
                    Failed to submit your inquiry. Please try again.
                </div>
            )}

            <button
                type="submit"
                disabled={submitMutation.isPending}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-sm gold-gradient text-navy-950 font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {submitMutation.isPending ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        Send Inquiry
                    </>
                )}
            </button>
        </form>
    );
}
