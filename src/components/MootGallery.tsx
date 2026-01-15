import { motion } from 'framer-motion';
import { Trophy, FileText, ExternalLink, Award, Scale, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function MootGallery() {
    return (
        <section id="research" className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-justice-gold/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px] -z-10" />

            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-justice-gold font-serif italic text-xl mb-3 block">Scholarly Pursuits</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Research & <span className="text-justice-gold">Achievements</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        Distinctions in moot court competitions and contributions to legal scholarship.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column: Moot Court Honors */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-justice-gold/10 border border-justice-gold/20">
                                <Trophy className="w-6 h-6 text-justice-gold" />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-white">Moot Court Honors</h3>
                        </div>

                        <div className="grid gap-4">
                            {[
                                {
                                    title: "2nd Best Researcher Award",
                                    event: "1st Virtual Intra-Dept Moot Court Competition (2020)",
                                    icon: Award
                                },
                                {
                                    title: "15th Global Rank",
                                    event: "Monroe E Price Media Law Moot Court Competition (Oxford, 2021)",
                                    icon: GlobeIcon
                                },
                                {
                                    title: "Researcher - South Asia Rounds",
                                    event: "represented University of Dhaka in New Delhi",
                                    icon: Scale
                                },
                                {
                                    title: "Researcher - International Rounds",
                                    event: "8th RMLNLU SCC Online International Media Law Moot",
                                    icon: FileText
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative p-5 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-xl hover:border-justice-gold/40 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-justice-gold/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="mt-1 min-w-[24px]">
                                            <CheckCircle2 className="w-5 h-5 text-justice-gold/60 group-hover:text-justice-gold transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-justice-gold transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                                                {item.event}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Publications & Skills */}
                    <div className="space-y-8">
                        {/* Publication Card */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-justice-gold/10 border border-justice-gold/20">
                                    <FileText className="w-6 h-6 text-justice-gold" />
                                </div>
                                <h3 className="text-2xl font-serif font-semibold text-white">Featured Publication</h3>
                            </div>

                            <motion.a
                                href="#"
                                whileHover={{ y: -5 }}
                                className="block p-8 bg-gradient-to-b from-charcoal to-charcoal/80 border border-justice-gold/30 rounded-2xl relative group shadow-2xl shadow-black/50"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-5 h-5 text-justice-gold" />
                                </div>

                                <span className="inline-block px-3 py-1 rounded-full bg-justice-gold/10 text-justice-gold text-xs font-bold tracking-wider uppercase mb-4 text-center border border-justice-gold/20">
                                    Legal Commentary
                                </span>

                                <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-justice-gold transition-colors">
                                    Overview of Export Processing Zones Labour Act (2019)
                                </h4>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    A comprehensive analysis of the legal framework governing labor rights, trade unions, and industrial relations within Bangladesh's EPZs.
                                </p>

                                <div className="h-px w-full bg-gradient-to-r from-justice-gold/50 to-transparent" />
                            </motion.a>
                        </div>

                        {/* Competencies */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-justice-gold/10 border border-justice-gold/20">
                                    <Award className="w-6 h-6 text-justice-gold" />
                                </div>
                                <h3 className="text-2xl font-serif font-semibold text-white">Core Competencies</h3>
                            </div>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Legal Research', 'Constitutional Law', 'Media Law',
                                        'Analytical Thinking', 'Adobe Premiere Pro', 'Sony Vegas', 'MS Office'
                                    ].map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-charcoal border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-justice-gold hover:text-justice-gold transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}

// Icon helper
function GlobeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
