import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const overlay = overlayRef.current;
        if (!video || !overlay) return;

        // Stable playback speed
        video.playbackRate = 0.85;

        let animationFrameId: number;

        const handleLoopTransition = () => {
            // Safety check
            if (!video.duration || isNaN(video.duration)) {
                animationFrameId = requestAnimationFrame(handleLoopTransition);
                return;
            }

            const t = video.currentTime;
            const d = video.duration;
            const fadeWindow = 0.8; // Total transition time spread (0.4s end, 0.4s start)
            const halfWindow = fadeWindow / 2;

            let opacity = 0;

            // Fade IN (approaching end)
            if (d - t < halfWindow) {
                // Normalize from 0 to 1
                opacity = 1 - ((d - t) / halfWindow);
            }
            // Fade OUT (just started)
            else if (t < halfWindow) {
                // Normalize from 1 to 0
                opacity = 1 - (t / halfWindow);
            }

            // Clamp opacity between 0 and 1
            opacity = Math.max(0, Math.min(1, opacity));

            // Apply directly for performance (bypassing React render cycle)
            overlay.style.opacity = opacity.toString();

            animationFrameId = requestAnimationFrame(handleLoopTransition);
        };

        animationFrameId = requestAnimationFrame(handleLoopTransition);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background Video & Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100 contrast-110 grayscale-[30%]"
                >
                    <source src="/Video_Generation_for_Full_Rotation.mp4" type="video/mp4" />
                </video>

                {/* Loop Transition Mask - Fades in/out at loop points */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-charcoal z-10 pointer-events-none opacity-0"
                    style={{ willChange: 'opacity' }}
                />

                {/* Gradient Overlays for Text Readability & Edge Blending */}
                {/* Gradient Overlays for Text Readability & Edge Blending (Reduced Opacity) */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-transparent z-0" />
                {/* Horizontal gradients to blend pillar-boxed video edges (Reduced) */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal z-0 opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#1A1A1A_100%)] opacity-30 z-0" />
            </div>

            {/* Abstract Elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-justice-gold rounded-full mix-blend-overlay animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-5xl mx-auto mt-12 md:mt-0"
                >
                    {/* Simple Top Tag */}
                    <div className="mb-6">
                        <span className="text-justice-gold tracking-[0.3em] text-xs md:text-sm font-bold uppercase opacity-90">
                            Legal Professional
                        </span>
                    </div>

                    {/* Main Name */}
                    <motion.h1
                        className="text-5xl md:text-8xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-justice-gold mb-8 leading-tight md:leading-none py-2 tracking-tight"
                        animate={{
                            filter: [
                                "drop-shadow(0 4px 4px rgba(0,0,0,0.5)) drop-shadow(0 0 0px rgba(197,160,89,0))",
                                "drop-shadow(0 4px 4px rgba(0,0,0,0.5)) drop-shadow(0 0 25px rgba(197,160,89,0.4))",
                                "drop-shadow(0 4px 4px rgba(0,0,0,0.5)) drop-shadow(0 0 0px rgba(197,160,89,0))"
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Md Rafi <br className="md:hidden block" />
                        <span className="text-justice-gold inline-block">Ibn Masud</span>
                    </motion.h1>

                    {/* Degrees Line */}
                    <div className="mb-12">
                        <span className="text-xl md:text-3xl text-gray-200 font-light tracking-wide drop-shadow-md border-b border-justice-gold/40 pb-3 block md:inline font-sans">
                            LL.B. | LL.M. (University of Dhaka)
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full max-w-sm md:max-w-none mx-auto">
                        <a
                            href="#research"
                            className="group relative w-full md:w-auto px-10 py-4 bg-justice-gold text-charcoal font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:-translate-y-1"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                View Legal Research <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>

                        <a
                            href="#contact"
                            className="group w-full md:w-auto px-10 py-4 border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-10"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
}
