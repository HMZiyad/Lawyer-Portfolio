import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Globe, Award, ChevronDown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const AchievementCategory = ({ title, icon: Icon, count, children }: { title: string, icon: any, count: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all hover:border-justice-gold/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
            >
                <div className="flex items-center gap-6">
                    <div className="p-4 rounded-full bg-justice-gold/10 border border-justice-gold/20 group-hover:bg-justice-gold/20 transition-colors">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-justice-gold" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-white group-hover:text-justice-gold transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{count}</p>
                    </div>
                </div>
                <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? 'bg-justice-gold text-charcoal rotate-180' : 'text-gray-400 group-hover:border-justice-gold'}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-justice-gold/5 rounded-full blur-[100px] -z-10" />

            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-justice-gold font-serif italic text-xl mb-3 block">Honors & Distinctions</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Achievements
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        Highlights of my journey in Moot Court, Model United Nations, and beyond.
                    </p>
                </motion.div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {/* Moot Court Events */}
                    <AchievementCategory title="Moot Court Honors" icon={Trophy} count="8 Distinctions & Awards">
                        <ul className="space-y-6">
                            {[
                                {
                                    role: "Assistant Coach, Team of Presidency University",
                                    event: "IBA ICC Moot Court Competition 2025, Organized by the International Bar Association (IBA) and the Grotius Center for International Legal Studies at Leiden University, The Hague, Netherlands",
                                    award: "Achieved IBA Spirit of the Competition Award"
                                },
                                {
                                    role: "Memorial Judge",
                                    event: "Philip C. Jessup International Law Moot Court Competition 2025, Organized by International Law Students Association (ILSA)",
                                    award: ""
                                },
                                {
                                    role: "Researcher",
                                    event: "1st Virtual Intra-Department Moot Court Competition 2020 organized by Dhaka University Moot Court Society (DUMCS)",
                                    award: "Achieved Best Researcher award, Honorable Mention"
                                },
                                {
                                    role: "Researcher",
                                    event: "Monroe E Price Media Law Moot Court Competition 2023, International Rounds organized by University of Oxford",
                                    award: "Team Ranked 15th Globally"
                                },
                                {
                                    role: "Researcher",
                                    event: "Monroe E Price Media Law Moot Court Competition 2023, South Asia Regional Rounds organized by National Law University Delhi",
                                    award: ""
                                },
                                {
                                    role: "Researcher",
                                    event: "Monroe E Price Media Law Moot Court Competition 2021, South Asia Regional Rounds and International Rounds organized by National Law University Delhi and University of Oxford",
                                    award: ""
                                },
                                {
                                    role: "Researcher",
                                    event: "8th RMLNLU SCC Online International Media Law Moot Court Competition, 2020",
                                    award: ""
                                },
                                {
                                    role: "Researcher",
                                    event: "9th Inter-Year Moot Court Competition, 2019 organized by Dhaka University Moot Court Society",
                                    award: ""
                                }

                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex flex-col md:flex-row md:items-start gap-2 text-gray-300 font-light text-base leading-relaxed pl-4 border-l-2 border-white/10 hover:border-justice-gold transition-colors group/item"
                                >
                                    <div className="flex-grow">
                                        <span className="font-bold text-white whitespace-nowrap group-hover/item:text-justice-gold transition-colors">{item.role},</span>
                                        <span className="group-hover/item:text-gray-200 transition-colors">
                                            {item.event}
                                            {item.award && <span className="block mt-1 font-semibold text-justice-gold/90">🏆 {item.award}</span>}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </AchievementCategory>

                    {/* Model United Nations (MUN) */}
                    <AchievementCategory title="Model United Nations (MUN)" icon={Globe} count="4 Executive Board Roles">
                        <ul className="space-y-6">
                            {[
                                {
                                    role: "President",
                                    desc: "International Criminal Court (ICC) Committee, Glenrich Model United Nations (GlenMUN VII) 2025"
                                },
                                {
                                    role: "President",
                                    desc: "International Court of Justice (ICJ) Committee, Aga Khan Academy Model United Nations (AKADMUN Session I) 2025"
                                },
                                {
                                    role: "President",
                                    desc: "International Criminal Court (ICC) Committee, Scholastica Model United Nations Conference Session VIII (SchoMUN VIII) 2024"
                                },
                                {
                                    role: "Director of Legislative Development and Reform Programs",
                                    desc: "United Nations Commission on International Trade Law (UNCITRAL) Committee, Scholastica Model United Nations 2024 (SMUN'24)"
                                }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex flex-col md:flex-row md:items-start gap-2 text-gray-300 font-light text-base leading-relaxed pl-4 border-l-2 border-white/10 hover:border-justice-gold transition-colors group/item"
                                >
                                    <span className="font-bold text-white whitespace-nowrap group-hover/item:text-justice-gold transition-colors">{item.role} –</span>
                                    <span className="group-hover/item:text-gray-200 transition-colors">{item.desc}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </AchievementCategory>

                    {/* Other Events */}
                    <AchievementCategory title="Certifications & Events" icon={Award} count="7 Participations & Publications">
                        <ul className="space-y-4">
                            {[
                                "Participant at the \"Bay of Bengal Conversation 2024\" hosted by the Center for Governance Studies (CGS)",
                                "Participant at 2021 Clinical Legal Education Mock Pre-Trial Hearing Main Event organized by BABSEACLE",
                                "Participant at 2021 Regional and National Clinical Legal Education Mock Pre-Trial Hearing Workshop organized by BABSEACLE",
                                "Presented a Paper at UMSAILS-UAP International Virtual Conference titled \"The Impact of Covid-19 Pandemic in the Legal Field\"",
                                "Participant at The Kathmandu Dialogue - Virtual International Confluence of Academicians – 2020 hosted by Kathmandu School of Law",
                                "Champions of the 5th DRMC-Petromax LPG National Language Festival and ACC IT Carnival 2016 Call of Duty 4 Tournament",
                                "Runners-Up of Gigabyte Gaming Fest, 2018; the Joshephites Technovation, 2017 and Gigabyte MGBHS Gaming EXPO, 2016 Call of Duty 4 tournaments."
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 text-gray-300 font-light text-base leading-relaxed group/item hover:text-gray-200 transition-colors"
                                >
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-justice-gold flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </AchievementCategory>
                </div>
            </SectionWrapper>
        </section>
    );
}
