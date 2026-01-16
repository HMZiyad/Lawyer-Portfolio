import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-justice-gold border-4 border-charcoal transform -translate-x-1/2 shadow-[0_0_0_4px_rgba(197,160,89,0.2)] z-10" />

            {/* Content Card */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-8 md:pl-0`}>
                <div
                    className={`bg-charcoal/50 backdrop-blur-md p-6 md:p-8 rounded-lg border border-gray-800 hover:border-justice-gold/30 transition-all group relative overflow-hidden ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                >
                    <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1 group-hover:text-justice-gold transition-colors">
                            {exp.role}
                        </h3>

                        <div className={`flex flex-col gap-1 mb-4 text-sm text-justice-gold/80 font-medium ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                            {exp.dept && <span className="italic text-gray-400">{exp.dept}, {exp.org}</span>}
                            {!exp.dept && <span className="italic text-gray-400">{exp.org}</span>}
                            <span className="flex items-center gap-2 mt-1">
                                <Calendar className="w-4 h-4" /> {exp.date}
                            </span>
                        </div>

                        {/* Collapsible Content */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <ul className={`list-disc space-y-2 text-gray-400 font-light text-sm leading-relaxed mb-4 pt-2 border-t border-white/5 ${index % 2 === 0 ? 'ml-4' : 'mr-4 md:mr-0 md:ml-4 rtl:md:ml-0'}`}>
                                        {exp.points.map((point: string, i: number) => (
                                            <li key={i} className={`text-left ${index % 2 !== 0 ? 'md:text-right text-left' : ''} list-none`}>
                                                <span className="mr-2 text-justice-gold">•</span>{point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Toggle Button */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-justice-gold hover:text-white transition-colors mt-2 ${index % 2 === 0 ? 'ml-0' : 'ml-auto mr-0 md:ml-auto md:mr-0' /* Simple logic to align button same as text */}`}
                            style={{ marginLeft: index % 2 !== 0 ? 'auto' : '0' }} // Force alignment logic
                        >
                            {isExpanded ? 'Hide Details' : 'View Responsibilities'}
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
};

export default function ExperienceTimeline() {
    const experiences = [
        {
            role: "Assistant Case Manager / Deputy Team Lead",
            org: "Attorney Raju Mahajan & Associates",
            dept: "EB-1A Department",
            date: "November 2024 - August 2025",
            points: [
                "Team management, coordination, drafting, documentation, client communication, and any other tasks assigned by the head of department.",
                "Assist the Head of the EB-1A Department in overseeing team management, ensuring efficient coordination and optimal workflow execution.",
                "Lead the drafting and refinement of petitions for extraordinary individuals, meeting the highest standards of precision, compliance, and legal excellence.",
                "Supervise case managers, guiding them through complex employment-based immigration processes while ensuring accuracy and efficiency.",
                "Ensure accountability across departmental functions by monitoring case progress, enforcing deadlines, and fostering a results-driven team culture.",
                "Collaborate closely with the Head of Department to refine strategies, align departmental goals, and drive operational success."
            ]
        },
        {
            role: "Assistant Case Manager / Assistant Deputy Team Lead",
            org: "Attorney Raju Mahajan & Associates",
            dept: "Litigation Department",
            date: "May 2023 - October 2024",
            points: [
                "Assist the Head of the Litigation Department in overseeing team operations and managing administrative functions.",
                "Supervise workflow efficiency, case management, and the preparation of legal documents within the department.",
                "Conduct comprehensive legal research to support complex immigration litigation, analyzing statutes, case law, and regulatory frameworks.",
                "Provide leadership in coordinating litigation strategies and ensuring smooth departmental operations.",
                "Recognized for outstanding performance as the department's highest-rated employee in a firm-wide assessment and awarded Employee of the Month."
            ]
        },
        {
            role: "Apprentice Lawyer",
            org: "District & Sessions Judge Court, Dhaka",
            dept: "",
            date: "December 2022 - June 2023",
            points: [
                "Prepared documents pertaining to civil and criminal litigation and observed court hearings."
            ]
        },
        {
            role: "Court Intern",
            org: "National Center for State Courts (NCSC)",
            dept: "",
            date: "June 2022 - December 2022",
            points: [
                "Monitored case hearings bearing national importance in the Anti-Terrorism and Cyber Crime Tribunal and prepared detailed reports.",
                "Attended and assisted in organizing specialized training sessions for courtroom officials, including judges and prosecutors, while taking notes and preparing transcriptions and reports.",
                "Maintained essential coordination between courtroom officials and the NCSC legal team."
            ]
        },
        {
            role: "Junior Copywriter",
            org: "Fraktal LLC",
            dept: "",
            date: "March 2020 - April 2022",
            points: [
                "Wrote around 300 creative and informative content including blogs and articles for international clients."
            ]
        }
    ];

    const containerRef = useRef(null);

    return (
        <section id="experience" className="py-10 bg-charcoal relative" ref={containerRef}>
            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Professional <span className="text-justice-gold">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        A detailed timeline of my legal career, leadership roles, and contributions.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-justice-gold via-justice-gold/50 to-transparent transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
