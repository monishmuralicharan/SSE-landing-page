"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="section-padding bg-gray-50">
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                <div className="lg:w-1/3">
                    <p className="hidden lg:block text-gray-500 font-medium mb-4">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-3xl md:text-4xl font-bold text-black">
                            Frequently Asked Questions
                        </h2>
                    </SectionTitle>
                    <p className="lg:mt-8 text-gray-600 text-center lg:text-left text-lg">
                        Ask us anything!
                    </p>
                    <a href="mailto:thesocialstockexchange@gmail.com" className="mt-4 block text-xl lg:text-2xl text-blue-600 font-semibold hover:text-blue-700 transition-colors text-center lg:text-left">
                        thesocialstockexchange@gmail.com
                    </a>
                </div>

                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex items-center justify-between w-full px-6 py-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg">
                                                <span className="text-lg font-semibold text-black pr-4">{faq.question}</span>
                                                {open ? 
                                                    <BiMinus className="w-5 h-5 text-blue-600 flex-shrink-0" /> : 
                                                    <BiPlus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                }
                                            </DisclosureButton>
                                            <DisclosurePanel className="px-6 py-4 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;