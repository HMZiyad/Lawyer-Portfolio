import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
}

export default function GalleryModal({ isOpen, onClose, title, images }: GalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setCurrentIndex(0);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Main Content Container */}
                    <div
                        className="relative w-full max-w-6xl h-full md:h-[85vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="absolute top-0 left-0 p-4 text-white z-40">
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-justice-gold mb-1">{title}</h3>
                            <p className="text-sm text-gray-400">{currentIndex + 1} / {images.length}</p>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-justice-gold hover:text-charcoal text-white backdrop-blur-sm transition-all z-40 group"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-justice-gold hover:text-charcoal text-white backdrop-blur-sm transition-all z-40 group"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image Display */}
                        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`Gallery image ${currentIndex + 1}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Thumbnails Strip */}
                        <div className="absolute -bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-xl bg-black/40 backdrop-blur-md overflow-x-auto max-w-[90vw] md:max-w-2xl no-scrollbar">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(idx);
                                    }}
                                    className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 ${idx === currentIndex ? 'border-justice-gold opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
