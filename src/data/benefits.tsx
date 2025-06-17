import { IBenefit } from "@/types";
import { HiClock, HiLightningBolt, HiShare } from "react-icons/hi";

export const benefits: IBenefit[] = [
    {
        title: "Seamless Trading Experience",
        description: "Experience the future of influence investing with our intuitive platform designed for both creators and their audiences.",
        imageSrc: "/images/trading_picture.png",
        bullets: [
            {
                title: "Ease of Use",
                description: "Simple onboarding process that gets you listed and trading within minutes. No complex financial knowledge required.",
                icon: <HiLightningBolt className="w-6 h-6 text-primary" />
            },
            {
                title: "24/7 Trading",
                description: "The influence never sleeps. Our exchange operates around the clock to capture every moment that impacts your value.",
                icon: <HiClock className="w-6 h-6 text-primary" />
            }
        ]
    },
    {
        title: "Real-Time Market Updates",
        description: "Your stock price reflects your influence in real-time, giving your audience immediate feedback on your success and growth.",
        imageSrc: "/images/notification_picture.png",
        bullets: [
            {
                title: "Instantaneous Updates",
                description: "Stock prices update in real-time based on your social metrics, viral content, and major life events.",
                icon: <HiLightningBolt className="w-6 h-6 text-primary" />
            },
            {
                title: "Milestone-Driven Growth",
                description: "Major milestones will bring you new audience to invest more, increasing your stock value and creating exciting growth opportunities.",
                icon: <HiLightningBolt className="w-6 h-6 text-primary" />
            }
        ]
    },
    {
        title: "Social Media Integration",
        description: "Amplify your reach and engage your investor community through seamless social media integration and sharing tools.",
        imageSrc: "/images/updates_picture.png",
        bullets: [
            {
                title: "Share Your Investments",
                description: "Built-in sharing tools let your audience showcase their investments in you across all social platforms.",
                icon: <HiShare className="w-6 h-6 text-primary" />
            },
            {
                title: "Cross-Platform Analytics",
                description: "Track your influence across YouTube, Instagram, TikTok, Twitter, and more with comprehensive analytics.",
                icon: <HiLightningBolt className="w-6 h-6 text-primary" />
            }
        ]
    }
];