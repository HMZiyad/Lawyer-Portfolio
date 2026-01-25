import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Education() {
    return (
        <section id="education" className="py-10 bg-charcoal relative">
            <SectionWrapper className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif text-white mb-4">
                        Academic <span className="text-justice-gold">Excellence</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif text-white flex items-center gap-3 mb-6">
                            <GraduationCap className="text-justice-gold" /> Degrees
                        </h3>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 bg-white/5 border-l-2 border-justice-gold rounded-r-lg"
                        >
                            <h4 className="text-xl font-bold text-white">Master of Laws (LL.M. General)</h4>
                            <p className="text-justice-gold font-medium">University of Dhaka</p>
                            <p className="text-gray-400 text-sm mt-1">2022 – 2023</p>
                            <p className="text-gray-300 mt-2">CGPA: 3.67/4.00 (Top 10%)</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 bg-white/5 border-l-2 border-justice-gold rounded-r-lg"
                        >
                            <h4 className="text-xl font-bold text-white">Bachelor of Laws (LL.B.)</h4>
                            <p className="text-justice-gold font-medium">University of Dhaka</p>
                            <p className="text-gray-400 text-sm mt-1">2018 – 2022</p>
                        </motion.div>
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif text-white flex items-center gap-3 mb-6">
                            <Award className="text-justice-gold" /> Certifications
                        </h3>

                        <div className="space-y-4">
                            {[
                                { title: "IELTS Academic: Band 8.0", issuer: "International English Language Testing System", year: "2024" },
                                { title: "Trade Rules, Sustainable Development and the Law", issuer: "University of Cambridge", year: "2024" },
                                { title: "Refugee Law Protection", issuer: "UNHCR & University of Dhaka", year: "2023" },
                            ].map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <h4 className="font-bold text-white">{cert.title}</h4>
                                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                                    <p className="text-xs text-justice-gold mt-1">{cert.year}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
