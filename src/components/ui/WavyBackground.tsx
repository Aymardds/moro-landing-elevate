import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WavyBackgroundProps {
    className?: string;
    colors?: string[];
    opacity?: number;
}

export const WavyBackground = ({
    className,
    colors = ["#1B7D3C", "#F7941D", "#1B7D3C"],
    opacity = 0.05,
}: WavyBackgroundProps) => {
    const waves = [
        {
            d: "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z",
            duration: 20,
            delay: 0,
        },
        {
            d: "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z",
            duration: 25,
            delay: -5,
        },
        {
            d: "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z",
            duration: 18,
            delay: -2,
        },
    ];

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute bottom-0 w-[200%] h-full opacity-30 left-0"
                style={{ transform: "translateX(0)" }}
            >
                {waves.map((wave, index) => (
                    <motion.path
                        key={index}
                        d={wave.d}
                        fill={colors[index % colors.length]}
                        fillOpacity={opacity}
                        animate={{
                            x: ["-50%", "0%"],
                        }}
                        transition={{
                            duration: wave.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: wave.delay,
                        }}
                    />
                ))}
            </svg>

            {/* Reverse direction waves for more complexity */}
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute bottom-0 w-[200%] h-full opacity-20 left-[-100%]"
            >
                {waves.map((wave, index) => (
                    <motion.path
                        key={`rev-${index}`}
                        d={wave.d}
                        fill={colors[(index + 1) % colors.length]}
                        fillOpacity={opacity}
                        animate={{
                            x: ["0%", "50%"],
                        }}
                        transition={{
                            duration: wave.duration * 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: wave.delay - 10,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};
