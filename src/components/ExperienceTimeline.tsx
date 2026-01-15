import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function ExperienceTimeline() {
    const experiences = [
        {
            role: "Assistant Case Manager (EB-1 Wing)",
            org: "Attorney Raju Mahajan & Associates",
            date: "Nov 2024 – Current",
            desc: "Specializing in NIW Department, handling EB-1 evaluation, documentation, and client communication for high-skilled immigration cases."
        },
        {
            role: "Assistant Deputy Team Lead (Litigation)",
            org: "Attorney Raju Mahajan & Associates",
            date: "May 2023 – Oct 2024",
            desc: "Managed litigation team workflow, conducted comprehensive legal research, and received 'Employee of the Month' award."
        },
        {
            role: "Apprentice Lawyer",
            org: "District & Sessions Judge Court, Dhaka",
            date: "Dec 2022 – June 2023",
            desc: "Prepared documents for civil and criminal litigation and observed court hearings."
        },
        {
            role: "Court Intern",
            org: "National Center for State Courts (NCSC)",
            date: "June 2022 – Dec 2022",
            desc: "Monitored case hearings in Anti-Terrorism and Cyber Crime Tribunals; prepared detailed reports on courtroom proceedings."
        }
    ];

    const containerRef = useRef(null);

    return (
        <section id="experience" className="py-20 bg-charcoal relative" ref={containerRef}>
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
                        A timeline of my legal career and contributions to the field.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-justice-gold via-justice-gold/50 to-transparent transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-justice-gold border-4 border-charcoal transform -translate-x-1/2 shadow-[0_0_0_4px_rgba(197,160,89,0.2)]" />

                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-8 md:pl-0`}>
                                    <div
                                        className={`bg-charcoal/50 backdrop-blur-md p-8 rounded-lg border border-gray-800 hover:border-justice-gold/30 transition-all group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                            }`}
                                    >
                                        <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-justice-gold transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className={`flex flex-col gap-2 mb-4 text-sm text-justice-gold/80 font-medium ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'
                                            }`}>
                                            <span className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" /> {exp.org}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> {exp.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" /> Location Not Specified
                                            </span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed font-light">
                                            {exp.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
