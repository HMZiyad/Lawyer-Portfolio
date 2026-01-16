import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Gallery() {
    // Local images from public/gallery
    const images = [
        {
            url: "/gallery/court.jpeg",
            title: "The Courtroom",
            location: "The Hague",
            desc: "The prestigious hall where justice is served."
        },
        {
            url: "/gallery/rafi.jpeg",
            title: "In Action",
            location: "IBA ICC",
            desc: "Presenting arguments during the competition rounds."
        },
        {
            url: "/gallery/building.jpeg",
            title: "The Venue",
            location: "Leiden Univ",
            desc: "The historic Grotius Center for International Legal Studies."
        },
        {
            url: "/gallery/rafi2.jpeg",
            title: "Representing",
            location: "Netherlands",
            desc: "Proudly representing the university on the global stage."
        },
        {
            url: "/gallery/clock.jpeg",
            title: "Timeless Justice",
            location: "Architecture",
            desc: "Capturing the intricate details of the legal architecture."
        },
        {
            url: "/gallery/rafi3.jpeg",
            title: "Reflection",
            location: "Post-Round",
            desc: "A moment of reflection after an intense mooting session."
        },
        {
            url: "/gallery/art.jpeg",
            title: "Legal Art",
            location: "Court Decor",
            desc: "Artistic elements symbolizing the weight of the law."
        },
        {
            url: "/gallery/clock2.jpeg",
            title: "Details",
            location: "Perspective",
            desc: "Focusing on the finer details that make up the big picture."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const getImageIndex = (offset: number) => {
        return (currentIndex + offset + images.length) % images.length;
    };

    const variants = {
        center: {
            x: 0,
            scale: 1,
            zIndex: 30,
            opacity: 1,
            rotateY: 0,
            filter: "brightness(1) blur(0px)",
            transition: { duration: 0.5 }
        },
        left: {
            x: "-60%",
            scale: 0.85,
            zIndex: 20,
            opacity: 0.7,
            rotateY: 15,
            filter: "brightness(0.7) blur(2px)",
            transition: { duration: 0.5 }
        },
        right: {
            x: "60%",
            scale: 0.85,
            zIndex: 20,
            opacity: 0.7,
            rotateY: -15,
            filter: "brightness(0.7) blur(2px)",
            transition: { duration: 0.5 }
        },
        hiddenLeft: {
            x: "-120%",
            scale: 0.6,
            zIndex: 10,
            opacity: 0,
            transition: { duration: 0.5 }
        },
        hiddenRight: {
            x: "120%",
            scale: 0.6,
            zIndex: 10,
            opacity: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="gallery" className="py-24 bg-charcoal relative overflow-hidden min-h-[900px] flex items-center">
            {/* Background Gradient & Texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#1a1c23] to-charcoal pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <SectionWrapper className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-gray-400 font-sans tracking-[0.2em] text-sm uppercase mb-3 block">Gallery</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        My Visual <span className="text-justice-gold">Diary</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto font-light text-base leading-relaxed">
                        See the world through my lens: adventures in moot courts, legal competitions, and global travels.
                    </p>
                </motion.div>

                {/* Categories / Pills Mockup */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {['The Hague', 'Competitions', 'Team', 'Travel', 'University'].map((tag, i) => (
                        <span key={i} className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide border cursor-pointer transition-all ${i === 0 ? 'bg-white text-charcoal border-white' : 'text-gray-400 border-white/10 hover:border-justice-gold hover:text-justice-gold'}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* 3D Carousel Stage */}
                <div className="relative h-[500px] flex items-center justify-center perspective-1000">

                    {/* Navigation Buttons (Left) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-20 z-40 p-3 rounded-full border border-white/10 bg-black/20 text-white hover:bg-justice-gold hover:text-charcoal hover:border-justice-gold transition-all backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Navigation Buttons (Right) */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-20 z-40 p-3 rounded-full border border-white/10 bg-black/20 text-white hover:bg-justice-gold hover:text-charcoal hover:border-justice-gold transition-all backdrop-blur-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Cards */}
                    <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex justify-center items-center">
                        <AnimatePresence initial={false} mode="popLayout">
                            {[-2, -1, 0, 1, 2].map((offset) => {
                                const index = getImageIndex(offset);
                                let position = 'center';
                                if (offset === -1) position = 'left';
                                if (offset === 1) position = 'right';
                                if (offset <= -2) position = 'hiddenLeft';
                                if (offset >= 2) position = 'hiddenRight';

                                return (
                                    <motion.div
                                        key={`${index}-${offset}`} // Unique key for AnimatePresence
                                        variants={variants}
                                        initial={direction > 0 ? (offset === 1 ? 'right' : (offset === 0 ? 'left' : 'center')) : (offset === -1 ? 'left' : (offset === 0 ? 'right' : 'center'))}
                                        animate={position}
                                        className="absolute w-[280px] md:w-[380px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-charcoal"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <img
                                            src={images[index].url}
                                            alt={images[index].title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Overlay Content (Only visible on center/active card) */}
                                        {offset === 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                            >
                                                <div className="flex items-center gap-2 text-justice-gold text-xs font-bold uppercase tracking-wider mb-2">
                                                    <MapPin className="w-3 h-3" />
                                                    {images[index].location}
                                                </div>
                                                <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                                                    {images[index].title}
                                                </h3>
                                                <p className="text-gray-300 text-sm opacity-90 font-light">
                                                    {images[index].desc}
                                                </p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8 md:mt-12">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-justice-gold' : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

            </SectionWrapper>
        </section>
    );
}
