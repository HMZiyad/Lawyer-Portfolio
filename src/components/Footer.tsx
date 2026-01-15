import { Mail, Phone, Linkedin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal pt-24 pb-8 relative overflow-hidden border-t border-white/5">
            {/* Subtle Ambient Glow matching other sections */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-justice-gold/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <SectionWrapper className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 tracking-tight">
                        Let's Built the Future
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                        Open for collaborations, new opportunities, or just a chat about <span className="text-white font-medium">Law</span> and <span className="text-white font-medium">Tech</span>.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <a
                            href="mailto:rafimasud99@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-justice-gold text-charcoal font-bold rounded-full hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Get In Touch</span>
                        </a>

                        <div className="flex items-center gap-5">
                            <SocialLink href="tel:+8801682080347" icon={Phone} />
                            <SocialLink href="https://www.linkedin.com/in/md-rafi-ibn-masud-7183701a6/" icon={Linkedin} />
                            <SocialLink href="mailto:rafimasud99@gmail.com" icon={Mail} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Md Rafi Ibn Masud. All rights reserved.</p>
                    <p className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                        Built with React, Tailwind & Framer Motion
                    </p>
                </div>
            </SectionWrapper>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <a
            href={href}
            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}
