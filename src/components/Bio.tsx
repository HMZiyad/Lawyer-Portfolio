import { motion } from 'framer-motion';
import { Scale, BookOpen, Globe } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Bio() {
    const highlights = [
        { icon: Scale, title: "Legal Research", desc: "Digital & Media Law, Constitutional Law, International Human Rights" },
        { icon: BookOpen, title: "Case Management", desc: "Complex immigration litigation & legal research" },
        { icon: Globe, title: "Global Perspective", desc: "IELTS Band 8.0, cross-cultural communication" },
    ];

    return (
        <section id="bio" className="py-20 bg-charcoal relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                        <span className="text-justice-gold font-serif italic text-xl mb-4 block">Professional Profile</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                            Dedicated to <span className="text-justice-gold">Justice</span> & <br />
                            Legal Excellence
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                I am an aspiring lawyer and tech enthusiast with a profound dedication to the rule of law and sustainable development.
                                My academic journey at the <strong className="text-white font-medium">University of Dhaka</strong> has been defined by
                                rigorous legal research and a commitment to understanding the complexities of modern jurisprudence.
                            </p>
                            <p>
                                My expertise spans <span className="text-justice-gold/80 hover:text-justice-gold transition-colors cursor-default">Digital Law</span>,
                                <span className="text-justice-gold/80 hover:text-justice-gold transition-colors cursor-default"> Media Law</span>, and
                                <span className="text-justice-gold/80 hover:text-justice-gold transition-colors cursor-default"> International Human Rights</span>.
                                I combine traditional legal analysis with modern technological proficiency to offer unique insights into contemporary legal challenges.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-6">
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif text-justice-gold font-bold">3.67</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider mt-1">CGPA (LL.M.)</span>
                            </div>
                            <div className="w-px bg-gray-700 h-16 self-center" />
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif text-justice-gold font-bold">Top 10%</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider mt-1">Class Rank</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Highlights Cards */}
                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="p-6 rounded-lg border border-gray-800 bg-charcoal/50 backdrop-blur-sm hover:border-justice-gold/50 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded bg-justice-gold/10 text-justice-gold group-hover:bg-justice-gold group-hover:text-charcoal transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
