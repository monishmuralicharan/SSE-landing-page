"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section section-padding">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-8 lg:flex-row lg:gap-20 lg:flex-nowrap"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-2xl", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                    
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-6 mx-auto lg:ml-0 leading-relaxed text-gray-600 text-lg">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full mt-8">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-8 lg:mt-0", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
                            <Image 
                                src={imageSrc} 
                                alt="title" 
                                width="384" 
                                height="762" 
                                quality={100} 
                                className="lg:ml-0 relative rounded-2xl shadow-2xl" 
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection