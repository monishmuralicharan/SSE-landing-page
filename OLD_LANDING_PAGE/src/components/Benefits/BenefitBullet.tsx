import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-4 lg:gap-6 lg:flex-row lg:items-start"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 w-fit">
                <div className="p-3 bg-blue-50 rounded-full">
                    {icon}
                </div>
            </div>
            <div className="text-center lg:text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet