import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Publications() {
    const publications = [
        {
            title: "Women's Right to Abortion in the World After Overturning Roe v. Wade: USA and Bangladesh Context",
            authors: "Dr. Arif Jamil, Md Rafi Ibn Masud, Sal Sabil Chowdhury, Ahmed Ragib Chowdhury",
            journal: "Dhaka University Law Journal, Volume 35, No 2",
            year: "2024",
            displayDate: "2025",
            link: "https://www.banglajol.info/index.php/DULJ/article/view/82841"
        },
        {
            title: "Neither Secured nor Denied: The Right to Health Conundrum of the People of Bangladesh",
            authors: "Ahmed Ragib Chowdhury & Md Rafi Ibn Masud",
            journal: "SCLS Law Review, Volume 6, Issue 1",
            year: "2025",
            displayDate: "2025",
            link: "https://scls-cu.org/scls-law-review-volume-6-issue-1/"
        },
        {
            title: "Overview of Export Processing Zones Labour Act (2019)",
            authors: "Published on Lexology",
            journal: "",
            year: "2022",
            displayDate: "2022",
            link: "https://www.lexology.com/library/detail.aspx?g=89c23bd7-d03f-47e6-8ace-a6814b239b8a"
        }
    ];

    return (
        <section id="publications" className="py-24 bg-charcoal relative overflow-hidden">
            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-justice-gold font-serif italic text-xl mb-3 block">Legal Scholarship</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Research & <span className="text-justice-gold">Publications</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        Contributing to legal discourse through academic research and analysis.
                    </p>
                </motion.div>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-xl hover:border-justice-gold/40 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                <div className="space-y-3 flex-1">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 rounded-lg bg-justice-gold/10 text-justice-gold shrink-0">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">
                                                {pub.link ? (
                                                    <a
                                                        href={pub.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-justice-gold transition-colors hover:underline decoration-justice-gold/50 underline-offset-4 flex items-center gap-2"
                                                    >
                                                        {pub.title}
                                                        <ExternalLink className="w-4 h-4 inline-block" />
                                                    </a>
                                                ) : (
                                                    <span className="group-hover:text-justice-gold transition-colors">
                                                        {pub.title}
                                                    </span>
                                                )}
                                            </h3>
                                            <p className="text-gray-300 mt-2 font-medium">
                                                {pub.authors}
                                            </p>
                                            <p className="text-gray-400 text-sm mt-1 italic">
                                                {pub.journal} {pub.journal && pub.year ? ', ' : ''} {pub.year !== pub.displayDate ? pub.year : ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0">
                                    <span className="text-4xl font-serif font-bold text-white/10 group-hover:text-justice-gold/20 transition-colors">
                                        {pub.displayDate}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}
