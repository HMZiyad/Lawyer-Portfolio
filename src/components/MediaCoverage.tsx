import { motion } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function MediaCoverage() {
    const articles = [
        {
            source: "The Daily Star",
            title: "Dhaka University at the 14th Price Media Law Moot Court Competition: Reflections and Outcomes",
            snippet: "A comprehensive look at the team's journey and achievements at the 14th Price Media Law Moot Court Competition.",
            date: "Law & Our Rights",
            link: "https://www.thedailystar.net/law-our-rights/news/dhaka-university-the-14th-price-media-law-moot-court-competition-reflections-and-outcomes-2080269"
        },
        {
            source: "Daily Observer",
            title: "PU honoured at ICC Moot Court Competition",
            snippet: "Presidency University's Department of Law and Justice achieved the inaugural IBA Spirit of the Competition Award at the prestigious IBA ICC Moot Court Competition 2025.",
            date: "News",
            link: "https://www.observerbd.com/news/531857"
        },
        {
            source: "The Daily Star",
            title: "Presidency University achieves global recognition at ICC Moot Court Competition 2025",
            snippet: "The Department of Law and Justice has won the prestigious IBA Spirit of the Competition Award, representing Bangladesh on the global stage in The Hague.",
            date: "Campus / Noticeboard",
            link: "https://www.thedailystar.net/campus/noticeboard/news/presidency-university-achieves-global-recognition-icc-moot-court"
        },
        {
            source: "Presidency University",
            title: "School of Law wins “IBA Spirit of the Competition Award” at ICC Moot Court Competition 2025",
            snippet: "A significant landmark on the global stage: Presidency University represented Bangladesh as the sole participating institution in The Hague, Netherlands.",
            date: "University News",
            link: "https://pu.edu.bd/iccmcc-2025/"
        },
        {
            source: "Prothom Alo",
            title: "Dhaka University's Success in International Competition",
            snippet: "Featuring the team's achievements in the Jessup International Law Moot Court and Price Media Law Moot Court competitions.",
            date: "Lifestyle",
            link: "https://www.prothomalo.com/lifestyle/fuj5ntt1ur"
        }
    ];

    return (
        <section id="media" className="py-10 bg-charcoal relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-justice-gold font-serif italic text-xl mb-3 block">In the News</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Media <span className="text-justice-gold">Coverage</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        Featured stories and reports on mooting achievements and legal contributions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {articles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-justice-gold/40 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink className="w-5 h-5 text-justice-gold" />
                            </div>

                            <div className="mb-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-justice-gold/10 text-justice-gold text-xs font-bold uppercase tracking-wider border border-justice-gold/20">
                                    <Newspaper className="w-3 h-3" />
                                    {article.source}
                                </span>
                            </div>

                            <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-justice-gold transition-colors leading-tight">
                                {article.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {article.snippet}
                            </p>

                            <div className="mt-auto border-t border-white/10 pt-4 text-xs text-gray-500 font-medium uppercase tracking-widest flex justify-between items-center group-hover:text-justice-gold/80 transition-colors">
                                <span>{article.date}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 duration-300">Read Article &rarr;</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}
