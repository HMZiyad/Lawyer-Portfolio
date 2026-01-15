import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({ children, className = "", delay = 0.1 }: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(10px)" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "cool" smooth feel
            className={className}
        >
            {children}
        </motion.div>
    );
}
