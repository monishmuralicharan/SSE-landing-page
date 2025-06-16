import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "The world's first social stock exchange where influence meets investment. Transform your social capital into real financial opportunities.",
    quickLinks: [
        {
            text: "About Us",
            url: "#about"
        },
        {
            text: "Why Us",
            url: "#why-us"
        },
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "FAQs",
            url: "#faq"
        }
    ],
    email: 'contact@socialstockexchange.com',
    telephone: '+1 (555) 123-SSE1',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/SocialStockEx',
        facebook: 'https://facebook.com/SocialStockExchange',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/social-stock-exchange',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/socialstockexchange',
    }
}